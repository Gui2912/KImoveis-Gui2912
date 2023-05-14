import { Repository } from "typeorm";
import {
    TScheduleRequest,
    TScheduleRequestWithUserId,
    TUserRepo,
} from "../../interfaces";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

const createScheduleService = async (
    scheduleData: TScheduleRequest,
    userId: number
) => {
    const scheduleRepo: Repository<Schedule> =
        AppDataSource.getRepository(Schedule);
    const userRepo: TUserRepo = AppDataSource.getRepository(User);
    const realEstateRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const userFind: User | null = await userRepo.findOneBy({ id: +userId });
    if (!userFind) throw new AppError("User not found", 404);

    const realEstateFind: RealEstate | null = await realEstateRepo.findOneBy({
        id: +scheduleData.realEstateId,
    });
    if(!realEstateFind) throw new AppError("Real estate not found", 404)

    const scheduleWithUserId: TScheduleRequestWithUserId = {
        ...scheduleData,
        userId,
    };

    const createSchedule: Schedule | null =
        scheduleRepo.create(scheduleWithUserId);

    await scheduleRepo.save(createSchedule);

    return createSchedule;
};

export default createScheduleService;
