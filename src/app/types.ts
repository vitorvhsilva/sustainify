export type TipoFormularioRanking = {
  idMoradia: number,
  idSindico: number,
  valorContaLuzMensal: number,
  energiaGastaMensal: number,
  emissaoCarbonoMensal: number,
  numResidencia: string,
  mesEmitido: number,
  anoEmitido: number,
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

export type TipoMorador = {
  nomeMorador: string;
  cpfMorador: string;
  emailMorador: string;
  senhaMorador: string;
  telefoneMorador: string;
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

export type TipoFormulario = {
  idMoradia: number;
  valorContaLuzMensal: number;
  energiaGastaMensal: number;
  emissaoCarbonoMensal: number;
  mesEmitido: number;
  anoEmitido: number;
}

export type TipoEmissao = {
  mes: string,
  emissao: number
}

export type TipoInformacoesPaginaInicialMorador = {
  morador: TipoMorador;
  emissaoMensal: TipoEmissao[];
  emissaoAnual: TipoEmissao[];
  formulariosRanking: TipoFormularioRanking[];
  premios: TipoPremioRanking[];
}

export type TipoInformacoesPaginaInicialSindico = {
  sindico: TipoSindico;
  comunidade: TipoComunidade;
  solicitacoes: TipoSolicitacao[];
  formulariosMensal: TipoFormularioRanking[];
  emissoes: TipoEmissao[];
  premios: TipoPremioRanking[];
}