import { TipoFormularioRanking, TipoPremioRanking } from "@/app/types"
import LinhaRanking from "./LinhaRanking"
import LinhaPremio from "./LinhaPremio"
import { useEffect, useState } from "react"

export default function RankingComunidade() {

  useEffect(() => {
    pegarPremios()
    pegarRanking()
  }, [])

  const [formularios, setFormularios] = useState<TipoFormularioRanking[]>([])
  const [premios, setPremios] = useState<TipoPremioRanking[]>([])

  const pegarPremios = async () => {
    const idMoradia = localStorage.getItem("idMoradia")

    const premiosResponse = await fetch(`http://localhost:8080/moradias/premios/${idMoradia}`);
    const premios: TipoPremioRanking[] = await premiosResponse.json();
    setPremios(premios)
  }

  const pegarRanking = async () => {
    const idMoradia = localStorage.getItem("idMoradia")

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;

    const rankingResponse = await fetch(`http://localhost:8080/formularios/comunidade/morador/${idMoradia}/${mesAtual}/${anoAtual}`);
    const formularios: TipoFormularioRanking[] = await rankingResponse.json();
    setFormularios(formularios)
  }

  const listaPorEmissao = [...formularios].sort((a, b) => a.emissaoCarbonoMensal - b.emissaoCarbonoMensal);

  return (
    <div className="lg:w-[49%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl">veja o ranking da comunidade</h2>
      <div className="w-full h-fit flex justify-between md:flex-row flex-col">
        <div className="md:w-[55%] w-full h-fit">
          <h3 className="mt-2">ranking</h3>
          <table className="w-full h-fit border border-solid border-corPreta">
            <thead>
              <tr className="border border-solid border-corPreta">
                <th className="border border-solid border-corPreta">Número Residência</th>
                <th className="border border-solid border-corPreta">Emissão</th>
              </tr>
            </thead>

            <tbody>
              {listaPorEmissao.map((f, i) => (
                <LinhaRanking key={i} emissao={f.emissaoCarbonoMensal} numResidencia={f.numResidencia}/>
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
              </tr>
            </thead>

            <tbody>
              {premios.map((p, i) => (
                <LinhaPremio key={i} idSindico={p.idSindico} posicaoPremio={p.posicaoPremio} premio={p.premio}/>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}