import { Request, Response } from "express";
import {
    listRealEstatesByCategoryService,
    createRealEstateService,
    listRealEstatesService,
} from "../services";

const createRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateData = req.body
    const realEstateCreated = await createRealEstateService(realEstateData);
    return res.status(201).json(realEstateCreated);
};

const listRealEstatesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstatesListed = await listRealEstatesService();
    return res.status(200).json(realEstatesListed);
};

const listRealEstatesByCategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoryId: number = +req.params.id
    const realEstateByCatListed = await listRealEstatesByCategoryService(categoryId);
    return res.status(200).json(realEstateByCatListed);
};

export {
    createRealEstateController,
    listRealEstatesController,
    listRealEstatesByCategoryController,
};
