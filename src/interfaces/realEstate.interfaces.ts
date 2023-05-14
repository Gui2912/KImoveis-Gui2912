import { z } from 'zod';
import { addressRequestSchema, listRealEstatesSchema, realEstateRequestSchema, realEstateSchema } from '../schemas';

type TRealEstate = z.infer<typeof realEstateSchema>
type TRequestRealEstate = z.infer<typeof realEstateRequestSchema>
type TListRealEstates = z.infer<typeof listRealEstatesSchema>
type TRequestAddress = z.infer<typeof addressRequestSchema>
export{
    TListRealEstates,
    TRealEstate,
    TRequestRealEstate,
    TRequestAddress
}