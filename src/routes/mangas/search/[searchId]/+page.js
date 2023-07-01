export const load = async ({ fetch, params, url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const fetchName = async (manga) => {
		try {
			const res = await fetch(`https://api.jikan.moe/v4/manga?page=${page}&q=${manga}&limit=15`);
			const data = await res.json();
			if (res.ok) {
				return data;
			}
		} catch (error) {
			console.error(error);
		}
	};
	return {
		props: fetchName(params.searchId)
	};
};
