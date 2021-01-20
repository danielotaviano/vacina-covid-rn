import { DataApiFetch, DataFetched } from '../protocols/data-api-fetch'
import axios from 'axios'

export class FetchData implements DataApiFetch {
  async fetch(): Promise<DataFetched> {
    const { data } = await axios.get<DataFetched>(process.env.DATA_URL)
    return data
  }
}
