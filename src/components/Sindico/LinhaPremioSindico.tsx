import { TipoPremioRanking } from "@/app/types";
import { FaPencilAlt } from "react-icons/fa";

export default function LinhaPremioSindico({idSindico, posicaoPremio, premio, onClickEditar }: TipoPremioRanking & {onClickEditar: () => void}) {
  return (
    <tr className="border border-solid border-corPreta">
      <td className="border border-solid border-corPreta">{posicaoPremio}</td>
      <td className="border border-solid border-corPreta">{premio}</td>
      <td className="border border-solid border-corPreta"><FaPencilAlt onClick={onClickEditar} className="w-4 h-4 mx-auto cursor-pointer" /></td>
    </tr>
  )
}