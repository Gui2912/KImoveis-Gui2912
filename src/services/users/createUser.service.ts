import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { TCreateUser, TUser, TUserRepo } from '../../interfaces'
import { userSchema } from '../../schemas'

const createUserService = async(userData:TCreateUser):Promise<TUser> => {
    const userRepository: TUserRepo = AppDataSource.getRepository<User>(User)

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser:TUser = userSchema.parse(user)

    return newUser
}

export default createUserService