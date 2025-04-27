<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';
	import image from '$assets/starfox-logo.png';

	function goToContactForm() {
		goto('#contact-form');
	}
</script>

<nav class="navbar default-margin">
	<a href="/" class="logo"><img src={image} alt="Starfox logo" class="image-logo" />Starfox</a>
	<div class="navbar-links">
		<a href="/#about" class="nav-link">About</a>
		<a href="/#my-work" class="nav-link">Work</a>
		<Button className="nav-bar" onclick={goToContactForm}>Contact</Button>
	</div>
</nav>

<style>
	.navbar {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		min-width: 100vw;
		background-color: white;
		box-shadow: 0 3px 5px -5px gray;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 20px;
		margin: 0;
		z-index: 50;
	}

	.logo {
		font-size: 35px;
		font-weight: bold;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.image-logo {
		width: 60px;
	}

	.navbar-links {
		display: flex;
		align-items: center;
		gap: 60px;
	}

	.nav-link:hover {
		text-decoration: underline;
	}
</style>
