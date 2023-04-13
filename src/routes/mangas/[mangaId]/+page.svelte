<script>
	export let data;
	let manga = data.props.data;
	console.log(manga)
	let isOpen = false;
    const open = () =>{
        isOpen = !isOpen;
    }
</script>

<section>
	<div class="containerManga">
		<div class="img__cont">
			<div class="score">
				<span>{manga.score}</span>
			</div>
			<img class="manga__img" src={manga.images.jpg.large_image_url} alt={manga.title} />
		</div>
		<div class="title">
			<h1>{manga.title}</h1>
		</div>
		<div class="author">
			<p>Author: {#each manga.authors as author}
				 <span>{author.name} <br></span>
			{/each}</p>
		</div>
		<div class="genres">
			{#each manga.genres as genre}
				<span class="genre__name">{genre.name}</span>
			{/each}
		</div>
		<div class="sinapsis">
			<details class="details">
				<summary on:click={open}>
					{isOpen ? 'Close Synopsis' : 'Open Synopsis'}
				</summary>
				<p>{manga.synopsis}</p>
			</details>
		</div>
	</div>
</section>

<style>
	section {
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
		font-size: var(--step-0);
		letter-spacing: 0.1rem;
		border:2px solid rgb(211, 232, 255);
 	}
	.containerManga {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		padding: 1rem;
	}
	.manga__img{
		width: 100%;
	}
	.score {
		color: #f1f1f1;
		font-weight: 600;
		position: absolute;
		border-radius: 0.3rem;
		padding: 0.3rem;
		margin: 0.3rem;
		background-color: rgb(255, 75, 105);
	}
	.genres {
		display: flex;
		align-self: flex-start;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.genre__name {
		background-color: #202020;
        color: #f1f1f1;
		padding: 0.7rem;
		border-radius: 30px;
	}
	.sinapsis {
		align-self: flex-start;
		justify-self: flex-start;
	}
	.details > summary {
		cursor: pointer;
		list-style: none;
		padding: 0.5rem;
		border-radius: 30px;
		width: fit-content;
        background-color: #202020;
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
    @media all and (max-width:586px){
        .genres{
            font-size: var(--step--1);
        }

    }
</style>
