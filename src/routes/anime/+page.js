export const load = async ({ url, fetch }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const fetchAnimes = async (page) => {
		try {
			const url = `https://api.jikan.moe/v4/top/anime?page=${page}`;
			const res = await fetch(url);
			const data = await res.json();
			if (res.ok) {
				return data;
			}
		} catch (error) {
			console.error(error);
		}
	};
	const fetchSeasonAnimes = async () => {
		try {
			const res = await fetch('https://api.jikan.moe/v4/seasons/now');
		const data = await res.json();
		if(res.ok){
			return data;
		}
		} catch (err) {
			throw Error({
				message:'Algo no salio como lo esperado',
				error:err,
			})
		}

	};
	return {
		props: fetchAnimes(page),
		seasonAnimes:fetchSeasonAnimes(),
	};
};
