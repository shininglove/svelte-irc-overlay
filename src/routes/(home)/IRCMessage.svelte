<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	import { messageQueue, sentMessage, name } from './message';
	const message = $messageQueue[0];
	console.log($messageQueue);
	const data = trpc.audioRequest.query(message);
	$: setTimeout(() => {
			console.log(`Cleared queue boi: ${$sentMessage}`);
			messageQueue.update((item) => {
				item.shift();
				return item;
			});
	}, 2000);
</script>

{#if $sentMessage && $name}
	<div
		class="m-4 ml-auto w-1/5 rounded-xl border-8 border-purple-400 bg-gray-800 p-8 text-center text-xl text-white"
	>
		<span class="border-purple-400 p-1 text-xl font-bold text-purple-400">&#9658;</span>
		<span class="text-blue-400">{$name}</span>
		is playing <span class="font-bold">{$sentMessage}</span>
	</div>
{/if}
