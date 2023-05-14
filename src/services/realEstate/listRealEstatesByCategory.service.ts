import { Repository } from 'typeorm';
import { Category } from '../../entities';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors';

const listRealEstatesByCategoryService = async (categoryId:number) => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const categoryRepoResult: Category | null = await categoryRepo.findOne({
        where:{
            id: categoryId
        },
        relations:['realEstates']
    })

    if(!categoryRepoResult) throw new AppError("Category not found", 404)

    return categoryRepoResult
};

export default listRealEstatesByCategoryService;
