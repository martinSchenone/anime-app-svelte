<script>
	import { fly } from 'svelte/transition';
	import OneCardManga from '../../../components/OneCardManga.svelte';
	export let data;
</script>

<div class="cont" in:fly={{ x: 50, duration: 500, delay: 500 }}>
	<OneCardManga {data} />
</div>
