import { NextFunction, Request, Response } from "express";
import { AppError } from '../errors';

const ensureUserIsAdminMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {
    const admin:boolean = res.locals.userPermission

    if(!admin){
        throw new AppError('Insufficient permission', 403)
    }

    return next()

};

export default ensureUserIsAdminMiddleware
