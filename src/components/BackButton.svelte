<script>
	export let pagina;
</script>

<button class="btn">
	<a href={pagina} pagina={pagina} sveltekit:prefetch>
		<span>GO BACK</span>
		<img src="/left 1.svg" alt="" />
	</a>
</button>

<style>
    img{
        width: 18px;
        height: 100%;
    }
	.btn {
        width: min(30%,135px);
		border-radius: 0.5rem;
		cursor: pointer;
		margin: 1rem 0rem;
		outline: none;
		border: none;
		padding: 0.5rem 1rem;
		filter: drop-shadow(1px 1px 1px #ccc);
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #243b55, #141e30); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to top,
			#243b55,
			#141e30
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	}
	.btn:hover,
	.btn:active {
		opacity: 0.5;
	}
	a {
		all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		color: #f7f7f7;

	}
	span{
		color: #f7f7f7;
		font-size: .9rem;
		font-weight: 600;
	}
</style>
