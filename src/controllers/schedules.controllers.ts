import { Request, Response } from "express";
import {
    createScheduleService,
    listSchedulesOfRealEstateService,
} from "../services";
import { TScheduleRequest } from '../interfaces';

const createScheduleController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId:number = +res.locals.userId
    const scheduleData:TScheduleRequest = req.body
    const scheduleCreated = await createScheduleService(scheduleData, userId);
    return res.status(201).json(scheduleCreated);
};

const listSchedulesOfRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateId: number = +req.params.id
    const scheduleOfRealEstateListed = await listSchedulesOfRealEstateService(realEstateId);
    return res.status(200).json(scheduleOfRealEstateListed);
};

export { createScheduleController, listSchedulesOfRealEstateController };
