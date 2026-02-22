<script lang="ts">
    let { title, image = undefined } = $props();
    let hovering = $state(false)
</script>

<div class="card-container zoom">
    {#if image !== undefined}
        <img src={image} alt='Journal Preview'/>
    {/if}
    <h3>{title}</h3>
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

    .card-container {
        display: flex;
        flex-direction: column;

        position: relative;
        overflow: hidden;
        font-size: 1.4rem;
		background-color: rgb(71, 136, 240);

        min-height: 15vw;
        min-width: 20vw;
        height: 20vw;


        margin: 0;
        padding: 0;

        border-radius: 10px;

        align-items: stretch;
        align-content: center;
        justify-content: center;
    }

    .card-container img
    {
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>