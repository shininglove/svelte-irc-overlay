import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import {transformer} from '$src/lib/trpc/transformer';

const t = initTRPC.context<Context>().create({
    transformer,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
