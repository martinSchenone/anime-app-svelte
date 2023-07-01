<script>
	export let data;
	$: last_page = data.props.pagination.last_visible_page;
	$: actualPage = data.props.pagination.current_page; // pagina actual
	$: hasNextPage = data.props.pagination.has_next_page; // booleano que devuelve si tiene una pagina siguiente
</script>

{#if last_page !== 1}
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

<style>
	.pagination_group {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 1rem;
		gap: 1rem;
		align-items: center;
	}
	.previous_page,
	.next_page,
	.current_page {
		color: #f6f6f6;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: #fff;
		background: linear-gradient(to top, #243b55, #141e30);
		cursor: pointer;
	}
	button,
	a {
		all: unset;
	}
	a {
		padding: 0.5rem;
	}
	@media all and (max-width:530px){
		.pagination_group{
			flex-direction: column;
		}
	}
</style>
