import { Repository } from "typeorm";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TRealEstate } from '../../interfaces';
import { realEstateSchema } from '../../schemas';

const createRealEstateService = async (realEstateData:any): Promise<TRealEstate> => {
    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);
    const addressRepository: Repository<Address> =
        AppDataSource.getRepository(Address);
    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

        const {
            value = 0,
            size,
            address: { street, zipCode, number = null, city, state },
            categoryId,
        } = realEstateData;

    const category = await categoryRepository.findOneOrFail({where:{
        id: categoryId
    }})

    const newAddress: Address | null = addressRepository.create({
        street,
        zipCode,
        number,
        city,
        state,
    });

    const newRealEstate = realEstateRepository.create({
        value,
        size,
        address: newAddress,
        category,
        sold: false,
    });

    const savedRealEstate = await realEstateRepository.save(newRealEstate);

    return realEstateSchema.parse(savedRealEstate);
};

export default createRealEstateService;
