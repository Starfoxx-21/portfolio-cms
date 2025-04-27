import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
	projectId: 'ltihidxb',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-04-12'
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
	const builder = imageUrlBuilder(sanityClient);
	const projectImageUrl = builder.image(rawProject.image).url();

	const processedProject: ProcessedProject = {
		name: rawProject.name,
		company: rawProject.company,
		dateAccomplished: rawProject.dateAccomplished,
		projectUrl: rawProject.projectUrl,
		stack: rawProject.stack,
		slug: rawProject.slug,
		projectImageUrl,
		content: rawProject.content.map(processProjectContent)
	};

	return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
	if (content._type === 'block') {
		const processedTextContent: ProcessedTextContent = {
			type: 'text',
			style: content.style,
			listItem: content.listItem,
			textToRender: content.children.map((elem) => elem.text).join('\n')
		};
		return processedTextContent;
	} else {
		const builder = imageUrlBuilder(sanityClient);
		const projectImageUrl = builder.image(content).url();

		const processedImageContent: ProcessedImageContent = {
			type: 'image',
			url: projectImageUrl
		};

		return processedImageContent;
	}
}

const iconOptions: { [key in Skill]: string } = {
	HTML5: 'devicon-html5-plain',
	CSS3: 'devicon-css3-plain',
	JavaScript: 'devicon-javascript-plain',
	React: 'devicon-react-original',
	'Node.js': 'devicon-nodejs-plain',
	Svelte: 'devicon-svelte-plain',
	TypeScript: 'devicon-typescript-plain',
	Python: 'devicon-python-plain',
	'Vue.js': 'devicon-vuejs-plain',
	GitHub: 'devicon-github-original',
	'VS Code': 'devicon-vscode-plain',
	Bootstrap: 'devicon-bootstrap-plain',
	Git: 'devicon-git-plain',
	jQuery: 'devicon-jquery-plain',
	MySQL: 'devicon-mysql-plain',
	Netlify: 'devicon-netlify-plain',
	NPM: 'devicon-npm-plain',
	Sanity: 'devicon-sanity-plain',
	Supabase: 'devicon-supabase-plain',
	Vercel: 'devicon-vercel-plain',
	WordPress: 'devicon-wordpress-plain',
	Tailwind: 'devicon-tailwindcss-original',
	Astro: 'devicon-astro-plain'
};

export function getSkillIcon(skill: Skill) {
	return iconOptions[skill];
}
