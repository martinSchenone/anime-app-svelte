export const load = async ({ url, fetch }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const fetchAnimes = async (page) => {
		try {
			const url = `https://api.jikan.moe/v4/top/manga?page=${page}`;
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
		props: fetchAnimes(page)
	};
};
