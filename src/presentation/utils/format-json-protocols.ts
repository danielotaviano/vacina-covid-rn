import { DataFetched } from '../../infra/api/protocols/data-api-fetch'
import { formatedData } from '../protocols/formated-data'

export interface JsonFormat {
  format(json: DataFetched): formatedData
}
