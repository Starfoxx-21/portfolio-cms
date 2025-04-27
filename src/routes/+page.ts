import sanityClient, { processProjectEntries, getSkillIcon } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const workExperience: SanityWorkExperience[] = await sanityClient.fetch('*[_type == "workExperience"] | order(startDate desc)');

	const rawProject: SanityProject[] = await sanityClient.fetch('*[_type == "project"]');

	const projects = rawProject.map(processProjectEntries)

	const skills: Skill[] = (await sanityClient.fetch('*[_type == "skills"].icon')).flat();

	const skillIcons = skills.map(getSkillIcon)

	return {
		workExperience,
		projects,
		skillIcons
	};
};
