import { TipoComunidade, TipoSolicitacao } from "@/app/types";
import SolicitacaoUsuario from "./SolicitacaoUsuario";
import { useEffect, useState } from "react";

export default function SolicitacoesUsuario() {

  const [solicitacoes, setSolicitacoes] = useState<TipoSolicitacao[]>([])

  useEffect(() => {
    pegarSolicitacoes()
  }, [])
  
  const pegarSolicitacoes = async () => {
    const idSindico = localStorage.getItem("idSindico")

    const comunidadeResponse = await fetch(`http://localhost:8080/comunidades/${idSindico}`);
    const comunidade: TipoComunidade = await comunidadeResponse.json();

    const solicitacoesResponse = await fetch(`http://localhost:8080/solicitacoes/${comunidade.cepComunidade}`);
    const solicitacoes: TipoSolicitacao[] = await solicitacoesResponse.json();
    setSolicitacoes(solicitacoes)
  }

  return (
    <div className="lg:w-[29%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">solicitações de usuários para acessar sua comunidade</h2>
      {solicitacoes && solicitacoes.map((s, i) => ( <SolicitacaoUsuario key={i} solicitacao={s}/> )) }
      {solicitacoes.length == 0 && <h3 className="text-xl text-cor1 font-semibold">nenhuma solicitação cadastrada!</h3>}
    </div>
  )
}