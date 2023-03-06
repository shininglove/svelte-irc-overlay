import { publicProcedure, createTRPCRouter } from '$lib/trpc/util';
import { z } from 'zod';
import { createZodFetcher } from 'zod-fetch';
const fetchWithZod = createZodFetcher();

export const router = createTRPCRouter({
	getUsers: publicProcedure.query(async ({ ctx }) => {
		const allUsers = await ctx.prisma.user_info.findMany();
		return allUsers;
	}),
	getSounds: publicProcedure.input(z.enum(['theme', 'sound'])).query(async ({ input, ctx }) => {
		const sounds = await ctx.prisma.sound_effects.findMany({ where: { sound_type: input } });
		return sounds;
	}),
	getMessages: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
		const messages = await ctx.prisma.user_messages.findMany({
			include: { user_info: true },
			where: { user_info: { username: { notIn: ['shineslove', 'OneHeIIofAButler'] } } },
			orderBy: { id: 'asc' },
			take: input
		});
		return messages;
	}),
	audioRequest: publicProcedure.input(z.string()).query(async ({ input }) => {
		const data = await fetchWithZod(
			z.object({ test: z.number() }),
			`http://localhost:8000/test/${input}`
		);
		console.log(data);
		return data;
	})
});

export type Router = typeof router;
