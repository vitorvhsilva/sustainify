"use client"

import { TipoSindico } from "@/app/types";
import GraficoLinha from "../Graficos/GraficoLinha";
import InformacoesPessoaisSindico from "./InformacoesPessoaisSindico";
import RankingComunidadeSindico from "./RankingComunidadeSindico";
import SolicitacoesUsuarios from "./SolicitacoesUsuario";
import { useEffect, useState } from "react";

export default function SindicoPage() {

  const data = [
    { mes: 'Janeiro', emissao: 30 },
    { mes: 'Fevereiro', emissao: 45 },
    { mes: 'Março', emissao: 20 },
    { mes: 'Abril', emissao: 25 },
  ];

  useEffect(() => {
    pegarSindico()
  }, [])

  const [sindico, setSindico] = useState<TipoSindico>({
    nomeSindico: "",
    cpfSindico: "",
    emailSindico: "",
    senhaSindico: "",
    telefoneSindico: ""
  })

  const pegarSindico = async () => {
    const idSindico = localStorage.getItem("idSindico")

    const sindicoResponse = await fetch(`http://localhost:8080/sindicos/${idSindico}`);
    const sindico: TipoSindico = await sindicoResponse.json();
    setSindico(sindico)
  }

  return (
    <main className="w-full h-fit p-10">
      <h1 className="md:text-6xl text-4xl">Seja bem vindo, <span className="text-cor2">{sindico.nomeSindico}!</span></h1>
      <h2 className="text-2xl">Veja a emissão de carbono da sua comunidade ao longo do ano:</h2>
      <GraficoLinha data={data}/>  
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
        <InformacoesPessoaisSindico nome={sindico.nomeSindico} cpf={sindico.cpfSindico} email={sindico.emailSindico} telefone={sindico.telefoneSindico}/>
      </div>
    </main>
  )
}