export const load = async({fetch,params}) => {
    const fetchName = async (manga)=>{
        const res = await fetch(`https://api.jikan.moe/v4/manga?q=${manga}&limit=20`);
        const data = await res.json();
        if(res.ok){
            return data;
        }
    }
    return{
        props:fetchName(params.searchId)
    }
}