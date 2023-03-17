import { createTRPCSvelte } from 'trpc-svelte-query';
import { ssrLink } from 'trpc-svelte-query/ssr';
import { httpBatchLink } from '@trpc/client';
import type { Router } from '$lib/api/router';
import { transformer } from './transformer';

export const trpc = createTRPCSvelte<Router>({
	links: [
		ssrLink(httpBatchLink)({
			url: '/api/trpc',
		}),
	],
	transformer,
});