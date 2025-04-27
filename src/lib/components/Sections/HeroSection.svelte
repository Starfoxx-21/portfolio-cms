<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$components/Button.svelte';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="hero-section default-margin">
	<h3>Hello! I'm Christie</h3>
	<div class="underscore mb-m"></div>
	<h1 class="mb-m">I am a Frontend <span class="dark-grey">Developer</span></h1>
	<Button {onclick}>Let's Talk!</Button>
</section>

<style>
	.hero-section {
		padding-top: 60px;
	}
</style>
