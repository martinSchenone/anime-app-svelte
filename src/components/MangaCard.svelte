<script>
	export let manga;
</script>

<div
	class="manga-card flex flex-col items-center justify-between overflow-hidden text-center rounded-b text-lg"
>
	<div class="img h-4/5 w-full overflow-hidden">
		<a href={'/mangas/' + manga.mal_id}>
			<img
				src={manga.images.jpg.large_image_url}
				alt={manga.title}
				class="object-cover h-full w-full transition-all hover:scale-105 "
			/>
		</a>
	</div>
	<div
		class="description h-1/5 pt-5 flex flex-col justify-center items-center text-center w-full text-[#DDF3FF] border-b-2 border-[#DDF3FF] p-1 tracking-wide"
	>
		<a href={'/mangas/' + manga.mal_id}>
			<h2>{manga.title}</h2>
		</a>
	</div>
</div>
