<div class="drawer text-neutral-50 text-2xl">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="w-full navbar border-b ">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="flex-1 px-2 mx-2 tracking-tight text-3xl">
				<h1><a href="/">AnimeX</a></h1>
			</div>
			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal text-lg">
					<!-- Navbar menu content here -->
					<li><a href="/anime">ANIMES</a></li>
					<li><a href="/mangas">MANGAS</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="drawer-side z-10">
		<label for="my-drawer-3" class="drawer-overlay " />
		<ul class="menu p-4 w-80 h-full bg-base-200       text-neutral-50 menu_mobile text-lg">
			<!-- Sidebar content here -->
			<li ><a href="/anime">ANIMES</a></li>
			<li ><a href="/mangas">MANGAS</a></li>
		</ul>
	</div>
</div>

<style>
	.navbar,.menu_mobile {
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #243b55, #141e30); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to left,
			#243b55,
			#141e30
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	
</style>
