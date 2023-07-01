export const load = async ({ fetch, params, url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const fetchData = async (filter) => {
		try {
			const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&status=${filter}`);
			const data = await res.json();
			return data;
		} catch (error) {
			console.error(error);
		}
	};

	return {
		genres: fetchData(params.genreId, page)
	};
};
