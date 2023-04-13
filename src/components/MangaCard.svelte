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
	}
	img {
		width: 100%;
		height: 60vh;
		object-fit: cover;
		border-radius: 0.7rem;
		margin-bottom: 1rem;
		transform: scale(var(--escala, 1));
		transition: transform 1s;
	}
	img:hover {
		--escala: 1.05;
		cursor: pointer;
	}
	h2 {
		font-size: 0.9rem;
	}
	.description {
		height: 10vh;
	}
	p {
		font-size: 0.8rem;
	}

	#emision {
		color: lightseagreen;
	}
	#finalizado {
		color: crimson;
	}
</style>
