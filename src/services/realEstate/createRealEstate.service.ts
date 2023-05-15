import { Repository } from "typeorm";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TRealEstate, TRequestRealEstate } from '../../interfaces';
import { realEstateSchema } from '../../schemas';
import { AppError } from '../../errors';

const createRealEstateService = async (realEstateData:any) => {
    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);
    const addressRepository: Repository<Address> =
        AppDataSource.getRepository(Address);
    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const {city, state, street, zipCode, number} = realEstateData.address

    if(number){
        const verifyAddresExists = await addressRepository.findOneBy({
            city: city,
            state: state,
            street: street,
            zipCode: zipCode,
            number: number
        })

        if(verifyAddresExists){
            throw new AppError("Address already exists", 409)
        }
    }

    const createAddress = addressRepository.create(realEstateData.address)
    await addressRepository.save(createAddress)

    const findCategoryPerId: Category | null = await categoryRepository.findOneBy({
        id: +realEstateData.categoryId
    })

    if(!findCategoryPerId) throw new AppError("Category not found", 404)

    const createRealEstate = await realEstateRepository.create(realEstateData)

    const realEstateReturn = await realEstateRepository.save(createRealEstate)

    return realEstateSchema.parse(realEstateReturn)
 
};

export default createRealEstateService;
