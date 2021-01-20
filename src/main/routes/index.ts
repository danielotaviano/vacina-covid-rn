import { Router } from 'express'
import { indexRouter } from './index-router'

export const router = Router()

router.use('/', indexRouter)
