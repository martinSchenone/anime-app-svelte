<script>
	import { fly } from 'svelte/transition';
	import OneCard from '../../../components/OneCard.svelte';
	export let data;
</script>


<div class="cont" in:fly={{ x: 50, duration: 500, delay: 500 }}>
<OneCard {data} />
</div>


 