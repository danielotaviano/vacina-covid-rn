import { DataFetched } from '../../../../infra/api/protocols/data-api-fetch'
import { DataValidator } from '../protocols/data-validator'

export class FetchedDataValidator implements DataValidator {
  isValid(data: any): data is DataFetched {
    if (data as DataFetched) return true
    return false
  }
}
