import { Repository } from "typeorm";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

const listSchedulesOfRealEstateService = async (realEstateId: number) => {
    const realEstateRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const realEstateResult: RealEstate | null = await realEstateRepo.findOne({
        where: {
            id: realEstateId,
        },
        relations: {
            schedules: {
                user: true,
            },
            address: true,
            category: true,
        },
    });

    if (!realEstateResult) throw new AppError("RealEstate not found", 404);

    return realEstateResult;
};

export default listSchedulesOfRealEstateService;
