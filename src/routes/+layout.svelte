<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import MAILTO_SVG from '$lib/assets/email-svgrepo-com-white.svg'
	import GITHUB_SVG from '$lib/assets/github-mark/github-mark/github-mark-white.svg'
	import LINKEDIN_SVG from '$lib/assets/linkedin-logos/LinkedIn-Logos/In/Digital/White/1x/In-White-48.png'
    import { base, resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="wrapper">

<nav>
	<div class="name slide-background">
		<a href="{resolve("/")}"><h1>James Mok</h1></a>
	</div>
	<div class="links">
		<a href="{resolve("/")}#projects" class="slide-background">Projects</a>
		<a href="{resolve("/journal")}" class="slide-background">Journal</a>
		<a href="{resolve("/")}#about" class="slide-background">About</a>
		<div>
			<a href="mailto:jmok780@gmail.com" aria-label="Send an email to James Mok"> 
				<img src={MAILTO_SVG} alt="Email" class="zoom">
			</a>
			<a href="https://www.linkedin.com/in/james-mok-2a1a311b5/" aria-label="Visit James Mok's LinkedIn profile">
				<img src={LINKEDIN_SVG} alt="LinkedIn" class="zoom"> 
			</a>
			<a href="https://github.com/hoodieman0" aria-label="Visit James Mok's GitHub profile">
				<img src={GITHUB_SVG} alt="GitHub" class="zoom"> 
			</a>
		</div>
	</div>
</nav>

<div class="content">
{@render children()}
</div>

<footer>
	<p>©2025 James Mok</p>
</footer>
</div>

<style>
	:global(body)
	{
		font-family: Montserrat, sans-serif;
		color: whitesmoke;
		background-color: #141528;
		margin: 0;
		padding: 0;

		background-image: url('/circle-scatter-haikei.svg');
		background-size: cover;
	}

	:global(#projects, #about) {
    	scroll-margin-top: 5rem;
	}

	.wrapper
	{
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.content
	{
		flex: 1;
	}

	.slide-background
	{
		background: linear-gradient(to left, transparent 50%, whitesmoke  50%) right;
		background-size: 200% 100%;
		transition: .1s ease-in;
		border-radius: 50px;
	}

	.slide-background:hover 
	{
		color: rgb(94, 111, 181);
    	background-position: left;
	}

	.zoom 
	{
		transition: transform .2s;
	}

	.zoom:hover 
	{
		transform: scale(1.5);
	}

	nav {
		display: flex; 
		align-items: center; 
		gap: 1rem; 
		justify-content: space-between;

		position: sticky;
		top: 0.5vh;
		z-index: 10;

		background-color: rgb(94, 111, 181);
		border-radius: 10px;
		
		margin: 0 15vw 0 15vw;
		padding: 1vh 1vw 1vh 3vw;
	}

	nav .name {
		border: 2px solid whitesmoke;
		border-radius: 50px;
		width: fit-content;
		height: 60px;
		display: flex;
		text-overflow: ellipsis;
		white-space: nowrap;
		align-items: center;
		justify-content: center;
		padding: 0 2rem;
	}

	nav .name h1 {
		font-size: 3rem;
	}

	nav .name a {
		text-decoration: none;
	}

	nav .name a:visited {
		color:inherit;
	}

	nav .links {
		display: flex;
		gap: 1rem;
    	justify-content: flex-end;
		align-items: center;
	}

	nav .links a {
		text-decoration: none;
		font-size: 1.5rem;
		padding: 1rem;
		outline: none;
		color: whitesmoke
	}

	nav .links img {
		max-width: 1.75vw;
	}

	footer 
	{
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(94, 111, 181);
	}

</style>


