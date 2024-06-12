import handledProcedure from "@/trpc/server/procedures/handledProcedure";
import { greetingSchema } from "../greeting.schema";

export const greetingProcedure = handledProcedure
  .input(greetingSchema)
  .query(async ({ ctx, input }) => {
    return {
      greeting: `hello ${input.text}`,
    };
  });
