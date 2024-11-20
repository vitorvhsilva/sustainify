import { TipoEmissao, TipoMorador } from "@/app/types";
import GraficoLinha from "../Graficos/GraficoLinha";
import { useRouter } from "next/navigation";

export default function InformacoesPessoaiseConsumoComunidade({morador, emissoesAno}: {morador: TipoMorador, emissoesAno: TipoEmissao[]} ) {

  const navigate = useRouter()

  const onClickDeslogar = () => {
    localStorage.removeItem("idMorador")
    localStorage.removeItem("idMoradia")

    navigate.push("/")
  }

  return (
    <div className="lg:w-[69%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">suas informações pessoais</h2>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Nome: <span className="text-cor1">{morador.nomeMorador}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Email: <span className="text-cor1">{morador.emailMorador}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">CPF: <span className="text-cor1">{morador.cpfMorador}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Telefone: <span className="text-cor1">{morador.telefoneMorador}</span></h3>
      <button className="px-10 py-2 bg-red-600 text-xl text-white rounded-xl hover:bg-red-500 transition duration-500" onClick={onClickDeslogar}>Deslogar</button>
      <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 my-5"></div>
      <h2 className="text-2xl mb-5">consumo da comunidade</h2>
      <GraficoLinha data={emissoesAno}/>
    </div>
  )
}