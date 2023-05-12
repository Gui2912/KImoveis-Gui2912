import { compare } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { TLoginRequest, TUserRepo } from "../../interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createLoginService = async (payload: TLoginRequest): Promise<string> => {
    const userRepo: TUserRepo = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOne({
        where: {
            email: payload.email,
        },
    });

    if (!user) {
        throw new AppError("Invalid credentials", 401);
    }

    if(user.deletedAt){
        
    }

    const passwordMatch = await compare(payload.password, user.password);

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 401);
    }

    const token:string = jwt.sign(
        {
            admin: user.admin,
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
            subject: String(user.id),
        }
    );

    return token;
};

export default createLoginService;
