import {Request, Response} from 'express'
import {createCategoryService, listCategoriesService} from '../services'

const createCategoryController = async(req:Request, res:Response):Promise<Response> => {
    const categoryCreated = await createCategoryService()
    return res.status(201).json(categoryCreated)
}

const listCategorieController = async(req:Request, res:Response):Promise<Response> => {
    const categoriesListed = await listCategoriesService()
    return res.status(200).json(categoriesListed)
}

export {
    createCategoryController,
    listCategorieController
}