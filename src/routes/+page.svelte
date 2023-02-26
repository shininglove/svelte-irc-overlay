<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';

	let greeting = 'press the button to load data';
    let newUser: string | null = '---';
	let loading = false;

	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).greeting.query();
        newUser = await trpc($page).getUser.query();
		loading = false;
	};
</script>

<h6 class="text-red-600">Loading data in<br /><code>+page.svelte</code></h6>

<a
	href="#load"
	role="button"
	class="secondary"
	aria-busy={loading}
	on:click|preventDefault={loadData}>
		<button class="border border-red-600 bg-red-300 w-20 h-10">Load</button>
	</a
>
<p>{greeting}</p>
<p>{newUser}</p>
