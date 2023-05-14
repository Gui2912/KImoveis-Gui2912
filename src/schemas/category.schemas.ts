import { z } from 'zod';

const categorySchema = z.object({
    id: z.number(),
    name: z.string()
})

const categorySchemaRequest = categorySchema.omit({id: true})

const arrayCategorySchema = z.array(categorySchema)

export {
    categorySchema,
    arrayCategorySchema,
    categorySchemaRequest
}