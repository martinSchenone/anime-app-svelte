<script>
	import BackButton from "./BackButton.svelte";
	export let data;
	let anime = data.props.data;
	let relationsAnimes = data.relations.data;
	let isOpen = false;
	const open = () => {
		isOpen = !isOpen;
	};
</script>

<section>
	<BackButton pagina="/anime"/>
		{#if anime.length == 0}
		<h1>Anime wasn't found</h1>
	{:else}
		<div class="container_anime text-xl lg:text-2xl">
			<div class="img__cont">
				<div class={anime.score !== null ? 'score' : 'score hidden'}>
					<span>
						<i class="fa-solid fa-star" style="color: #fbff00;" />
						{anime.score}
					</span>
				</div>
				<img class="img__anime" src={anime.images.jpg.large_image_url} alt={anime.title} />
			</div>
			<div class="details_cont">
				<div class="title">
					<h1>{anime.title}</h1>
				</div>
				<div class="author">
					<p>
						Studio: {#each anime.studios as studio}
							<span>{studio.name} <br /></span>
						{/each}
					</p>
				</div>
				<div class="estado">
					<span>Status:</span>
					<span>{anime.status}</span>
				</div>
				<div class={anime.episodes !== null ? 'episodes' : 'episodes hidden'}>
					<i class="fa-regular fa-eye" />
					<span>Episodes: {anime.episodes}</span>
				</div>
				<div class="genres">
					<span class="title-genre">Genres</span>
					{#each anime.genres as genre}
						<span class="genre__name">
							{genre.name}
						</span>
					{/each}
				</div>
			</div>
		</div>
		<div class="sinapsis">
			<details class="details  text-xl lg:text-2xl">
				<summary on:click={open}>
					{isOpen ? 'Close Synopsis' : 'Open Synopsis'}
				</summary>
				<p>{anime.synopsis}</p>
			</details>
		</div>
		{#if anime.trailer.embed_url == null}
			<span />
		{:else}
			<div class="trailer_cont">
				<h2 style="border-bottom:1px solid #ccc">Trailer</h2>
			<div class="trailer">
				<iframe class="video" src={anime.trailer.embed_url} frameborder="0" title="trailer" />
			</div>
			</div>
		{/if}
	{/if}
	{#if relationsAnimes.length !== 0}
		<div class="relations_anime">
			{#each relationsAnimes as animes}
				<h4 class="relation_title">- {animes.relation}(s)</h4>
				{#each animes.entry as anime}
					<span class="link_relational">
						<a href={anime.url} target="_blank">{anime.name}</a>
					</span>
				{/each}
			{/each}
		</div>
	{:else}
		<h2>No relations found</h2>
	{/if}
</section>

<style>
	section {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
		font-size: var(--step-0);
		letter-spacing: 1.15px;
		border-radius: 0.3rem;
		color: #f1f1f1;
		margin-top: 1.5rem;
	}
	.container_anime {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		gap: 1rem;
	}
	.img__anime {
		width: 100%;
	}
	.details_cont {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.score {
		z-index: 1;
		color: #f1f1f1;
		font-weight: 600;
		position: absolute;
		border-radius: 0.3rem;
		padding: 0.3rem;
		margin: 0.3rem;
		background-color: #141e30;
	}
	.score.hidden {
		visibility: hidden;
		opacity: 0;
	}
	.genres {
		display: flex;
		flex-direction: column;
		align-self: flex-start;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 3rem;
	}
	.title-genre {
		border-bottom: 1px solid #ccc;
		width: fit-content;
	}
	.genre__name {
		background-color: #243b55;
		color: #f1f1f1;
		padding: 0.5rem;
		border-radius: 3px;
		width: fit-content;
	}
	.episodes {
		margin-top: 1rem;
		align-self: flex-start;
		justify-self: flex-start;
	}
	.episodes.hidden {
		visibility: hidden;
		opacity: 0;
	}
	.estado {
		margin: 2rem 0rem;
		align-self: flex-start;
		justify-self: flex-start;
	}
	.sinapsis {
		padding: 2rem;
	}
	.details > summary {
		cursor: pointer;
		list-style: none;
		padding: 0.5rem;
		border-radius: 30px;
		width: fit-content;
		background-color: #243b55;
		color: #f1f1f1;
		font-size: var(--step--1);
	}
	details[open] summary ~ * {
		animation: sweep 1s ease-in-out forwards;
	}
	details > p {
		font-size: 17px;
		font-weight: lighter;
	}
	.trailer_cont{
		padding: 2rem;
	}
	.trailer {
		margin: 5rem 0rem 1rem 0rem;
		height: 70vh;
	}
	.video {
		width: 100%;
		height: 100%;
	}
	@keyframes sweep {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			margin-left: 0px;
		}
	}
	.relations_anime {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
	.relation_title {
		border-bottom: 1px solid #99999999;
		width: fit-content;
	}
	.link_relational {
		padding: 0.5rem;
		font-size: 1rem;
	}
	a {
		text-decoration: none;
		color: #0f93ff;
	}
	a:hover {
		color: rgb(206, 233, 255);
	}
	@media all and (max-width: 586px) {
		section {
			font-size: var(--step--1);
		}
	}
	@media all and (min-width: 768px) {
		.container_anime {
			align-items: start;
			flex-direction: row;
			justify-content: space-around;
		}
		.details_cont{
			width: auto;
		}
		.img__cont {
			height: 100%;
			order: 1;
		}
	}
</style>
