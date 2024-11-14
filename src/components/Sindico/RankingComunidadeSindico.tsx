import { TipoMoradorRanking, TipoPremioRanking } from "@/app/types"
import LinhaRanking from "../Morador/LinhaRanking";
import LinhaPremioSindico from "./LinhaPremioSindico";
import { useState } from "react";

export default function RankingComunidadeSindico() {

  const data: TipoMoradorRanking[] = [
    {nome: "Vitor Hugo da Silva", numResidencia: "49A", emissao: 20},
    {nome: "Joao Murilla Gananca", numResidencia: "32D", emissao: 10},
    {nome: "Lucas Bracco Yamamoto", numResidencia: "23T", emissao: 30},
  ]

  const premios: TipoPremioRanking[] = [
    {posicao: 1, premio: "PS4"},
    {posicao: 2, premio: "PS5"},
    {posicao: 3, premio: "PS6"}
  ]

  const [mostrarEditar, setMostrarEditar] = useState(false)
  const [premioSelecionado, setPremioSelecionado] = useState<TipoPremioRanking>({
    posicao: 0,
    premio: ""
  })

  const onClickPremio = (premio: TipoPremioRanking) => {
    setMostrarEditar(true)
    setPremioSelecionado(premio)
  }

  const listaPorEmissao = [...data].sort((a, b) => a.emissao - b.emissao);

  return (
    <div className="w-[90%] h-fit pt-2">
      <h2 className="text-2xl">veja o ranking da comunidade</h2>
      <div className="w-full h-fit flex justify-between md:flex-row flex-col">
        <div className="md:w-[55%] w-full h-fit">
          <h3 className="mt-2">ranking</h3>
          <table className="w-full h-fit border border-solid border-corPreta">
            <thead>
              <tr className="border border-solid border-corPreta">
                <th className="border border-solid border-corPreta">Nome</th>
                <th className="border border-solid border-corPreta">Número Residência</th>
                <th className="border border-solid border-corPreta">Emissão</th>
              </tr>
            </thead>

            <tbody>
              {listaPorEmissao.map((d, i) => (
                <LinhaRanking key={i} nome={d.nome} emissao={d.emissao} numResidencia={d.numResidencia}/>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:w-[40%] w-full h-fit">
          <h3 className="mt-2">prêmios</h3>
          <table className="w-full h-fit border border-solid border-corPreta">
            <thead>
              <tr className="border border-solid border-corPreta">
                <th className="border border-solid border-corPreta">Top</th>
                <th className="border border-solid border-corPreta">Prêmio</th>
                <th className="border border-solid border-corPreta">Editar</th>
              </tr>
            </thead>

            <tbody>
              {premios.map((p, i) => (
                <LinhaPremioSindico key={i} posicao={p.posicao} premio={p.premio} onClickEditar={() => onClickPremio(p)}/>
              ))}
            </tbody>

          </table>
        </div>
      </div>
      { mostrarEditar && (
          <> 
            <h2 className="text-2xl mt-10">Editar Prêmio</h2>
            <form action="">
              <label htmlFor="" className="block text-xl">Posição: {premioSelecionado.posicao}</label>
              <label htmlFor="" className="block text-xl">Prêmio Original: {premioSelecionado.premio}</label>
              <label htmlFor="premio" className="text-xl">Prêmio Atualizado: </label>
              <input type="text" id="premio" name="premio" className="border border-solid border-corPreta rounded-lg p-2"/>
              <input type="submit" className="px-10 py-2 bg-cor1 text-xl block text-corBranca mt-5 rounded-xl" />
            </form>
          </>
        )
      }
    </div>
  )
}