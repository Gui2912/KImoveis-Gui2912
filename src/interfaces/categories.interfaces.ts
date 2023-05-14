import { z } from 'zod';
import { arrayCategorySchema, categorySchema, categorySchemaRequest } from '../schemas';
import { Repository } from 'typeorm';
import { Category } from '../entities';

type TCategory = z.infer<typeof categorySchema>
type TCategoryRequest = z.infer<typeof categorySchemaRequest>
type TCategories = z.infer<typeof arrayCategorySchema>
type TCategoryRepo = Repository<Category>

export {
    TCategories,
    TCategoryRequest,
    TCategory,
    TCategoryRepo
}