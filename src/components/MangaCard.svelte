<script>
	export let manga;
</script>

<div class="manga-card">
	<a href={'/mangas/' + manga.mal_id}>
		<img src={manga.images.webp.large_image_url} alt={manga.title} />
	</a>
	<div class="description">
		<h2>
			<a href={'/mangas/' + manga.mal_id}>
				{manga.title}
			</a>
		</h2>
		<p id={manga.publishing ? 'emision' : 'finalizado'}>Status: {manga.status}</p>
	</div>
</div>

<style>
	a {
		all: unset;
		cursor: pointer;
	}
	.manga-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
		margin-bottom: 0.5rem;
		color: #f1f1f1;
	}
	img {
		width: 100%;
		height: 60vh;
		object-fit: cover;
		border-radius: 0.3rem;
		margin-bottom: 1rem;
		transform: scale(var(--escala, 1));
		transition: transform 250ms linear;
		filter: drop-shadow(3px 3px 2px rgb(132, 200, 255));
	}
	img:hover {
		--escala: 1.05;
		cursor: pointer;
	}
	h2 {
		font-size: var(--step--1);
		transition: all 1s;	
		padding: 0.6rem 1rem;
		color: #f9f9f9;
	}
	.description{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	h2:hover{
		background-color: rgb(23, 71, 122);
	}
	p {
		font-size: 0.8rem;
		font-weight: bold;
	}

	#emision {
		color: lightseagreen;
	}
	#finalizado {
		color: crimson;
	}
</style>
