<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
</script>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>AnimeX</title>
		<script src="https://kit.fontawesome.com/6bc29ab44b.js" crossorigin="anonymous"></script>
		<script src="https://kit.fontawesome.com/6bc29ab44b.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<Nav/> 
		<slot />
		<Footer />
	</body>
</html>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
	/* @link https://utopia.fyi/type/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
	:root {
		--step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);
		--step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);
		--step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
		--step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);
		--step-2: clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);
		--step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);
		--step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);
		--step-5: clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem);
	}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}
	body {
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #243b55, #141e30); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to top,
			#243b55,
			#141e30
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		min-height: 100vh;
		font-family: 'Roboto', sans-serif;
		font-size: var(--step-0);
		letter-spacing: 1.15px;
	}
</style>
