import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { RequestHandler } from './$types';

const handler: RequestHandler = async (event) => {
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req: event.request,
		router,
		createContext,
	});
};

export const GET = handler;
export const POST = handler;