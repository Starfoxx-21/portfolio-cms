<script lang="ts">
	import {
		HeroSection,
		AboutSection,
		MyWorkSection,
		SkillsSection,
		ContactSection
	} from '$components';

	const { data } = $props();

	let { workExperience, projects, skillIcons } = data;
</script>

<HeroSection />
<AboutSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection skills={skillIcons} />
<ContactSection />
