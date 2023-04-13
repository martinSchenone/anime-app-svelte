<header>
	<div class="title">
		<h1><a href="/animes" sveltekit:prefetch>AnimeX</a></h1>
	</div>
	<nav class="nav">
		<ul class="nav-ul">
			<li><a href="/animes" sveltekit:prefetch>Animes</a></li>
			<li><a href="/mangas" sveltekit:prefetch>Mangas</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		border-bottom:3px solid rgb(223,238,255);
		background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(236,245,255,1) 100%);
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
		font-size: var(--step--2);
	}
	.nav-ul a {
		text-decoration: none;
		color: #101010;
	}
	.nav-ul a:hover {
		color: rgb(78, 78, 78);
	}
	h1 > a {
		text-decoration: none;
		color: #101010;
	}
	@media all and (min-width:1200px){
		.nav-ul{
			font-size: var(--step-0);
		}
	}
	@media all and (min-width:1800px){
		.nav-ul{
			font-size: var(--step-1);
		}
	}
</style>
