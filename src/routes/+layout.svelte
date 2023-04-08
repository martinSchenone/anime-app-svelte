<script>
	import Nav from "../components/Nav.svelte";
    import Footer from "../components/Footer.svelte";

</script>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyAnimeList</title>
</head>
<body>
    <Nav />
    <slot></slot>
    <Footer/>
</body>
</html>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    *{
        padding: 0;
        margin: 0;
        
    }
    body{
        background-color:rgb(249, 249, 249);
        font-family:'Roboto', sans-serif;
    }
</style>