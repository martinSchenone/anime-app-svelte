<script>
	import SortBy from '../../components/SortBy.svelte';
	import AnimeCard from '../../components/AnimeCard.svelte';
	import SearchComponent from '../../components/SearchComponent.svelte';
	import { fly } from 'svelte/transition';
	import Pagination from '../../components/Pagination.svelte';
	import SeasonAnimes from '../../components/seasonAnimes.svelte';
	export let data;
	$: animes = data.props.data;
</script>

<section in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<div class="seasonAnimes">
		<SeasonAnimes {data} />
	</div>
	<div class="search_sort_container mt-10">
		<SearchComponent />
		<SortBy />
	</div>
	<div class="top_animes text-neutral-50 text-4xl pb-10 font-bold">
		<h1>TOP ANIMES</h1>
	</div>
	<div class="animes">
		{#each animes as anime}
			<AnimeCard {anime} />
		{/each}
	</div>
</section>
<Pagination {data} />

<style>
	section {
		width: 80%;
		max-width: 1200px;
		margin-inline: auto;
	}
	.animes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		gap: 4rem;
	}

	.search_sort_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	@media all and (max-width: 668px) {
		.search_sort_container {
			display: block;
		}
	}
</style>
