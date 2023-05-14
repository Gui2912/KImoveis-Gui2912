import { NextFunction, Request, Response } from "express";
import { TUser, TUserRepo } from "../interfaces";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { userSchema } from '../schemas';

const ensureUserExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const userId: number = +req.params.id;
    const userRepo: TUserRepo = AppDataSource.getRepository(User);

    const findUser = await userRepo.findOneBy({ id: userId });

    if (!findUser) throw new AppError("User not found", 404);

    res.locals.userPerId = userSchema.parse(findUser)

    return next();
};

export default ensureUserExistsMiddleware;
