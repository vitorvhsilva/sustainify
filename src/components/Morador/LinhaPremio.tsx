import { TipoPremioRanking } from "@/app/types";

export default function LinhaPremio({posicao, premio }: TipoPremioRanking) {
  return (
    <tr className="border border-solid border-corPreta">
      <td className="border border-solid border-corPreta">{posicao}</td>
      <td className="border border-solid border-corPreta">{premio}</td>
    </tr>
  )
}