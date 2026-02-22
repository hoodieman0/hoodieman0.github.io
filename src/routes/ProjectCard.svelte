<script lang="ts">
    import GITHUB_SVG from '$lib/assets/github-mark/github-mark/github-mark-white.svg'

    import { slide } from 'svelte/transition'

    let { title, details, href, backgroundImage = undefined } = $props();
    let hovering = $state(false)
</script>

<div class="project-container zoom"
onmouseenter={() => hovering = true} 
onmouseleave={() => hovering = false}
aria-roledescription="Project card">

    {#if backgroundImage}
        <div
            class="bg"
            style="background-image: url('{backgroundImage}')"
            aria-hidden="true"
        >
        </div>
        <div class="overlay" aria-hidden="true"></div>
    {/if}

    <div class="content">
        {#if !hovering}
            <h2>{title}</h2>
        {:else}
            <p transition:slide={{duration: 500, }}>{@html details}</p>
        {/if}
    </div>

    {#if href !== undefined}
    <a href={href} aria-label="Learn more about the project"><img src={GITHUB_SVG} alt="GitHub"/></a>
    {/if}
</div>

<style>
	.zoom 
	{
		transition: transform .2s;
	}

	.zoom:hover 
	{
        border: 2px solid whitesmoke;
		transform: scale(1.15);
	}

    .project-container {
        position: relative;
        overflow: hidden;
        font-size: 1.4rem;
        background-color: rgb(46, 35, 113);
        margin: 1rem;
        padding: 1rem;
        height: 40vh;
        width: 20vw;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        border-radius: 10px;
    }

    .bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        filter: blur(4px);
        transform: scale(1.2); /* prevents edge bleed */
        opacity: 0.4;
        z-index: 0;
    }

.overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.35);
}

    .project-container .content 
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
        flex-grow: 1;           
        text-align: center;
        z-index: 2;
    }

    .project-container h2,
    .project-container p {
        margin: 0;
    }

    .project-container h2
    {
        text-align: center;
    }

    .project-container p {
        padding: 2rem;

        margin: 0 auto;
        text-align: justify;

        font-size: 1.2rem;
        overflow: hidden;
    }

    .project-container a
    {
        align-self: flex-end;
        margin-top: auto;
        z-index: 2;
    }

    .project-container img {
		max-width: 1.75vw;
    }
</style>