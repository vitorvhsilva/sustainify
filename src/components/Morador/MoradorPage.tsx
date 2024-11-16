"use client"

import { TipoEmissao } from "@/app/types";
import GraficoLinha from "../Graficos/GraficoLinha";
import CalculadoraCarbono from "./CalculadoraCarbono";
import DicasSustentaveis from "./DicasSustentaveis";
import InformacoesPessoais from "./InformacoesPessoaiseConsumoComunidade";
import RankingComunidade from "./RankingComunidade";
import { useEffect, useState } from "react";

export default function MoradorPage() {

  useEffect(() => {
    pegarEmissoesMorador()
  }, [])

  const [emissoes, setEmissoes] = useState<TipoEmissao[]>([])

  const pegarEmissoesMorador = async () => {
    const dataAtual = new Date();

    const anoAtual = dataAtual.getFullYear();
    const idMoradia = localStorage.getItem("idMoradia")

    const response = await fetch(`http://localhost:8080/formularios/${idMoradia}/${anoAtual}`)
    const emissoes = await response.json()
    setEmissoes(emissoes)
  }

  return (
    <main className="w-full h-fit p-10">
      <h1 className="md:text-6xl text-4xl">Seja bem vindo, <span className="text-cor2">Vitor!</span></h1>
      <h2 className="text-2xl">Veja sua emissão de carbono ao longo do ano:</h2>
      <GraficoLinha data={emissoes}/>
      <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50"></div>
      <div className="w-full h-fit flex mt-1 flex-col lg:flex-row lg:items-start items-center">
        <CalculadoraCarbono />
        <div className="w-[2%] h-full lg:block hidden">
          <div className="w-[2px] h-80 mx-auto rounded-xl bg-corPreta/50"></div>
        </div>
        <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 lg:hidden block my-5"></div>
        <RankingComunidade />
      </div>
      <div className="w-full h-[2px] mx-auto lg:my-1 my-5 rounded-xl bg-corPreta/50"></div>
      <div className="w-full h-fit flex mt-1 flex-col lg:flex-row lg:items-start items-center">
        <DicasSustentaveis />
        <div className="w-[2%] h-full lg:block hidden">
          <div className="w-[2px] h-[55rem] mx-auto rounded-xl bg-corPreta/50"></div>
        </div>
        <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 lg:hidden block my-5"></div>
        <InformacoesPessoais />
      </div>
    </main>
  )
}