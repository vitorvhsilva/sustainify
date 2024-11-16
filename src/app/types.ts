export type TipoMoradorRanking = {
  nome: string,
  numResidencia: string,
  emissao: number
}

export type TipoPremioRanking = {
  idSindico: number,
  posicaoPremio: number,
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

export type TipoLogin = {
  email: string,
  senha: string,
}

export type TipoSindico = {
  nomeSindico: string;
  cpfSindico: string;
  emailSindico: string;
  senhaSindico: string;
  telefoneSindico: string;
}

export type TipoComunidade = {
  ruaComunidade: string,
  numComunidade: string,
  cepComunidade: string,
}

export type TipoSolicitacao = {
  idMorador: number
  idSindico: number
  nomeMorador: string
  cpfMorador: string
  cepSolicitacao: string
  numResidenciaSolicitacao: string
  solicitacaoAceita: number
}