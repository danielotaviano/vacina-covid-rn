import { Request, Response } from 'express'
import { Controller } from '../../presentation/protocols/controller'

export const AdaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: req.body
    }
    const httpResponse = await controller.execute(httpRequest)
    return res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
