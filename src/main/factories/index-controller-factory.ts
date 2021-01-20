import { Controller } from '../../presentation/protocols/controller'
import { IndexController } from '../../presentation/controllers/index-controller'
import { FetchData } from '../../infra/api/axios/fetch-data'
import { JsonFormatData } from '../../presentation/utils/format-json'
import { FetchedDataValidator } from '../../presentation/utils/data-validator/implementation/data-validator'

export const makeIndexControler = (): Controller => {
  const fetchData = new FetchData()
  const dataFormat = new JsonFormatData()
  const dataValidator = new FetchedDataValidator()

  const indexController = new IndexController(fetchData, dataFormat, dataValidator)

  return indexController
}
