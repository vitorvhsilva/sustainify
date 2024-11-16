import { useEffect, useState } from "react";
import GraficoLinha from "../Graficos/GraficoLinha";
import { TipoMorador } from "@/app/types";

export default function InformacoesPessoaiseConsumoComunidade() {

  useEffect(() => {
    pegarMorador()
  }, [])

  const data = [
    { mes: 'Janeiro', emissao: 30 },
    { mes: 'Fevereiro', emissao: 45 },
    { mes: 'Março', emissao: 20 },
    { mes: 'Abril', emissao: 25 },
  ];

  const [morador, setMorador] = useState<TipoMorador>({
    nomeMorador: "",
    cpfMorador: "",
    emailMorador: "",
    senhaMorador: "",
    telefoneMorador: ""
  })

  const pegarMorador = async () => {
    const idMorador = localStorage.getItem("idMorador")

    const moradorResponse = await fetch(`http://localhost:8080/moradores/${idMorador}`);
    const morador: TipoMorador = await moradorResponse.json();
    setMorador(morador)
  }

  return (
    <div className="lg:w-[69%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">suas informações pessoais</h2>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Nome: <span className="text-cor1">{morador.nomeMorador}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Email: <span className="text-cor1">{morador.emailMorador}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">CPF: <span className="text-cor1">{morador.cpfMorador}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Telefone: <span className="text-cor1">{morador.telefoneMorador}</span></h3>
      <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 my-5"></div>
      <h2 className="text-2xl mb-5">consumo da comunidade</h2>
      <GraficoLinha data={data}/>
    </div>
  )
}