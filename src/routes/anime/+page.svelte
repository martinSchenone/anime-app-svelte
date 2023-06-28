<script>
	import SortBy from '../../components/SortBy.svelte';
	import AnimeCard from '../../components/AnimeCard.svelte';
	import SearchComponent from '../../components/SearchComponent.svelte';
	import { fly } from 'svelte/transition';
	import Pagination from '../../components/Pagination.svelte';
	export let data;
	// let dataPaginas = data.props.pagination;
	// let pageSize = 3000;
	// dataPaginas.last_visible_page por motivos de cantidad de paginas reemplaze la pageSize por un valor fijo
	$: animes = data.props.data;
	// $: totalItems = data.props.pagination.items.total;
	// $: totalPages = Math.ceil(totalItems / pageSize);
	// $: currentPage = dataPaginas.current_page || 1;
	
</script>

<section in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<div class="search_sort_container">
		<SearchComponent />
		<SortBy/>
	</div>
	<div class="animes">
		{#each animes as anime}
			<AnimeCard {anime} />
		{/each}
	</div>
</section>
<Pagination {data}/>
<!-- <div class="pagination">
	{#each Array(totalPages) as _, idx}
		<a class="currentPage" href="/anime?page={dataPaginas.has_next_page 
		? (currentPage = idx)
		: (currentPage = 1)}">
			{idx + 1 }
		</a>
	{/each}
</div> -->

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
	
	
	.search_sort_container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width:100%;
	}
	@media all and (max-width:668px){
		.search_sort_container{
			display: block;
		}
	}
	
</style>
