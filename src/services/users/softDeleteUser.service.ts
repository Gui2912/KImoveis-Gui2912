import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUserRepo } from "../../interfaces";

const softDeleteUserService = async (userId: number): Promise<void> => {
    const userRepo: TUserRepo = AppDataSource.getRepository(User);

    await userRepo
        .createQueryBuilder()
        .softDelete()
        .where("id = :id", { id: userId })
        .execute();
};

export default softDeleteUserService;
