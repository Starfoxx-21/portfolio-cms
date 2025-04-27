import { SENDGRID_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }: RequestEvent) {
	const { contactName, contactMail, messageArea } = await request.json();

	if (!contactName || !contactMail || !messageArea) {
		json({ message: 'Could not send email. Missing data.' }, { status: 400 });
	}

	const message = {
		to: 'nekoanise@gmail.com',
		from: 'c.anastasiadou@hotmail.com',
		subject: 'Contact Form on your portfolio',
		html: `Somebody used the contact form on your site. <br/>
        Name: ${contactName},
        Email: ${contactMail},
        Information about the project: ${messageArea}`
	};

	try {
		await sgMail.send(message);
		return json({ emailSentSuccessfully: true });
	} catch (err) {
		return json({ err }, { status: 500 });
	}
}
