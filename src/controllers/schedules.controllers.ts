import { Request, Response } from "express";
import {
    createScheduleService,
    listSchedulesOfRealEstateService,
} from "../services";

const createScheduleController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const scheduleCreated = await createScheduleService();
    return res.status(201).json(scheduleCreated);
};

const listSchedulesOfRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const scheduleOfRealEstateListed = await listSchedulesOfRealEstateService();
    return res.status(200).json(scheduleOfRealEstateListed);
};

export { createScheduleController, listSchedulesOfRealEstateController };
