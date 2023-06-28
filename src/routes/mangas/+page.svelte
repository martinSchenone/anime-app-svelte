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

	<div class="mangas">
		{#each mangas as manga}
			<MangaCard {manga} />
		{/each}
	</div>
</section>
<Pagination {data} />

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
	.pagination {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(35px, 1fr));
		gap: 2rem;
		padding: 1rem;
		place-items: center;
		font-size: var(--step-0);
		color: #101010;
	}
	a {
		justify-self: center;
		all: unset;
		cursor: pointer;
	}
	.currentPage {
		transition: all 250ms linear;
		padding: 0.15rem;
		width: 3rem;
		height: fit-content;
		text-align: center;
		border-radius: 0.5rem;
		color: rgb(210, 210, 210);
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #1e3046, #141e30); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #1e3046, #141e30);
	}
	.currentPage:is(:hover, :focus) {
		transform: scale(1.1);
		color: #ffffff;
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
