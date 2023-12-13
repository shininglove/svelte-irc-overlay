<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { ircConnect } from './home/irc';
	import IrcMessage from './home/IRCMessage.svelte';
	import { name, sentMessage } from './home/message';
	import Sounds from './home/Sounds.svelte';
	export let data: PageData;
	let { channel, host } = data;
	onMount(() => {
		ircConnect(channel);
	});
</script>

{#if $name && $sentMessage}
	<IrcMessage apiUrl={host}/>
{/if}
<Sounds/>
