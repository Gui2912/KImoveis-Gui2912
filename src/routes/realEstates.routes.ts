import { Router } from "express";
import { createRealEstateController, listRealEstatesController } from "../controllers";
import {
    ensureBodyIsValidMiddleware,
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
} from "../middlewares";
import { realEstateRequestSchema } from '../schemas';

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
    "",
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    ensureBodyIsValidMiddleware(realEstateRequestSchema),
    createRealEstateController
);
realEstateRoutes.get('', listRealEstatesController)

export default realEstateRoutes;
