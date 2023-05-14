import { z } from "zod";

const addressSchema = z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional(),
    city: z.string().max(20),
    state: z.string().max(2),
    categoryId: z.number()
});

const realEstateSchema = z.object({
    id: z.number(),
    value: z.number(),
    address: addressSchema,
    categoryId: z.number(),
    sold: z.boolean().default(false),
    size: z.number().positive(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

const listRealEstatesSchema = z.array(realEstateSchema);

const addressRequestSchema = addressSchema.omit({ id: true });

const realEstateRequestSchema = realEstateSchema
    .omit({
        id: true,
        createdAt: true,
        updatedAt: true,
        sold: true,
    })
    .merge(z.object({ address: addressRequestSchema }));

export { realEstateRequestSchema, realEstateSchema, listRealEstatesSchema, addressRequestSchema };
