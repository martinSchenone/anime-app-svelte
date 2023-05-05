<script>
	export let pagina;
</script>

<button class="btn">
	<a href={pagina} pagina={pagina} sveltekit:prefetch>
		<img src="/left.svg" alt="" />
		<span>Back</span>
	</a>
</button>

<style>
    img{
        width: 20px;
        height: 100%;
    }
	.btn {
        width: min(30%,200px);
		border-radius: 0.5rem;
		cursor: pointer;
		margin: 1rem 0rem;
		outline: none;
		border: none;
		padding: 0.5rem 1rem;
		background-color: #2f527a;
	}
	.btn:hover,
	.btn:active {
		background-color: #3c76b9;
	}
	a {
		all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		color: white;
	}
	span{
		color: #101010;
		font-weight:bold;
	}
</style>
