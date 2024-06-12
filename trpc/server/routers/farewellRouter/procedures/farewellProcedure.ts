import handledProcedure from "@/trpc/server/procedures/handledProcedure";
import { farewellSchema } from "../farewell.schema";

export const farewellProcedure = handledProcedure
  .input(farewellSchema)
  .query(async ({ ctx, input }) => {
    return {
      greeting: `Bye ${input.text}`,
    };
  });
