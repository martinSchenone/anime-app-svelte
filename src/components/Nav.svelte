<header>
	<div class="title">
		<h1><a href="/animes" sveltekit:prefetch>AnimeX</a></h1>
	</div>
	<nav class="nav">
		<ul class="nav-ul">
			<li><a href="/animes" sveltekit:prefetch>Top Animes</a></li>
			<li><a href="/mangas" sveltekit:prefetch>Top Mangas</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #101010;
		width: 90%;
		max-width: 1200px;
		margin-inline: auto;
		margin-bottom: .5rem;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}
	.title {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: min(1rem,10vw + 1rem,2vmin);
		padding: 0rem 1rem;
	}

	.nav-ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		padding: 0rem 1rem;
		font-size: min(1rem,10vw + 1rem,2.5vmin);
	}
	.nav-ul a {
		text-decoration: none;
		color: #f1f1f1;
	}
	.nav-ul a:hover {
		color: rgb(78, 78, 78);
	}
	h1 > a {
		text-decoration: none;
		color: #f1f1f1;
	}
</style>
