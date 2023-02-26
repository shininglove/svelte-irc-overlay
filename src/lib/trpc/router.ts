import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
// import delay from 'delay';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
  greeting: t.procedure.query(async () => {
    // await delay(500); // 👈 simulate an expensive operation
    return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
  }),
  getUser: t.procedure.query(async ({ctx}) => {
    const onlyUser = await ctx.prisma.user.findFirst();
    return onlyUser?.email;
  })
});

export type Router = typeof router;
