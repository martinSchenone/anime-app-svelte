<script>
	import MangaCard from '../../components/MangaCard.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import SearchManga from '../../components/searchManga.svelte';
	import SortByManga from '../../components/SortByManga.svelte';
	import { fly } from 'svelte/transition';
	export let data;
	$: mangas = data.props.data;
</script>

<section in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<div class="search_sort_container">
		<SearchManga />
		<SortByManga />
	</div>
	<div class="top_animes text-neutral-50 text-4xl pb-10 font-bold">
		<h1>TOP MANGAS</h1>
	</div>
	<div class="mangas">
		{#each mangas as manga}
			<MangaCard {manga} />
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
	.mangas {
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
