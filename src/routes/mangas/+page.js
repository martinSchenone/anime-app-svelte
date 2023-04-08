export const load = async ({fetch}) => {
    const fetchAnimes = async ()=>{
        const url = 'https://api.jikan.moe/v4/top/manga'
        const res = await fetch(url)
        const data = await res.json();    
        if(res.ok){
            return data;
        }
    }
    return{
        props:fetchAnimes()
    }
}