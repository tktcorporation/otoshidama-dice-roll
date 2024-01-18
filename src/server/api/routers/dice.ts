import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const diceRouter = createTRPCRouter({
  dice: publicProcedure.query(() => {
    const diceResult: number[] = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];

    const total: number =
      (typeof diceResult[0] === "number" ? diceResult[0] : 0) *
      (typeof diceResult[1] === "number" ? diceResult[1] : 0) *
      (typeof diceResult[2] === "number" ? diceResult[2] : 0) *
      100;

    return {
      diceResult: diceResult,
      total: total,
    };
  }),
});
