<script>
	import { fly } from 'svelte/transition';
	import AnimeCard from '../../../../components/AnimeCard.svelte';
	import BackButton from '../../../../components/BackButton.svelte';
	export let data;
	const animes = data.props.data;
</script>

<section in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<BackButton pagina="/anime" />
	{#if animes.length == 0}
		<div class="container_notfound">
			<h1 class="notfound">Anime wasn't found</h1>
		</div>
	{:else}
		<div class="animes">
			{#each animes as anime}
				<AnimeCard {anime} />
			{/each}
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
	.container_notfound {
		min-height: 70vh;
		display: grid;
		place-content: center;
	}
	.notfound {
		text-align: center;
		color: #f1f1f1;
	}
</style>
