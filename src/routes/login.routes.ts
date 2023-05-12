import { Router } from 'express';
import { createLoginController } from '../controllers';

const loginRoutes:Router = Router()

loginRoutes.post('', createLoginController)

export default loginRoutes