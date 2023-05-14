import { Request, Response } from "express";
import {
    createUserService,
    listUsersService,
    updateUserService,
    softDeleteUserService,
} from "../services";
import { TCreateUser, TUpdateUser } from "../interfaces";

const createUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TCreateUser = req.body;
    const userCreated = await createUserService(userData);
    return res.status(201).json(userCreated);
};

const listUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const usersListed = await listUsersService();
    return res.status(200).json(usersListed);
};

const updateUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newUserData: TUpdateUser = req.body;
    const userPermission: boolean = res.locals.userPermission;
    const userTokenId: number = +res.locals.userId;
    const oldUserData = res.locals.userPerId
    console.log(oldUserData);
    
    

    const userUpdated = await updateUserService(
        oldUserData,
        newUserData,
        userPermission,
        userTokenId
    );
    return res.status(200).json(userUpdated);
};

const softDeleteUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = +req.params.id;
    await softDeleteUserService(userId);
    return res.status(204).json();
};

export {
    createUserController,
    updateUserController,
    softDeleteUserController,
    listUsersController,
};
