import { router } from "../../trpc";
import { farewellProcedure } from "./procedures/farewellProcedure";

export const farewellRouter = router({
  Bye: farewellProcedure,
});
