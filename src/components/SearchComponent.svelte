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
		<label 
		class="searchText"
		in:fly={{ y: -10, duration: 500 }} out:fade for="search_anime"> Search animes </label>
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
		<button 
		class="searchBtn"
		in:fly={{ y: 0, duration: 500 }} out:fade>Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: 70%;
		max-width: 350px;
		margin: 1.5rem 0rem;
}
	button {
		font-size: 0.7rem;
		padding: 0rem 1rem;
		background-color: #243B55;
		color: white;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: -32px;
		transform: translate(0, 49%);
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
		transition: background-color 0.75s ease-out;
		font-weight: bold;
		background: #243B55;
		padding: 1rem;
		border-radius: 1rem;
		
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
	@media all and (min-width:1440px){
		.searchText,input,.searchBtn{
			font-size: var(--step-1);
		}
	}
</style>
