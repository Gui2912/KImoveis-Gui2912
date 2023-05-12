import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { TUser, TUserRepo } from '../../interfaces'
import { arrayUserSchema } from '../../schemas';

const listUsersService = async (): Promise<TUser[]> => {
    const userRepo: TUserRepo = AppDataSource.getRepository(User);
    const users: TUser[] = await userRepo.find();

    const transformedUsers: TUser[] = users.map(user => {
      return {
        ...user,
        createdAt: user.createdAt && new Date(user.createdAt) ,
        updatedAt: user.updatedAt && new Date(user.updatedAt) ,
      };
    });
    
    return arrayUserSchema.parse(transformedUsers);
  };

export default listUsersService