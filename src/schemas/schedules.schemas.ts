import { z } from 'zod';

const scheduleSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
    userId: z.number()
})

const scheduleRequestSchema = scheduleSchema.omit({id: true, userId: true})
const scheduleRequestWithUserIdSchema = scheduleSchema.omit({id: true})

const schedulesListSchema = z.array(scheduleSchema)

export{
    scheduleRequestSchema,
    scheduleSchema,
    schedulesListSchema,
    scheduleRequestWithUserIdSchema
}