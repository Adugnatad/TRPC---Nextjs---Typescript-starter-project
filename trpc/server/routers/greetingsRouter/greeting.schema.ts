import { z } from "zod";

export const greetingSchema = z.object({
  text: z.string(),
});

export type TgreetingShema = z.infer<typeof greetingSchema>;
