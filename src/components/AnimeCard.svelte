<script>
	export let anime;
</script>

<div class="anime-card">
	<a href={'/anime/' + anime.mal_id}>
		<img src={anime.images.jpg.large_image_url} alt={anime.title} />
	</a>
	<div class="description">
		<a href={'/anime/' + anime.mal_id}>
			<h2>{anime.title}</h2>
		</a>
		<p id={anime.airing ? 'emision' : 'finalizado'}>Status: {anime.status}</p>
	</div>
</div>

<style>
	.anime-card {
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
		margin-bottom: 0.5rem;
		transform: scale(var(--escala, 1));
		transition: transform 250ms linear;
		filter: drop-shadow(3px 3px 2px rgb(132, 200, 255));
	}
	img:hover {
		--escala: 1.025;
		cursor: pointer;
	}
	h2 {
		font-size: 0.9rem;
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
	a{
		text-decoration: none;
		color: inherit;
	}
</style>
