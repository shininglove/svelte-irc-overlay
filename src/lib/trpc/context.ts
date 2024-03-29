import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import type { inferAsyncReturnType } from '@trpc/server';
import { prisma } from '$lib/db/db';

// we're not using the event parameter is this example,
// hence the eslint-disable rule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(event: FetchCreateContextFnOptions) {
  return {
    // context information
    prisma
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;