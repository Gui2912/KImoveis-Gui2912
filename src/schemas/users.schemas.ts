import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean(),
    createdAt: z.date().nullish(),
    updatedAt: z.date().nullish(),
    deletedAt: z.date().nullish(),
});

const createUserSchema = userSchema
    .omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
    .extend({ password: z.string().max(120) });

export { userSchema, createUserSchema };
