<script lang="ts">
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
    import { MediaQuery } from 'svelte/reactivity';

    let { children, data } = $props();

    const mobileScreen = new MediaQuery('(max-width: 812px)');
</script>

{#if !mobileScreen.current}
<aside class="sidebar" in:fade={{duration: 750}}>
    <h2>Recent Posts</h2>
    {#each data.postMeta as post}
        <p><a href={resolve(`/journal/${post.slug}`)}>{post.title}</a></p>
    {/each}
</aside>
{/if}

{@render children()}

<style>
    .sidebar 
    {
        position: fixed;
		background-color: rgb(94, 111, 181);
		border-radius: 10px;
        top: 20vh;
        left: 0.5vw;
        width: 10vw;
        overflow: hidden;
        padding: 0 2rem;
    }

    .sidebar a 
    {
        text-decoration: none;
        color: rgb(18, 229, 229);
        background-color: inherit;
    }

    .sidebar a:visited 
    {
        color: inherit;
    }

</style>