<script>
	import { fly } from 'svelte/transition';
	import MangaCard from '../../../../components/MangaCard.svelte';
	import BackButton from '../../../../components/BackButton.svelte';
	import PaginationGenre from '../../../../components/PaginationGenre.svelte';
	export let data;
	$: mangas = data.genres.data; // cargamos los animes reactivamente porque sino no se actualizan
</script>

<section class="genres" in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<BackButton pagina="/mangas" />
	<div class="mangas">
		{#each mangas as manga}
			<MangaCard {manga} />
		{/each}
	</div>
	<PaginationGenre {data} />
</section>

<style>
	section {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
	}
	.mangas {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 3rem;
	}
</style>
