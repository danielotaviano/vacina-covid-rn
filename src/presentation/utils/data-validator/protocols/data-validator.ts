import { DataFetched } from '../../../../infra/api/protocols/data-api-fetch'

export interface DataValidator {
  isValid(data: any): data is DataFetched
}
