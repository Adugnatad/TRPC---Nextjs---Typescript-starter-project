import { z } from "zod";
import { mergeRouters } from "../trpc";
import { greetingsRouter } from "./greetingsRouter/_router";
import { farewellRouter } from "./farewellRouter/_router";

export const appRouter = mergeRouters(greetingsRouter, farewellRouter);

export type AppRouter = typeof appRouter;
