export const load = async ({ fetch, params }) => {
	const fetchAnimes = async (id) => {
		try {
			const url = `https://api.jikan.moe/v4/anime/` + id;
			const res = await fetch(url);
			const data = await res.json();
			if (res.ok) {
				return data;
			}
		} catch (error) {
			console.error(error);
		}
	};
	const fetchRelationalsAnimes = async (id) => {
		try {
			const url = `https://api.jikan.moe/v4/anime/${id}/relations`;
			const res = await fetch(url);
			const data = await res.json();
			if (res.ok) {
				return data;
			}
		} catch (error) {
			console.error(error);
		}
	};
	return {
		props: fetchAnimes(params.animeId),
		relations: fetchRelationalsAnimes(params.animeId)
	};
};
