export type TipoMoradorRanking = {
  nome: string,
  numResidencia: string,
  emissao: number
}

export type TipoPremioRanking = {
  posicao: number,
  premio: string
}

export type TipoCadastro = {
  nome: string,
  cpf: string,
  email: string,
  senha: string,
  telefone: string,
  rua: string,
  numEndereco: string,
  cep: string,
  numResidencia: string;
}