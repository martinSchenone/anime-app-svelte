<script>
	import { goto } from '$app/navigation';
	let genresList = ['Airing', 'Upcoming', 'By Popularity', 'Favorite'];
	let selected;
	const navegarGenero = () => {
		goto(`/anime/genres/${selected.toLowerCase().trim()}`);
	};
</script>

<div class="sortBy">
	<select name="genres" id="genres" bind:value={selected} on:change={navegarGenero}>
		<option value="" hidden selected>Sort by</option>
		{#each genresList as genre}
			<option value={genre}>{genre}</option>
		{/each}
	</select>
</div>

<style>
	.sortBy {
		max-width: 350px;
		width: 100%;
		margin: 1.5rem 0rem;
	}
	select,
	option {
		all: unset;
		border-bottom: 1px solid #aaa;
		background: #243b55;
		color: #f1f1f1;
		padding: 0.5rem 1rem;
		font-size: var(--step-0);
		border-radius: 1rem;
	}
</style>
