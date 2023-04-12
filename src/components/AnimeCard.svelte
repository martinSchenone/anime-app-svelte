<script>
	export let anime;
</script>

<div class="anime-card">
	<a href={"/animes/"+anime.mal_id}>
		<img src={anime.images.webp.image_url} alt={anime.title} />
	</a>
	<div class="description">
		<h2>{anime.title}</h2>
		<p>
			Episodes:
			<span>
				{anime.episodes >= 10 ? anime.episodes : `0${anime.episodes}`}
			</span>
		</p>
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
	}
	img {
		width: 100%;
		height: 60vh;
		object-fit: cover;
		border-radius: 0.7rem;
		margin-bottom: .5rem;
		transform: scale(var(--escala, 1));
		transition: transform 250ms linear;
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
	span {
		color: white;
		background: #808080;
		border-radius: 1rem;
        padding:0.3rem;
        text-align: center;
	}
	#emision {
		color: lightseagreen;
	}
	#finalizado {
		color: crimson;
	}
</style>
