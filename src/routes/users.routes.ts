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
    ensureUserExistsMiddleware,
    ensureUserIsAdminMiddleware,
} from "../middlewares";
import { createUserSchema, updateUserSchema } from "../schemas";

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
usersRoutes.patch(
    "/:id",
    ensureTokenIsValidMiddleware,
    ensureBodyIsValidMiddleware(updateUserSchema),
    ensureEmailIsUniqueMiddleware,
    ensureUserExistsMiddleware,
    updateUserController
);
usersRoutes.delete(
    "/:id",
    ensureUserExistsMiddleware,
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    softDeleteUserController
);

export default usersRoutes;
