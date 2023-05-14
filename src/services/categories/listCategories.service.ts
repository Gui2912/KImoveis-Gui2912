import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { TCategories, TCategoryRepo } from '../../interfaces'
import { arrayCategorySchema } from '../../schemas'

const listCategoriesService = async():Promise<TCategories> => {
    const categoryRepo: TCategoryRepo = AppDataSource.getRepository(Category)

    const listCategories = await categoryRepo.find()

    return arrayCategorySchema.parse(listCategories)
}

export default listCategoriesService