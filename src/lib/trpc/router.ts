import { publicProcedure, createTRPCRouter } from '$lib/trpc/util';
import { z } from 'zod';

export const router = createTRPCRouter({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    const allUsers = await ctx.prisma.user_info.findMany();
    return allUsers;
  }),
  getSounds: publicProcedure
    .input(z.enum(["theme", "sound"]))
    .query(async ({ input, ctx }) => {
      const sounds = await ctx.prisma.sound_effects.findMany({ where: { sound_type: input } })
      return sounds;
    })
});

export type Router = typeof router;
