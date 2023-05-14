import { Repository } from 'typeorm'
import { TListRealEstates } from '../../interfaces'
import { RealEstate } from '../../entities'
import { AppDataSource } from '../../data-source'
import { realEstateSchema } from '../../schemas'

const listRealEstatesService = async():Promise<any> => {
    const realEstateRepo:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const listRealEstate: RealEstate[] = await realEstateRepo.find({
        relations: {
            address: true
        }
    })

    return listRealEstate
}

export default listRealEstatesService