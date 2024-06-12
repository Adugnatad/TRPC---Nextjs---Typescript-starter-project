import { initTRPC } from "@trpc/server";
import superjson from "superjson";
export const tRPCContext = initTRPC.context<{}>().create({});

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
// const t = initTRPC.create();

// Base router and procedure helpers
export const router = tRPCContext.router;
export const procedure = tRPCContext.procedure;
export const mergeRouters = tRPCContext.mergeRouters;
export const middleware = tRPCContext.middleware;
