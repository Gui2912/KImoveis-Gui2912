import { Router } from "express";
import {
    ensureBodyIsValidMiddleware,
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
} from "../middlewares";
import {
    createScheduleController,
    listSchedulesOfRealEstateController,
} from "../controllers";
import { scheduleRequestSchema } from "../schemas";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
    "",
    ensureTokenIsValidMiddleware,
    ensureBodyIsValidMiddleware(scheduleRequestSchema),
    createScheduleController
);
schedulesRoutes.get(
    "/realEstate/:id",
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    listSchedulesOfRealEstateController
);

export default schedulesRoutes;
