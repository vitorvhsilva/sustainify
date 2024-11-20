import LinhaRanking from "./LinhaRanking"
import LinhaPremio from "./LinhaPremio"
import { TipoFormularioRanking, TipoPremioRanking } from "@/app/types";

export default function RankingComunidade({formularios, premios}:{formularios: TipoFormularioRanking[], premios: TipoPremioRanking[]}) {

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