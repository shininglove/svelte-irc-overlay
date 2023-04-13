<script lang="ts">
	import { onMount } from 'svelte';
	import { ircConnect } from './home/irc';
	import IrcMessage from './home/IRCMessage.svelte';
	import { name, sentMessage } from './home/message';
	onMount(() => {
		ircConnect();
	});
</script>

{#if $name && $sentMessage}
	<p>Hello</p>
	<IrcMessage />
{/if}
