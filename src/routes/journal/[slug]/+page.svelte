<script>
    import { resolve } from '$app/paths';
    let { data } = $props()
</script>

<article>
    <div class="markdown">
        <h1>{data.meta.title}</h1>
        <h2>{data.meta.details}</h2>
    </div>

    <img src={resolve(`${data.meta.image}`)} alt='Post Header'/>

    <div class="markdown">
        <h5>Posted: {data.meta.date.toDateString().split(' ').slice(1).join(' ')}</h5>
        {@render data.content()}
    </div>
</article>

<style>
    .markdown
    {
        text-align: justify;
        max-width: 50vw;
        margin: 0 auto;
        padding: 2rem;
		background-color: rgb(0, 18, 32);
        border-radius: 10px;
    }

    article img
    {
        display: block;
        margin-left: auto;
        margin-right: auto;
        /* max-width: 65%;
        max-height: 50vh; */

        /* max-height: 65%; */
        max-width: 50%;

        border-radius: 10px;
    }

    article h1,
    .markdown :global(h1)
    {
        font-size: 5rem;
        text-align: center;
        font-weight: bolder;
    }

    .markdown :global(h2)
    {
        font-size: 1.25rem;
        text-align: center;
        font-style: italic;
    }

    .markdown :global(h3)
    {
        font-size: 1.75rem;
    }

    .markdown :global(p),
    .markdown :global(ul)
    {
        text-align: justify;
        font-size: 1.5rem;
    }

</style>