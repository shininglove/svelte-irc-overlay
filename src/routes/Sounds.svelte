<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	const sounds = trpc.getSounds.query('sound');
</script>

<p>
	{#if $sounds.isLoading}
		Loading...
	{:else if $sounds.isError}
		Error: {$sounds.error.message}
	{:else if $sounds.isFetching}
		Fetching new sounds
	{:else}
		{#each $sounds.data as sound}
			<span> {sound?.sound_name}[{sound?.sound_type}] </span>
		{/each}
	{/if}
</p>

