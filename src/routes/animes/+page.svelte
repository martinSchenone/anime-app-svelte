<script>
    import AnimeCard from '../../components/AnimeCard.svelte';
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
    
    .animes{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        gap: 1rem;
    }
    
</style>