<script>
    export let data;
	let dataPaginas = data.props.pagination;
	let pageSize = 3000;
	// dataPaginas.last_visible_page por motivos de cantidad de paginas reemplaze la pageSize por un valor fijo
	$: totalItems = data.props.pagination.items.total;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = dataPaginas.current_page || 1;
</script>

<div class="pagination">
	{#each Array(totalPages) as _, idx}
		<a class="currentPage" href="/anime?page={dataPaginas.has_next_page 
		? (currentPage = idx)
		: (currentPage = 1)}">
			{idx + 1 }
		</a>
	{/each}
</div>

<style>
    .pagination {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
		padding: 1rem;
		gap: 2rem;
		place-items: center;
		font-size: var(--step-0);
		color: #101010;
	}
	a {
		justify-self: center;
		all: unset;
		cursor: pointer;
	}
	.currentPage {
		transition: all 250ms linear;
		padding: 0.15rem;
		width: 3rem;
		height: fit-content;
		text-align: center;
		border-radius: 0.5rem;
		color: rgb(210, 210, 210);
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #1e3046, #141e30); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #1e3046, #141e30);
	}
	.currentPage:is(:hover, :focus) {
		transform: scale(1.1);
		color: #ffffff;
	}
</style>