import { Router } from "express";
import {
    createUserController,
    listUsersController,
    softDeleteUserController,
    updateUserController,
} from "../controllers";
import {
    ensureBodyIsValidMiddleware,
    ensureEmailIsUniqueMiddleware,
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
} from "../middlewares";
import { createUserSchema } from "../schemas";

const usersRoutes: Router = Router();

usersRoutes.post(
    "",
    ensureEmailIsUniqueMiddleware,
    ensureBodyIsValidMiddleware(createUserSchema),
    createUserController
);
usersRoutes.get(
    "",
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    listUsersController
);
usersRoutes.patch("/:id", updateUserController);
usersRoutes.delete("/:id", softDeleteUserController);

export default usersRoutes;
