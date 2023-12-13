<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	const sounds = trpc.getSounds.query('sound');
</script>

<p class="fixed bottom-0">
	{#if $sounds.isLoading}
		Loading...
	{:else if $sounds.isError}
		Error: {$sounds.error.message}
	{:else if $sounds.isFetching}
		Fetching new sounds
	{:else}
		{#each $sounds.data as sound}
			<span> <strong class="text-red-500">{sound?.sound_name}</strong>[{sound?.sound_type}] </span>
		{/each}
	{/if}
</p>
