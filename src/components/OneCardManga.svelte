<script>
	import BackButton from "./BackButton.svelte";

	export let data;
	let manga = data.props.data;
	let isOpen = false;
	const open = () => {
		isOpen = !isOpen;
	};
</script>

<section>
	<BackButton pagina="/mangas"/>
	{#if manga.length == 0}
		<h1>Anime wasnt found</h1>
	{:else}

		<div class="containerManga">
			<div class="img__cont">
				<div class="score">
					<span>
						<i class="fa-solid fa-star" style="color: #fbff00;" />
						{manga.score}
					</span>
				</div>
				<img class="manga__img" src={manga.images.jpg.large_image_url} alt={manga.title} />
			</div>
			<div class="details_cont">
				<div class="title">
					<h1>{manga.title}</h1>
				</div>
				<div class="author">
					<p>
						Author: {#each manga.authors as author}
							<span>{author.name} <br /></span>
						{/each}
					</p>
				</div>
				<div class="genres">
					<div class="genres_title border-b w-fit">
						<span>Genres</span>
					</div>
					{#each manga.genres as genre}
						<span class="genre__name">{genre.name}</span>
					{/each}
				</div>
			</div>
		</div>
		<div class="sinapsis mt-20">
			<details class="details">
				<summary on:click={open}>
					{isOpen ? 'Close Synopsis' : 'Open Synopsis'}
				</summary>
				<p>{manga.synopsis}</p>
			</details>
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
		border-radius: 0.3rem;
		color: #f1f1f1;
		margin-top: 1.5rem;
	}
	.containerManga {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		gap: 1rem;
	}

	.manga__img {
		width: 100%;
	}
	.title{
		align-self: center;
	}
	.score {
		color: #f1f1f1;
		font-weight: 600;
		position: absolute;
		border-radius: 0.3rem;
		padding: 0.3rem;
		margin: 0.3rem;
		background-color: #141e30;
		z-index: 1;
	}
	.genres {
		display: flex;
		align-self: flex-start;
		gap: 1rem;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.genre__name {
		background-color: #243b55;
		color: #f1f1f1;
		padding: 0.7rem;
		border-radius: 30px;
		
	}
	.sinapsis {
		padding: 1rem;
	}
	.details_cont {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 1.5rem;
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
		animation: sweep 1s ease-in-out;
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
		.genres {
			font-size: var(--step--1);
		}
	}
	@media all and (min-width: 768px) {
		.containerManga {
			align-items: start;
			flex-direction: row;
			justify-content: space-around;
		}
		.details_cont{
			width: auto;
		}
		.title{
			align-self: flex-start;
		}
		.img__cont {
			height: 100%;
			order: 1;
		}
	}
</style>
