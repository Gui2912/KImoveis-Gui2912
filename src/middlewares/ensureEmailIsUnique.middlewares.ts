import { NextFunction, Request, Response } from "express";
import { TUserRepo } from '../interfaces';
import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { AppError } from '../errors';

const ensureEmailIsUniqueMiddleware = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const requestEmail = req.body.email 

    const userRepo:TUserRepo = AppDataSource.getRepository(User)

    const findUserEmail = await userRepo.findOne({
          where: {
            email: requestEmail
          }
    })

    if(findUserEmail){
        throw new AppError("Email already exists", 409)
    }

    return next()
};

export default ensureEmailIsUniqueMiddleware
