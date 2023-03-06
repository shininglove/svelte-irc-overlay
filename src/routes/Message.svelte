<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	const message = trpc.getMessages.query();
</script>

<p class="mt-10">
	{#if $message.isFetched && $message.data}
		{#each $message.data as message}
			<span>
				<span class="text-lg text-pink-500">{message?.user_info.username}</span> : {message?.message}
				<span class="text-red-400">({message?.date_created})</span>
			</span>
		{/each}
	{/if}
</p>

