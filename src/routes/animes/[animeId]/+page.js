export const load = async ({fetch,params}) => {
    const fetchAnimes = async (id)=>{
        const url = `https://api.jikan.moe/v4/anime/`+id
        const res = await fetch(url)
        const data = await res.json();    
        if(res.ok){
            return data;
        }
    }
    return{
        props:fetchAnimes(params.animeId)
    }
}