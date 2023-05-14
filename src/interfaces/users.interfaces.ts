import { z } from "zod";
import { createUserSchema, updateUserSchema, userSchema } from "../schemas/users.schemas";
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type TCreateUser = z.infer<typeof createUserSchema>;
type TUser = z.infer<typeof userSchema>;
type TUserRepo = Repository<User>;
type TUpdateUser = z.infer<typeof updateUserSchema>;

export { TCreateUser, TUser, TUserRepo, TUpdateUser };
