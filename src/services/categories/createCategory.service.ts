import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { AppError } from '../../errors'
import {  TCategory, TCategoryRepo, TCategoryRequest } from '../../interfaces'
import { categorySchema } from '../../schemas'

const createCategoryService = async(categoryData:TCategoryRequest):Promise<TCategory> => {
    const categoryRepo:TCategoryRepo = AppDataSource.getRepository(Category)

    const findCategory:Category | null = await categoryRepo.findOne({
        where:{
            name: categoryData.name
        }
    })

    if(findCategory) throw new AppError("Category already exists", 409)

    const category:Category = categoryRepo.create(categoryData)

    await categoryRepo.save(category)

    console.log(category);
    
    return categorySchema.parse(category)
}   

export default createCategoryService