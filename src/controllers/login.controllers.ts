import { Request, Response } from 'express'
import { createLoginService } from '../services'

const createLoginController = async(req:Request, res:Response):Promise<Response> => {
    const userLogged = await createLoginService()
    return res.status(201).json(userLogged)
}

export {createLoginController}