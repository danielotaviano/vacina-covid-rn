export interface formatedCityData {
  ibge_code: number,
  name: string,
  population: number,
  registered_population: number,
  vaccinated_population: number

}

export interface formatedData {

  cities: formatedCityData[],
  total_population: number,
  total_registered_population: number,
  total_vaccinated_population: number

}
