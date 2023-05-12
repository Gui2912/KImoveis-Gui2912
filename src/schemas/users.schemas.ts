import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional().default(false),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    deletedAt: z.date().nullable().optional(),
});

const createUserSchema = userSchema
    .omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
    .extend({ password: z.string().max(120) });

const arrayUserSchema = z.array(userSchema)

export { userSchema, createUserSchema, arrayUserSchema };
