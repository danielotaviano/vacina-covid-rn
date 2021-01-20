import { DataApiFetch } from '../../infra/api/protocols/data-api-fetch'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { DataValidator } from '../utils/data-validator/protocols/data-validator'
import { JsonFormat } from '../utils/format-json-protocols'

export class IndexController implements Controller {
  constructor(
    private readonly dataApiFetch: DataApiFetch,
    private readonly dataFormat: JsonFormat,
    private readonly dataValidator: DataValidator
  ) {
    this.dataApiFetch = dataApiFetch
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const data = await this.dataApiFetch.fetch()
    const isValidData = this.dataValidator.isValid(data)
    if (!isValidData) {
      return {
        body: 'internal server error',
        statusCode: 500
      }
    }
    const formatedData = this.dataFormat.format(data)

    return {
      body: formatedData,
      statusCode: 200
    }
  }
}
