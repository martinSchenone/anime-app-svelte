<script>
	import { fly } from 'svelte/transition';
	import AnimeCard from '../../../../components/AnimeCard.svelte';
	import BackButton from '../../../../components/BackButton.svelte';
	import AnimeNotFound from '../../../../components/animeNotFound.svelte';
	import PaginationSearch from '../../../../components/PaginationSearch.svelte';
	export let data;
	$: animes = data.props.data;
</script>

<section in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<BackButton pagina="/anime" />
	{#if animes.length == 0}
		<AnimeNotFound />
	{:else}
		<div class="animes">
			{#each animes as anime}
				<AnimeCard {anime} />
			{/each}
		</div>
	{/if}
	<PaginationSearch {data} />
</section>

<style>
	section {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
	}
	.animes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 3rem;
	}
</style>
