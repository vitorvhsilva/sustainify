import { TipoFormularioRanking, TipoPremioRanking } from "@/app/types"
import LinhaRanking from "../Morador/LinhaRanking";
import LinhaPremioSindico from "./LinhaPremioSindico";
import { useEffect, useState } from "react";

export default function RankingComunidadeSindico() {

  useEffect(() => {
    pegarPremios()
    pegarRanking()
  }, [])

  const [formularios, setFormularios] = useState<TipoFormularioRanking[]>([])

  const pegarPremios = async () => {
    const idSindico = localStorage.getItem("idSindico")

    const premiosResponse = await fetch(`http://localhost:8080/premios/${idSindico}`);
    const premios: TipoPremioRanking[] = await premiosResponse.json();
    setPremios(premios)
  }

  const pegarRanking = async () => {
    const idSindico = localStorage.getItem("idSindico")

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;

    const rankingResponse = await fetch(`http://localhost:8080/formularios/comunidade/sindico/${idSindico}/${mesAtual}/${anoAtual}`);
    const formularios: TipoFormularioRanking[] = await rankingResponse.json();
    setFormularios(formularios)
  }

  const [mostrarEditar, setMostrarEditar] = useState(false)
  const [premios, setPremios] = useState<TipoPremioRanking[]>([])

  const [premioSelecionado, setPremioSelecionado] = useState<TipoPremioRanking>({
    idSindico: 0,
    posicaoPremio: 0,
    premio: ""
  })
  const [premioOriginal, setPremioOriginal] = useState("")

  const onClickPremio = (premio: TipoPremioRanking) => {
    setMostrarEditar(true)
    setPremioOriginal(premio.premio)
    setPremioSelecionado(premio)
  }

  const handleSubmitPremio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/premios", {
        method:"PUT",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(premioSelecionado)
      });

      if(!response.ok){
        const erroTexto = await response.text();
        alert(erroTexto)
        return
      }

      alert("Premio atualizado com sucesso!")
      window.location.reload()
    } catch (error) {
      alert(error)
      console.error("Falha ao aceitar solicitação!", error);
    }
  }

  const listaPorEmissao = [...formularios].sort((a, b) => a.emissaoCarbonoMensal - b.emissaoCarbonoMensal);

  return (
    <div className="w-[90%] h-fit pt-2">
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
              {listaPorEmissao.map((d, i) => (
                <LinhaRanking key={i} emissao={d.emissaoCarbonoMensal} numResidencia={d.numResidencia}/>
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
                <LinhaPremioSindico key={i} idSindico={p.idSindico} posicaoPremio={p.posicaoPremio} premio={p.premio} onClickEditar={() => onClickPremio(p)}/>
              ))}
            </tbody>

          </table>
        </div>
      </div>
      { mostrarEditar && (
          <> 
            <h2 className="text-2xl mt-10">Editar Prêmio</h2>
            <form action="" onSubmit={handleSubmitPremio}>
              <label htmlFor="" className="block text-xl">Posição: {premioSelecionado.posicaoPremio}</label>
              <label htmlFor="" className="block text-xl">Prêmio Original: {premioOriginal}</label>
              <label htmlFor="premio" className="text-xl">Prêmio Atualizado: </label>
              <input type="text" id="premio" name="premio" className="border border-solid border-corPreta rounded-lg p-2" onChange={(e)=> setPremioSelecionado({...premioSelecionado, premio:e.target.value})}/>
              <input type="submit" className="px-10 py-2 bg-cor1 text-xl block text-corBranca mt-5 rounded-xl" />
            </form>
          </>
        )
      }
    </div>
  )
}