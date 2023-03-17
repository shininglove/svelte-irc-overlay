import { derived, writable, type Writable } from 'svelte/store';
import { z } from 'zod';

const messageSchema = 
	z.object({
		username: z.string(),
        message: z.string()
	});

export type UserMessage = z.input<typeof messageSchema>;

export const messageQueue: Writable<UserMessage[]> = writable([]);

export const name = derived(messageQueue, (msg) => msg.at(0)?.username)

export const sentMessage = derived(messageQueue, (msg) => msg.at(0)?.message)

console.log('hello');