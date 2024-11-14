import { TipoMoradorRanking } from "@/app/types";

export default function LinhaRanking({nome, numResidencia, emissao }: TipoMoradorRanking) {
  return (
    <tr className="border border-solid border-corPreta">
      <td className="border border-solid border-corPreta">{nome}</td>
      <td className="border border-solid border-corPreta">{numResidencia}</td>
      <td className="border border-solid border-corPreta">{emissao}</td>
    </tr>
  )
}