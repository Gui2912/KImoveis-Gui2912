import { Request, Response } from "express";
import {
    createUserService,
    listUsersService,
    updateUserService,
    softDeleteUserService,
} from "../services";
import { TCreateUser } from '../interfaces';

const createUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData:TCreateUser = req.body
    const userCreated = await createUserService(userData);
    return res.status(201).json(userCreated);
};

const listUsersController = async(req:Request, res:Response):Promise<Response> => {
    const usersListed = await listUsersService()
    return res.status(200).json(usersListed)
}

const updateUserController = async(req:Request, res:Response):Promise<Response> => {
    const userUpdated = await updateUserService()
    return res.status(200).json(userUpdated)
}

const softDeleteUserController = async(req:Request, res:Response):Promise<Response> => {
    await softDeleteUserService()
    return res.status(204).json()
}


export {
    createUserController,
    updateUserController,
    softDeleteUserController,
    listUsersController
}