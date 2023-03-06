<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	const info = trpc.audioRequest.query('dog');
</script>


{#if $info.isSuccess }
	<span>{$info.data.test}</span>
{/if}

<!-- {#if $info.isError}
	Error: {$info.error.message}
{/if} -->