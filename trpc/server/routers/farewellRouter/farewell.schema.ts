import { z } from "zod";

export const farewellSchema = z.object({
  text: z.string(),
});

export type TgreetingShema = z.infer<typeof farewellSchema>;
