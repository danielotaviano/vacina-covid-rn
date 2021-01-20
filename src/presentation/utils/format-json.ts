import { DataFetched } from '../../infra/api/protocols/data-api-fetch'
import { formatedData } from '../protocols/formated-data'
import { JsonFormat } from './format-json-protocols'

export class JsonFormatData implements JsonFormat {
  format(json: DataFetched): formatedData {
    const newJson: formatedData = {
      cities: [],
      total_population: 0,
      total_registered_population: 0,
      total_vaccinated_population: 0
    }

    json.contadores_por_municipio.forEach(city => {
      const newCity = {
        ibge_code: city.cod_ibge,
        name: city.nome,
        population: city.populacao__populacao,
        registered_population: city.total,
        vaccinated_population: city.total_vacinados

      }
      newJson.cities.push(newCity)
    })

    newJson.total_population = json.total_populacao_rn
    newJson.total_registered_population = json.total_cidadaos_cadastrados
    newJson.total_vaccinated_population = json.total_cidadaos_vacinados

    return newJson
  }
}
