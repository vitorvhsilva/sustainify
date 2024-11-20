"use client"

import { TipoInformacoesPaginaInicialMorador } from "@/app/types";
import GraficoLinha from "../Graficos/GraficoLinha";
import CalculadoraCarbono from "./CalculadoraCarbono";
import DicasSustentaveis from "./DicasSustentaveis";
import InformacoesPessoais from "./InformacoesPessoaiseConsumoComunidade";
import RankingComunidade from "./RankingComunidade";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MoradorPage() {

  const navigate = useRouter()

  useEffect(() => {
    verificarLogin()
  }, [])

  const [informacoes, setInformacoes] = useState<TipoInformacoesPaginaInicialMorador>({
    morador: {nomeMorador: "", cpfMorador: "", emailMorador: "", senhaMorador: "", telefoneMorador: ""},
    emissaoMensal: [],
    emissaoAnual: [],
    formulariosRanking: [],
    premios: []
  })

  const verificarLogin = () => {
    const idMorador = localStorage.getItem("idMorador")

    if (!idMorador) {
      alert("Problemas de Autenticação!")
      navigate.push("/login")
      return
    }

    pegarInformacoes()
  }

  const pegarInformacoes = async () => {
    const dataAtual = new Date();

    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;

    const idMorador = localStorage.getItem("idMorador")
    const idMoradia = localStorage.getItem("idMoradia")

    const response = await fetch(`http://localhost:8080/paginainicial/morador/${idMorador}/${idMoradia}/${mesAtual}/${anoAtual}`)
    const informacoesPaginaInicial: TipoInformacoesPaginaInicialMorador = await response.json()
    setInformacoes(informacoesPaginaInicial)
  }

  return (
    <main className="w-full h-fit p-10">
      <h1 className="md:text-6xl text-4xl">Seja bem vindo, <span className="text-cor2">Vitor!</span></h1>
      <h2 className="text-2xl">Veja sua emissão de carbono ao longo do ano:</h2>
      <GraficoLinha data={informacoes.emissaoAnual}/>
      <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50"></div>
      <div className="w-full h-fit flex mt-1 flex-col lg:flex-row lg:items-start items-center">
        <CalculadoraCarbono />
        <div className="w-[2%] h-full lg:block hidden">
          <div className="w-[2px] h-80 mx-auto rounded-xl bg-corPreta/50"></div>
        </div>
        <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 lg:hidden block my-5"></div>
        <RankingComunidade formularios={informacoes.formulariosRanking} premios={informacoes.premios}/>
      </div>
      <div className="w-full h-[2px] mx-auto lg:my-1 my-5 rounded-xl bg-corPreta/50"></div>
      <div className="w-full h-fit flex mt-1 flex-col lg:flex-row lg:items-start items-center">
        <DicasSustentaveis />
        <div className="w-[2%] h-full lg:block hidden">
          <div className="w-[2px] h-[55rem] mx-auto rounded-xl bg-corPreta/50"></div>
        </div>
        <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 lg:hidden block my-5"></div>
        <InformacoesPessoais morador={informacoes.morador} emissoesAno={informacoes.emissaoAnual}/>
      </div>
    </main>
  )
}