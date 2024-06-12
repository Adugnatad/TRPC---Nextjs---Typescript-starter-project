import { router } from "../../trpc";
import { greetingProcedure } from "./procedures/greetingProcedure";

export const greetingsRouter = router({
  hello: greetingProcedure,
});
