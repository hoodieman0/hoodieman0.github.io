<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import MAILTO_SVG from '$lib/assets/email-svgrepo-com-white.svg'
	import GITHUB_SVG from '$lib/assets/github-mark/github-mark/github-mark-white.svg'
	import LINKEDIN_SVG from '$lib/assets/linkedin-logos/LinkedIn-Logos/In/Digital/White/1x/In-White-48.png'
    import HAMBURGER_SVG from '$lib/assets/burger-menu-svgrepo-com.svg'
    import CLOSE_SVG from '$lib/assets/close-x-svgrepo-com.svg'
	import { resolve } from '$app/paths';

	let { children } = $props();
	let showMenu = $state(false);

	function closeMenu() {
		showMenu = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<head>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
</head>

<div class="wrapper">

<nav>
	<div class="name slide-background">
		<a href="{resolve("/")}" onclick={closeMenu}><h1>James Mok</h1></a>
	</div>
	<label for='menu'>
	{#if showMenu}
		<img src={CLOSE_SVG} alt="Close Menu">
	{:else}
		<img src={HAMBURGER_SVG} alt="Menu">
	{/if}
	</label>
	<input id='menu' type='checkbox' bind:checked={showMenu}/>
	<div class="links">
		<a href="{resolve("/")}#projects" class="slide-background" onclick={closeMenu}>Projects</a>
		<a href="{resolve("/journal")}" class="slide-background" onclick={closeMenu}>Journal</a>
		<a href="{resolve("/")}#about" class="slide-background" onclick={closeMenu}>About</a>
		<div class="icons">
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

	/* Hide hamburger menu if not mobile screen */
	nav input[type='checkbox'], nav label {
		display: none;
	}

	@media screen and (max-width: 812px) {
		nav {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0rem;
			padding: 1vh 1vw;
			margin: 0 0;
			top: 0vh;
		}

		nav .name {
			width: 50%;
			padding: 0rem;
		}

		nav .name h1 {
			font-size: 1.5rem;
		}

		nav label img {
			max-width: 10vw;
		}

		nav .links {
			flex-direction: column;
			justify-content: space-evenly;
			gap: 0.5rem;
			width: 100%;
			align-items: center;
		}

		nav .links a{
			font-size: 3rem;
			padding: 0.5rem;
		}

		nav .links .icons {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			width: 100%;
			justify-content: center;
			align-items: center;
		}

		nav .links img {
			max-width: 20vw;
		}

		input[type='checkbox']:checked+div{
			height: 100vh;
			width: 100vw;
		}

		input[type='checkbox']:not(:checked)+div {
			display: none;
		}

		/* Stlying the menu icon, the checkbox stays hidden */
		nav label {
			text-align: right;
			display: block;
			padding: 0.5em;
			align-self: center;
		}
	}
</style>

