<script lang="ts">
	import image from '$assets/starfox-logo.png';

	let date = new Date();
	let yearDate = date.getFullYear();
</script>

<footer class="footer">
	<div class="footer-container">
		<img src={image} alt="Starfox logo" class="image-logo" />
		<h3 class="semi-bold mb-xs">Starfox</h3>
		<div class="mb-l">
			<a href="https://github.com/Starfoxx-21" target="_blank" class="footer-link">GitHub</a>
			<a
				href="https://linkedin.com/in/christianna-anastasiadou/"
				target="_blank"
				class="footer-link">LinkedIn</a
			>
		</div>
		<p>© {yearDate} Starfox. All rights reserved.</p>
	</div>
</footer>

<style>
	.footer {
		background-color: black;
		color: white;
		padding: 30px 20px;
		text-align: center;
	}

	.footer-link {
		margin: 0 10px;
	}

	.image-logo {
		width: 70px;
		filter: invert(100%);
	}
</style>
