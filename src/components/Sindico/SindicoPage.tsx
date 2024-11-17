"use client"

import { TipoComunidade, TipoEmissao, TipoSindico } from "@/app/types";
import GraficoLinha from "../Graficos/GraficoLinha";
import InformacoesPessoaisSindico from "./InformacoesPessoaisSindico";
import RankingComunidadeSindico from "./RankingComunidadeSindico";
import SolicitacoesUsuarios from "./SolicitacoesUsuario";
import { useEffect, useState } from "react";

export default function SindicoPage() {

  useEffect(() => {
    pegarSindico()

    setTimeout(() => {
      pegarEmissoesComunidade()
    }, 5000)
  }, [])

  const [emissoes, setEmissoes] = useState<TipoEmissao[]>([])
  const [sindico, setSindico] = useState<TipoSindico>({
    nomeSindico: "",
    cpfSindico: "",
    emailSindico: "",
    senhaSindico: "",
    telefoneSindico: ""
  })

  const [comunidade, setComunidade] = useState<TipoComunidade>({
    ruaComunidade: "",
    numComunidade: "",
    cepComunidade: ""
  })

  const pegarSindico = async () => {
    const idSindico = localStorage.getItem("idSindico")

    const sindicoResponse = await fetch(`http://localhost:8080/sindicos/${idSindico}`);
    const sindico: TipoSindico = await sindicoResponse.json();
    setSindico(sindico)

    const comunidadeResponse = await fetch(`http://localhost:8080/comunidades/${idSindico}`);
    const comunidade: TipoComunidade = await comunidadeResponse.json();
    setComunidade(comunidade)
  }

  const pegarEmissoesComunidade = async () => {
    const dataAtual = new Date();

    const anoAtual = dataAtual.getFullYear();
    const idSindico = localStorage.getItem("idSindico")

    const response = await fetch(`http://localhost:8080/formularios/comunidade/sindico/${idSindico}/${anoAtual}`)
    const emissoes = await response.json()
    setEmissoes(emissoes)
  }


  return (
    <main className="w-full h-fit p-10">
      <h1 className="md:text-6xl text-4xl">Seja bem vindo, <span className="text-cor2">{sindico.nomeSindico}!</span></h1>
      <h2 className="text-2xl">Veja a emissão de carbono da sua comunidade ao longo do ano:</h2>
      <GraficoLinha data={emissoes}/>  
      <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50"></div>
      <div className="w-full h-fit flex mt-1 flex-col lg:flex-row lg:items-start items-center">
        <RankingComunidadeSindico />
      </div>
      <div className="w-full h-[2px] mx-auto lg:my-5 my-5 rounded-xl bg-corPreta/50"></div>
      <div className="w-full h-fit flex mt-1 flex-col lg:flex-row lg:items-start items-center">
        <SolicitacoesUsuarios />
        <div className="w-[2%] h-full lg:block hidden">
          <div className="w-[2px] h-[55rem] mx-auto rounded-xl bg-corPreta/50"></div>
        </div>
        <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 lg:hidden block my-5"></div>
        <InformacoesPessoaisSindico sindico={sindico} comunidade={comunidade}/>
      </div>
    </main>
  )
}