import { writable, type Writable } from 'svelte/store';
import { z } from 'zod';

const messageSchema = z.array(
	z.object({
		username: z.string(),
        message: z.string()
	})
);

type Message = z.input<typeof messageSchema>;

export const messageQueue: Writable<Message> = writable([]);

console.log('hello');