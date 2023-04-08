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
		background-color: #ededed;
	}
	.title {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 1rem;
		padding: 0rem 1rem;
		font-size: 0.9rem;
	}
	.nav {
		padding: 1rem;
	}
	.nav-ul {
		display: flex;
		gap: 2rem;
		list-style: none;
	}
	.nav-ul a {
		text-decoration: none;
		color: #303030;
	}
	.nav-ul a:hover {
		color: rgb(78, 78, 78);
	}
	h1 > a {
		text-decoration: none;
		color: #303030;
	}
</style>
