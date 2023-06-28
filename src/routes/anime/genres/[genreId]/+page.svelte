<script>
	import { fly } from 'svelte/transition';
	import AnimeCard from '../../../../components/AnimeCard.svelte';
	import BackButton from '../../../../components/BackButton.svelte';
	export let data;
	$: actualPage = data.genres.pagination.current_page; // pagina actual
	$: hasNextPage = data.genres.pagination.has_next_page; // booleano que devuelve si tiene una pagina siguiente
	$: animes = data.genres.data; // cargamos los animes reactivamente porque sino no se actualizan
</script>

<section class="genres" in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<BackButton pagina="/anime" />
	<h2>{animes[0].status} Animes</h2>
	<div class="animes">
		{#each animes as anime}
			<AnimeCard {anime} />
		{/each}
	</div>
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
</section>

<style>
	section {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
	}
	h2 {
		color: #f6f6f6;
	}
	.animes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 3rem;
	}
	.pagination_group {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 1rem;
		gap: 1rem;
		align-items: center;
	}
	button,
	a {
		all: unset;
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
