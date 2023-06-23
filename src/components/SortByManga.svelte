<script>
	import { goto } from '$app/navigation';
	let genresList = ['Publishing', 'Complete', 'Hiatus', 'Upcoming', 'Discontinued'];
	let selected;
	const navegarGenero = () => {
		goto(`/mangas/genres/${selected.toLowerCase().trim()}`);
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
		margin: 1.5rem 0rem;
	}
	select {
		all: unset;
		cursor: pointer;
		border-bottom: 1px solid #aaa;
		color: #f1f1f1;
		padding: 0.5rem 1rem;
		font-size: var(--step-0);
		border-radius: 1rem;
		filter: drop-shadow(1px 1px 1px #ccc);
		background-color: #fff;
		background: linear-gradient(
			to top,
			#243b55,
			#141e30
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	option {
		background-color: #243b55;
	}
</style>
