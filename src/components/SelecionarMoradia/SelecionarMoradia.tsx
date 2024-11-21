"use client"

import { TipoSolicitacao } from "@/app/types";
import Moradia from "./Moradia";
import { useEffect, useState } from "react";

export default function SelecionarMoradiaPage() {

  useEffect(() => {
    pegarMoradias()
  }, [])

  const [solicitacoes, setSolicitacoes] = useState<TipoSolicitacao[]>([])

  const pegarMoradias = async () => {

    const idMorador = localStorage.getItem("idMorador")

    const responseSolicitacoes = await fetch(`http://localhost:8080/solicitacoes/moradores/${idMorador}`);
    const solicitacoes: TipoSolicitacao[] = await responseSolicitacoes.json();
    setSolicitacoes(solicitacoes)
  }

  return (
    <section className="w-full h-fit mt-10 p-5">
      <h1 className="text-5xl mb-5">Selecione sua Moradia</h1>
      <div className="w-full h-fit grid lg:grid-cols-2 grid-cols-1 gap-8">
        {solicitacoes && solicitacoes.map((s, i) => (
          <Moradia key={i} numResidencia={s.numResidenciaSolicitacao} aceita={s.solicitacaoAceita}/>
        ))}
      </div>
    </section>
  )
}