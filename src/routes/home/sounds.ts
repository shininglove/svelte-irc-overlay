import { derived, writable, type Writable } from 'svelte/store';
import { z } from 'zod';

const soundsSchema =
    z.object({
        username: z.string(),
        sound_name: z.string(),
        sound_type: z.string()
    });

export type SoundMessage = z.input<typeof soundsSchema>;

export const soundQueue: Writable<SoundMessage[]> = writable([]);

export const name = derived(soundQueue, (sound) => sound.at(0)?.username)

export const soundName = derived(soundQueue, (sound) => sound.at(0)?.sound_name)


