import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../trpc/server/routers/_app";

// export API handler
// @link https://trpc.io/docs/v11/server/adapters

console.log("API handler is loaded");

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
