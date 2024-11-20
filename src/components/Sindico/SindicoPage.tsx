"use client"

import { TipoInformacoesPaginaInicialSindico } from "@/app/types";
import GraficoLinha from "../Graficos/GraficoLinha";
import InformacoesPessoaisSindico from "./InformacoesPessoaisSindico";
import RankingComunidadeSindico from "./RankingComunidadeSindico";
import SolicitacoesUsuarios from "./SolicitacoesUsuario";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SindicoPage() {

  useEffect(() => {
    verificarLogin()
  }, [])

  const navigate = useRouter()

  const [informacoes, setInformacoes] = useState<TipoInformacoesPaginaInicialSindico>({
    sindico: {nomeSindico: "", cpfSindico: "", emailSindico: "", senhaSindico: "", telefoneSindico: ""},
    comunidade: {ruaComunidade: "", numComunidade: "", cepComunidade: ""},
    emissoes: [],
    formulariosMensal: [],
    solicitacoes: [],
    premios: []
  })

  const verificarLogin = () => {
    const idSindico = localStorage.getItem("idSindico")

    if (!idSindico) {
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

    const idSindico = localStorage.getItem("idSindico")

    const response = await fetch(`http://localhost:8080/paginainicial/sindico/${idSindico}/${mesAtual}/${anoAtual}`)
    const informacoesPaginaInicial: TipoInformacoesPaginaInicialSindico = await response.json()
    console.log(informacoesPaginaInicial)
    setInformacoes(informacoesPaginaInicial)
  }


  return (
    <main className="w-full h-fit p-10">
      <h1 className="md:text-6xl text-4xl">Seja bem vindo, <span className="text-cor2">{informacoes.sindico.nomeSindico}!</span></h1>
      <h2 className="text-2xl">Veja a emissão de carbono da sua comunidade ao longo do ano:</h2>
      <GraficoLinha data={informacoes.emissoes}/>  
      <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50"></div>
      <div className="w-full h-fit flex mt-1 flex-col lg:flex-row lg:items-start items-center">
        <RankingComunidadeSindico formularios={informacoes.formulariosMensal} premios={informacoes.premios}/>
      </div>
      <div className="w-full h-[2px] mx-auto lg:my-5 my-5 rounded-xl bg-corPreta/50"></div>
      <div className="w-full h-fit flex mt-1 flex-col lg:flex-row lg:items-start items-center">
        <SolicitacoesUsuarios solicitacoes={informacoes.solicitacoes}/>
        <div className="w-[2%] h-full lg:block hidden">
          <div className="w-[2px] h-[55rem] mx-auto rounded-xl bg-corPreta/50"></div>
        </div>
        <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 lg:hidden block my-5"></div>
        <InformacoesPessoaisSindico sindico={informacoes.sindico} comunidade={informacoes.comunidade}/>
      </div>
    </main>
  )
}