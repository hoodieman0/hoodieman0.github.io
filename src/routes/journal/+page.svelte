<script lang="ts">
    import { fade } from 'svelte/transition'
    import { resolve } from '$app/paths';

    import JournalCard from "./JournalCard.svelte";

    let { data } = $props();
</script>

<div in:fade={{duration: 500}} style="padding-bottom: 5rem;">

    <div class="page-content">
        <h1>Recent Posts</h1>
    </div>

    <div class=" post-container">
        {#each data.postMeta as post}
            <a href={resolve(`/journal/${post.slug}`)}><JournalCard {...post} /></a>
        {/each}
    </div>

</div>

<style>
    .page-content 
    {
        text-align: center;
        max-width: 50vw;
        margin: 0 auto;
        padding: 2rem;
		background-color: rgb(0, 18, 32);
    }

    .post-container
    {
        display: grid;
        grid-template-columns: minmax(0, 20vw) minmax(0, 20vw) minmax(0, 20vw);
        column-gap: 5rem;
        row-gap: 3rem;

        margin: 0 15vw 0 15vw;
        padding: 0;
        
        text-align: center;
    }

    .post-container a
    {
        text-decoration: none;
        color: inherit;
        background-color: inherit;
    }

    @media screen and (max-width: 812px) {
        .post-container
        {
            display: flex;
            flex-direction: column;
            /* grid-template-columns: minmax(0, 30vw); */
            place-items: center;
        }
    
        .post-container a 
        {
            justify-content: center;
            align-items: center;
        }
    }
</style>