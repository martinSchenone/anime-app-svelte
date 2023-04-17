export const load = async ({fetch,params}) => {
    const fetchData = async (filter) => {
        const res = await fetch(`https://api.jikan.moe/v4/top/anime?filter=${filter}`)
        const data = await res.json();
        return data;
    }

    return{
        genres:fetchData(params.genreId)
    }
}