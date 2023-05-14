import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.date().nullable().optional(),
});

const createUserSchema = userSchema
    .omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
    .extend({ password: z.string().max(120) });

const arrayUserSchema = z.array(userSchema)

const updateUserSchema = createUserSchema.omit({admin: true}).partial()

export { userSchema, createUserSchema, arrayUserSchema, updateUserSchema };
