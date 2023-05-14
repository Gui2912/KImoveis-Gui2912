import { Router } from "express";
import {
    createCategoryController,
    listCategorieController,
    listRealEstatesByCategoryController,
} from "../controllers";
import {
    ensureBodyIsValidMiddleware,
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
} from "../middlewares";
import { categorySchemaRequest } from "../schemas";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
    "",
    ensureBodyIsValidMiddleware(categorySchemaRequest),
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    createCategoryController
);
categoriesRoutes.get("", listCategorieController);
categoriesRoutes.get("/:id/realEstate", listRealEstatesByCategoryController)

export default categoriesRoutes;
