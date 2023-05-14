import { z } from 'zod';
import { scheduleRequestSchema, scheduleRequestWithUserIdSchema, scheduleSchema } from '../schemas';

type TScheduleRequest = z.infer<typeof scheduleRequestSchema>
type TScheduleRequestWithUserId = z.infer<typeof scheduleRequestWithUserIdSchema>
type TSchedule = z.infer<typeof scheduleSchema> 

export {
    TSchedule,
    TScheduleRequest,
    TScheduleRequestWithUserId
}