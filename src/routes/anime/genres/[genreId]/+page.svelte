<script>
	import { fly } from 'svelte/transition';
	import AnimeCard from '../../../../components/AnimeCard.svelte';
	import BackButton from '../../../../components/BackButton.svelte';
	import PaginationGenre from '../../../../components/PaginationGenre.svelte';
	export let data;
	$: animes = data.genres.data; // cargamos los animes reactivamente porque sino no se actualizan
</script>

<section class="genres" in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<BackButton pagina="/anime" />
	<div class="title mb-10 text-neutral-50 text-2xl">
	<h2>{animes[0].status} Animes</h2>
	</div>
	<div class="animes">
		{#each animes as anime}
			<AnimeCard {anime} />
		{/each}
	</div>
	<PaginationGenre {data} />
</section>

<style>
	section {
		width: 80%;
		max-width: 1200px;
		margin-inline: auto;
	}
	
	.animes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 3rem;
	}
</style>
