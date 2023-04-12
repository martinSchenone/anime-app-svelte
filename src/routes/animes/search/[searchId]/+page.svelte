<script>
    import AnimeCard from '../../../../components/AnimeCard.svelte';
    export let data;
    const animes = data.props.data;
</script>

<section>
    <div class="animes">
        {#each animes as anime}
            <AnimeCard {anime}/>
        {/each}
    </div>
</section>

<style>
    section{
        width: 90%;
        max-width: 1200px;
        margin-inline: auto;
        border: 1px solid #cececeab;

    }
    .animes{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
        gap: 3rem;
    }
    
</style>