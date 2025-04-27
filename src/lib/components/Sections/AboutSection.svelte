<script lang="ts">
	import { SectionHeadline } from '$components';
	import { ExperienceTable } from '$components';
	import image from '$assets/profile-picture.webp';
	import Button from '$components/Button.svelte';
	import { goto } from '$app/navigation';

  interface AboutMeProps {
    workExperience: SanityWorkExperience[];
  }

	let { workExperience }:AboutMeProps = $props();

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={'about'}>About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img src={image} alt="profile" class="image" />
		<div class="text">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iure temporibus. Tempore
				distinctio voluptatum, suscipit nihil quaerat repudiandae adipisci, quis rerum ullam saepe
				ducimus obcaecati eius ex sequi mollitia sed.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, explicabo!
				Exercitationem quos, omnis distinctio quae expedita consectetur dignissimos placeat corrupti
				nulla iusto recusandae aperiam numquam doloremque temporibus assumenda incidunt cum. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur atque illum distinctio
				tempora, reiciendis iusto voluptatem voluptate sed veniam perspiciatis incidunt voluptatum
				fugiat, asperiores ipsum pariatur! Aperiam, placeat. Aut.
			</p>
			<Button className="mt-m" {onclick}>Tell me about your project</Button>
		</div>
	</div>
	<ExperienceTable {workExperience} />
</section>

<style>
	.content-container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}

	.image {
		width: 42%;
		border-radius: 20px;
		object-fit: cover;
		filter: grayscale();
	}

	.text {
		width: 55%;
		text-align: left;
	}
</style>
