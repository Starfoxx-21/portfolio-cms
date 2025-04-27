<script lang="ts">
	import { Button, SectionHeadline } from '$components';

	let contactName = $state('');
	let contactMail = $state('');
	let messageArea = $state('');
	let isFormInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

	async function onSubmit(event: Event) {
		event.preventDefault();
		if (contactName && contactMail && messageArea) {
			isLoading = true;
			const response = await fetch('/api/send-mail', {
				method: 'POST',
				body: JSON.stringify({
					contactName,
					contactMail,
					messageArea
				}),
				headers: { 'Content-Type': 'application/json' }
			});

			console.log(response);

			isLoading = false;
			if (response.ok) {
				isEmailSent = true;
			} else {
				showErrorMessage = true;
			}
		} else {
			isFormInvalid = true;
		}
	}

	$effect(() => {
		if (contactName || contactMail || messageArea) {
			isFormInvalid = false;
		}
	});
</script>

<section class="mt-l">
	<SectionHeadline sectionName={'contact-form'}>Let's Talk</SectionHeadline>
	<div class="form-container default-margin mt-m">
		{#if isEmailSent}
			<div class="spinner-container">
				<span>Email sent successfully. Thank you for getting in contact with me.</span>
			</div>
		{:else if isLoading}
			<div class="spinner-container">
				<div class="spinner"></div>
				<span>Sending...</span>
			</div>
		{:else if showErrorMessage}
			<span
				>It seems like there is a trouble with our server at the moment <br /> Please send an email
				directly to <a class="link" href="mailto:c.anastasiadou@hotmail.com">this email.</a>
			</span>
		{:else}
			<form>
				<input
					class={`mb-m ${isFormInvalid && !Boolean(contactName.length) && 'input-error'}`}
					placeholder="Your Name"
					bind:value={contactName}
				/>
				<input
					class={`mb-m ${isFormInvalid && !Boolean(contactMail.length) && 'input-error'}`}
					placeholder="Your Email"
					bind:value={contactMail}
				/>
				<textarea
					class={`message-area ${isFormInvalid && !Boolean(messageArea.length) && 'input-error'}`}
					placeholder="Message"
					bind:value={messageArea}
				></textarea>
				<Button onclick={onSubmit}>Submit</Button>
			</form>
		{/if}

		<div class="form-text">
			<h2 class="bold mb-s">Talk to me about your project</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aut ad voluptatem quaerat
				incidunt veritatis ipsa velit repellat, explicabo, rem doloribus? Incidunt repellat animi,
				optio porro fugit explicabo quis minus.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding-bottom: 140px;
	}

	.form-container {
		display: flex;
		justify-content: space-between;
	}

	.form-text {
		width: 39%;
	}

	.form-text h2 {
		font-size: 25px;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 45%;
	}

	form * {
		font-size: 20px;
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		color: black;
	}

	textarea,
	input {
		width: 100%;
		background-color: rgba(0, 0, 0, 0.035);
		border-radius: 8px;
		outline: none;
		border: none;
	}

	input {
		height: 48px;
		padding: 4px 12px;
	}

	textarea {
		height: 120px;
		margin-bottom: 40px;
		padding: 10px 12px;
	}

	textarea::placeholder,
	input::placeholder {
		font-size: 20px;
		font-weight: 400;
	}

	.input-error {
		background-color: rgba(223, 87, 87, 0.667);
	}

	.input-error::placeholder {
		color: white;
	}

	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: black;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		display: inline-block;
		margin-right: 8px;
		animation: spin 0.5s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.spinner-container {
		display: flex;
	}
</style>
