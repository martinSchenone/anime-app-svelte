<header>
	<div class="title">
		<h1><a href="/anime" sveltekit:prefetch>AnimeX</a></h1>
	</div>
	<nav class="nav">
		<ul class="nav-ul">
			<li><a href="/anime" sveltekit:prefetch>Animes</a></li>
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
	filter: drop-shadow(1px 1px 1px #ccc);
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #243b55, #141e30); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to top,
			#243b55,
			#141e30
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

		max-width: 1200px;
		margin-inline: auto;
		margin-bottom: 0.5rem;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}
	.title {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: min(1rem, 10vw + 1rem, 2vmin);
		padding: 0rem 1rem;
	}

	.nav-ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		padding: 0rem 1rem;
		justify-content: center;
		align-items: center;
		font-size: var(--step--2);
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

	/*Media queries*/
	@media all and (min-width: 1200px) {
		.nav-ul {
			font-size: var(--step-0);
		}
	}
	@media all and (min-width: 1800px) {
		.nav-ul {
			font-size: var(--step-1);
		}
	}
</style>
