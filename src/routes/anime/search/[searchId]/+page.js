export const load = async({fetch,params}) => {
    const fetchName = async (anime)=>{
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&limit=20`);
        const data = await res.json();
        if(res.ok){
            return data;
        }else{
            console.log('el dato es invalido')
        }
    }
    return{
        props:fetchName(params.searchId)
    }
}