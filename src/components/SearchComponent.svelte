<script>
	import { goto } from '$app/navigation';
	import { fly, fade } from 'svelte/transition';
	let inputValue = '';
	let active = false;
	function cancelInactive() {
		if (inputValue) {
			active = true;
		} else {
			active = false;
		}
	}
	function submitSearch() {
		goto('/anime/search/' + inputValue);
	}
</script>

<form on:submit|preventDefault={submitSearch} class="search">
	{#if !active}
		<label class="searchText" in:fly={{ y: -10, duration: 500 }} out:fade for="search_anime">
			Search animes
		</label>
	{/if}
	<input
		required
		on:blur={cancelInactive}
		on:focus={() => (active = true)}
		bind:value={inputValue}
		name="search_anime"
		type="text"
		class={active ? 'selected' : ''}
	/>
	{#if inputValue}
		<button class="searchBtn" in:fly={{ y: 0, duration: 500 }} out:fade>Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: min(300px, 45%);
		margin: 1.5rem 0rem;
		filter: drop-shadow(1px 1px 1px #ccc);
	}
	button {
		padding: 0rem 1rem;
		background-color: #243b55;
		color: white;
		font-weight: 500;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0px;
		transform: translate(0, 50%);
		height: 100%;
		cursor: pointer;
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}
	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		outline: none;
		color: #f1f1f1;
		padding: 0.5rem 0.1rem;
		font-weight: bold;
		padding: 1rem;
		border-radius: 1rem;
		background-color: #fff;
		background: linear-gradient(to top, #243b55, #141e30);
	}
	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #f1f1f1;
		padding: 0rem 1rem;
	}
	input.selected {
		background-color: #446d9c;
	}
	@media all and (min-width: 1440px) {
		.searchText,
		input,
		.searchBtn {
			font-size: var(--step-1);
		}
	}
</style>
