import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureTokenIsValidMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {
    let token: string | undefined = req.headers.authorization;

    if (!token) {
        throw new AppError("Missing bearer token", 401);
    }

    token = token.split(" ")[1];
    console.log(token);

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            throw new AppError(error.message, 401);
        }

        res.locals.userId = decoded.id;
        res.locals.userPermission = decoded.admin;

        return next();
    });
};

export default ensureTokenIsValidMiddleware;
