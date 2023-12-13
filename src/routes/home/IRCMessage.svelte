<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	import { messageQueue, sentMessage, name } from './message';
	export let apiUrl: string;
	const apiRequest = { ...$messageQueue[0], sound_type: 'effects' };
	let data = trpc.audioRequest.mutation();

	const removeMessage = () => {
		messageQueue.update((item) => {
			item.shift();
			return item;
		});
		if ($sentMessage) {
			$data.mutate({ ...$messageQueue[0], sound_type: 'effects' });
		}
		console.log($messageQueue);
	};

	const playAudio = (audioUrl: string | undefined, volume: number = 0.5) => {
		if (!audioUrl) {
			return;
		}
		const sampleAudio = new Audio(`${apiUrl}${audioUrl}`);
		console.log(`${apiUrl}${audioUrl}`);
		sampleAudio.volume = volume;
		sampleAudio.addEventListener('ended', () => {
			removeMessage();
		});
		sampleAudio.play();
	};

	$data.mutate(apiRequest);

	$: $data.isError ? removeMessage() : playAudio($data.data?.url);

</script>

{#if $sentMessage && $name && $data.isSuccess}
	<div
		class="m-4 ml-auto w-1/5 rounded-xl border-8 border-purple-400 bg-gray-800 p-8 text-center text-xl text-white"
	>
		<span class="border-purple-400 p-1 text-xl font-bold text-purple-400">&#9658;</span>
		<span class="text-blue-400">{$name}</span>
		is playing <span class="font-bold">{$sentMessage}</span>
	</div>
{/if}
