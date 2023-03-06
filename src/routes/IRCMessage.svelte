<script lang="ts">
	import { ircConnect } from '$src/routes/irc';
	import { messageQueue } from './message';
	import { onMount } from 'svelte';
	onMount(() => {
		ircConnect();
	});
</script>

{#if $messageQueue}
	{#each $messageQueue as message}
		<div class="m-4 border-purple-400 w-1/5 border-8 p-8 text-center text-white bg-gray-800 rounded-xl text-xl ml-auto">
			<span class="text-purple-400 font-bold text-xl border-purple-400 p-1">&#9658;</span>
			<span class="text-blue-400">{message.username}</span>
			is playing <span class="font-bold">{message.message}</span>
		</div>
	{/each}
{/if}

