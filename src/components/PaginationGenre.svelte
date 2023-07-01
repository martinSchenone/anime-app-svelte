<script>
    export let data
    $: actualPage = data.genres.pagination.current_page; // pagina actual
	$: hasNextPage = data.genres.pagination.has_next_page; // booleano que devuelve si tiene una pagina siguiente
</script>
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

<style>
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
	@media all and (max-width:530px){
		.pagination_group{
			flex-direction: column;
		}
	}
</style>