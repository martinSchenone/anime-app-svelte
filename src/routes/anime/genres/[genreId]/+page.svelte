<script>
	import { fly } from 'svelte/transition';
	import AnimeCard from '../../../../components/AnimeCard.svelte';
	import BackButton from '../../../../components/BackButton.svelte';
	export let data;
	const animes = data.genres.data;
</script>

<section class="genres" in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<BackButton pagina='/anime'/>
	<h2>{animes[0].status} Animes</h2>
	<div class="animes">
		{#each animes as anime}
			<AnimeCard {anime} />
		{/each}
	</div>
</section>

<style>
	section {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
	}
	h2{
		color:#f6f6f6;
	}
	.animes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 3rem;
	}
</style>
