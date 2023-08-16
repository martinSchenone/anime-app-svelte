<script>
	export let data;
	$: actualPage = data.props.pagination.current_page; // pagina actual
	$: hasNextPage = data.props.pagination.has_next_page; // booleano que devuelve si tiene una pagina siguiente
</script>

<div class="pagination_group mt-32 w-full text-neutral-50 text-sm md:text-lg border-b">
	<div class="flex justify-center items-center w-full gap-3">
		<div class="btn_click btn_pages previous_page">
			<button>
				<a href="?page={actualPage == 1 ? (actualPage = 1) : actualPage - 1}"> Previous </a>
			</button>
		</div>
		<div class="btn_click current_page">
			<span>Page {actualPage}</span>
		</div>
		<div class="btn_click btn_pages next_page">
			<button>
				<a href="?page={hasNextPage ? actualPage + 1 : (actualPage = 1)}"> Next </a>
			</button>
		</div>
	</div>
</div>

<style>
	.btn_click {
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #243b55, #141e30); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to top,
			#243b55,
			#141e30
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		padding: 0.75rem;
		cursor: pointer;
		width: 8rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn_pages:hover{
		opacity: 0.5;
	}
	.btn_pages:active{
		scale: 90%;
	}
	
</style>

