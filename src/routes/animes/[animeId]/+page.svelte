<script>
    export let data;
    const anime = data.props.data;
    console.log(anime)
</script>

<article>
    <h1>
        {anime.title}
    </h1>
    <img src={anime.images.webp.large_image_url} alt={anime.title}>
    <div class="description">
        <div class="left">
            <p class="text">{anime.synopsis}</p>
            <p class="text2">Number of Epidodes: {anime.episodes}</p>
            <p class="text3">Genres: {anime.genres.map(g=> `${g.name}`)}</p>
        </div>
        <div class="right">
            <p class="text4">{anime.rating}</p>
            <p class="text5">{anime.status}</p>
            <p class="text6">Aired from: {anime.aired.prop.from.day}/{anime.aired.prop.from.month}/{anime.aired.prop.from.year} <br>
            To: {anime.aired.prop.to.day}/{anime.aired.prop.to.month}/{anime.aired.prop.to.year} </p>
        </div>
    </div>
</article>

<style>
    article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        height: 70vh;
    }
    p{
        font-size: .9rem;
    }
    .description{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap:1rem;
    }

    .left{
        display: flex;
        justify-content: space-around;
    }
    .text{
        flex-basis: 65%;
    }
    .text2,.text3{
        flex-basis: 10%;
    }
    
    .text,.text2,.text3{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.5rem;
        background-color: #ffc8c85b;
        border-radius: 1rem;
        text-align: center;
    }
   
</style>