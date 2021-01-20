export interface DataCity {
  cod_ibge: number,
  nome: string,
  populacao__populacao: number,
  total: number,
  total_vacinados: number
}

export interface DataFetched {
  contadores_por_municipio: DataCity[],
  total_populacao_rn: number,
  total_cidadaos_cadastrados: number,
  total_cidadaos_vacinados: number
}

export interface DataApiFetch {
  fetch(): Promise<DataFetched>
}
