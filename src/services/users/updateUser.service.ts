import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { TUpdateUser, TUser, TUserRepo } from "../../interfaces";
import { userSchema } from "../../schemas";

const updateUserService = async (
    oldUserData: any,
    newUserData: any,
    userPermission: boolean,
    userTokenId: number
): Promise<TUser> => {
    if (!userPermission || oldUserData.id !== userTokenId)
        throw new AppError("Insufficient permission", 403);

    const userRepo: TUserRepo = AppDataSource.getRepository(User);

    const updateUserData:User | null | User[] = await userRepo.create({
        ...newUserData,
        ...oldUserData
    })

    const updatedUser: TUser = userSchema.parse(updateUserData);

    return updatedUser;
};

export default updateUserService;
