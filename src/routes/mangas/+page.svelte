<script>
	import MangaCard from '../../components/MangaCard.svelte';
    export let data;
    const mangas = data.props.data;
</script>


<section>
    <div class="mangas">
        {#each mangas as manga}
            <MangaCard {manga} />
        {/each}
    </div>
</section>

<style>
.mangas{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        gap: 1rem;
    }</style>