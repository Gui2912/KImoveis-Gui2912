import { Request, Response } from 'express'
import { createLoginService } from '../services'
import { TLoginRequest } from '../interfaces'

const createLoginController = async(req:Request, res:Response):Promise<Response> => {
    const payload: TLoginRequest = req.body
    const token = await createLoginService(payload)
    return res.status(200).json({token})
}

export {createLoginController}