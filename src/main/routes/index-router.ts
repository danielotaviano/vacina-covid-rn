import { Router } from 'express'
import { AdaptRoute } from '../adapter/express-router-adpter'
import { makeIndexControler } from '../factories/index-controller-factory'

export const indexRouter = Router()

indexRouter.get('/', AdaptRoute(makeIndexControler()))
