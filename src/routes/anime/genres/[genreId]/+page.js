export const load = async ({fetch,params}) => {
    const fetchData = async (filter) => {
        const res = await fetch(`https://api.jikan.moe/v4/anime?status=${filter}`)
        const data = await res.json();
        return data;
    }

    return{
        genres:fetchData(params.genreId)
    }
}