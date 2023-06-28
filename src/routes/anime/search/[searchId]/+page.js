export const load = async({fetch,params,url}) => {
    const page = Number(url.searchParams.get('page')) || 1
    const fetchName = async (anime)=>{
        const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&q=${anime}&limit=20`);
        const data = await res.json();
        if(res.ok){
            return data;
        }
    }
    return{
        props:fetchName(params.searchId)
    }
}