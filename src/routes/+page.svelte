<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';

	const api = trpc($page);
	const usernames = api.getUsers.createQuery();
	const sounds = api.getSounds.createQuery('sound');
	const loadData = async () => {
		console.log('wow');
		await $usernames.refetch();
	};
</script>

<h6 class="text-red-600">Loading data in<br /><code>+page.svelte</code></h6>

<a
	href="#load"
	role="button"
	class="secondary"
	aria-busy={$usernames.isLoading}
	on:click|preventDefault={loadData}
>
	<button class="border border-red-600 bg-red-300 w-20 h-10">Load</button>
</a>
<p>
	{#if $usernames.isLoading}
		Loading...
	{:else if $usernames.isError}
		Error: {$usernames.error.message}
	{:else}
		{#each $usernames.data as user}
			<span> {user?.username} ({user?.user_id}) </span>
		{/each}
	{/if}
</p>
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
