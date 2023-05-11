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
    const realEstateCreated = await createRealEstateService();
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
    const realEstateByCatListed = await listRealEstatesByCategoryService();
    return res.status(200).json(realEstateByCatListed);
};

export {
    createRealEstateController,
    listRealEstatesController,
    listRealEstatesByCategoryController,
};
