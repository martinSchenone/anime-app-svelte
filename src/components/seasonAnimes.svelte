<script>
	export let data;
	const seasonAnimes = data.seasonAnimes.data;
	import { register } from 'swiper/element/bundle';
	register();
	const spaceBetween = 10;
</script>

{#if !data || data == undefined || data == null}
	<div class="" />
{:else}
	<div class="title text-neutral-50 text-2xl pt-6">
		<h1>New Season Animes</h1>
	</div>
	<swiper-container
		class="text-neutral-50 w-full mt-5 h-[35dvh] "
		autoplay-delay="3000"
		autoplay-disable-on-interaction="false"
		loop={true}
		space-between={spaceBetween}
		slides-per-view={5}
		breakpoints={{
			320: {
				slidesPerView: 2
			},
			680: {
				slidesPerView: 3
			},
			1200:{
				slidesPerView:4
			},
			1440:{
				slidesPerView:5
			}
		}}
	>
		{#each seasonAnimes as anime}
			<swiper-slide class="relative ">
				<span class="flex justify-center items-center absolute h-full text-center p-1 z-0 hover:z-10 text-white w-full ">
					{anime.title}
				</span>
				<a href={'/anime/' + anime.mal_id} class="relative">
					<img 
						src={anime.images.webp.large_image_url}
						alt={anime.title}
						id={anime.mal_id}
						class="opacity-100 hover:opacity-50 h-full object-cover"
					/>
				</a>
			</swiper-slide>
		{/each}
	</swiper-container>
{/if}
