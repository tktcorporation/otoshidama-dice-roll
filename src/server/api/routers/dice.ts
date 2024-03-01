import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const diceRouter = createTRPCRouter({
  dice: publicProcedure.query(() => {
    const generateDiceNum = (): number => {
      return Math.floor(Math.random() * 6) + 1;
    };

    const diceResult: [number, number, number] = [
      generateDiceNum(),
      generateDiceNum(),
      generateDiceNum(),
    ];

    const total: number = diceResult.reduce((a, b) => a * b) * 100;

    return {
      diceResult: diceResult,
      total: total,
    };
  }),
});
