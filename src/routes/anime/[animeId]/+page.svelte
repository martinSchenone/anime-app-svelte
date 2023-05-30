<script>
	import { fly } from 'svelte/transition';
	export let data;
	let anime = data.props.data;
	let isOpen = false;
	const open = () => {
		isOpen = !isOpen;
	};
</script>

<section in:fly={{ x: 50, duration: 500, delay: 500 }}>
	{#if anime.length == 0}
	<h1>Anime wasn't found</h1>
	{:else}
	<div class="containeranime">
		<div class="img__cont">
			<div class={anime.score !== null ? "score":"score hidden"} >
				<span>
					<i class="fa-solid fa-star" style="color: #fbff00;" />
					{anime.score}
				</span>
			</div>
			<img class="img__anime" src={anime.images.jpg.large_image_url} alt={anime.title} />
		</div>
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
		<div class={anime.episodes !== null ?"episodes":"episodes hidden"}>
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
		<div class="sinapsis">
			<details class="details">
				<summary on:click={open}>
					{isOpen ? 'Close Synopsis' : 'Open Synopsis'}
				</summary>
				<p>{anime.synopsis}</p>
			</details>
		</div>
		{#if anime.trailer.embed_url == null}
			<span>Trailer not found</span>
		{:else}
			<h2 style="border-bottom:1px solid #ccc">Trailer</h2>
			<div class="trailer">
				<iframe class="video"
					src={anime.trailer.embed_url}
					frameborder="0"
					title="trailer"
				/>
			</div>
		{/if}
	</div>
	{/if}
</section>

<style>
	section {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
		font-size: var(--step-0);
		letter-spacing: 1.15px;
		border: 1px solid rgba(221, 221, 221, 0.39);
		border-radius: 0.3rem;
		color: #f1f1f1;
		margin-top: 1.5rem;
	}

	.img__anime {
		width: 100%;
		filter: drop-shadow(3px 3px 2px rgb(132, 200, 255));
	}
	.containeranime {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	.score {
		z-index: 100;
		color: #f1f1f1;
		font-weight: 600;
		position: absolute;
		border-radius: 0.3rem;
		padding: 0.3rem;
		margin: 0.3rem;
		background-color: #141e30;
	}
	.score.hidden{
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
		padding: 0.5rem 1rem;
		border-radius: 5px;
		width: fit-content;
	}
	.episodes {
		margin-top: 1rem;
		align-self: flex-start;
		justify-self: flex-start;
	}
	.episodes.hidden{
		visibility: hidden;
		opacity: 0;
	}
	.estado {
		margin: 2rem 0rem;
		align-self: flex-start;
		justify-self: flex-start;
	}
	.sinapsis {
		margin-top: 3rem;
		align-self: flex-start;
		justify-self: flex-start;
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
	.trailer {
		margin: 5rem 0rem 1rem 0rem;
		width: 90%;
		height: 70vh;
	}
	.video{
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
	@media all and (max-width: 586px) {
		section {
			font-size: var(--step--1);
		}
	}
</style>
