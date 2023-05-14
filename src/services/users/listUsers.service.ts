import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { TUser, TUserRepo } from '../../interfaces'
import { arrayUserSchema } from '../../schemas';

const listUsersService = async (): Promise<TUser[]> => {
    const userRepo: TUserRepo = AppDataSource.getRepository(User);
    const users: User[] = await userRepo.find();
    return arrayUserSchema.parse(users);
  };

export default listUsersService