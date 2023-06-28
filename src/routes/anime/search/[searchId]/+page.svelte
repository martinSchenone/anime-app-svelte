<script>
	import { fly } from 'svelte/transition';
	import AnimeCard from '../../../../components/AnimeCard.svelte';
	import BackButton from '../../../../components/BackButton.svelte';
	import AnimeNotFound from '../../../../components/animeNotFound.svelte';
	export let data;
	$: animes = data.props.data;
	$: actualPage = data.props.pagination.current_page; // pagina actual
	$: hasNextPage = data.props.pagination.has_next_page; // booleano que devuelve si tiene una pagina siguiente
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
	{#if hasNextPage}
		<div class="pagination_group">
			<div class="previous_page">
				<button>
					<a href="?page={actualPage == 1 ? (actualPage = 1) : actualPage - 1}"> Previous Page </a>
				</button>
			</div>
			<div class="current_page">
				<span>{actualPage}</span>
			</div>
			<div class="next_page">
				<button>
					<a href="?page={hasNextPage ? actualPage + 1 : (actualPage = 1)}"> Next Page </a>
				</button>
			</div>
		</div>
	{/if}
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
	button,
	a {
		all: unset;
	}
	.pagination_group {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 1rem;
		gap: 1rem;
		align-items: center;
	}
	.previous_page,.next_page,.current_page{
		color: #f6f6f6;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: #fff;
		background: linear-gradient(
			to top,
			#243b55,
			#141e30
		);
		cursor: pointer;
	}
	a{
		padding: 0.5rem;
	}
</style>
