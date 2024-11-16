import { TipoPremioRanking } from "@/app/types";

export default function LinhaPremio({posicaoPremio, premio }: TipoPremioRanking) {
  return (
    <tr className="border border-solid border-corPreta">
      <td className="border border-solid border-corPreta">{posicaoPremio}</td>
      <td className="border border-solid border-corPreta">{premio}</td>
    </tr>
  )
}