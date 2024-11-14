import { TipoPremioRanking } from "@/app/types";
import { FaPencilAlt } from "react-icons/fa";

export default function LinhaPremioSindico({posicao, premio, onClickEditar }: TipoPremioRanking & {onClickEditar: () => void}) {
  return (
    <tr className="border border-solid border-corPreta">
      <td className="border border-solid border-corPreta">{posicao}</td>
      <td className="border border-solid border-corPreta">{premio}</td>
      <td className="border border-solid border-corPreta"><FaPencilAlt onClick={onClickEditar} className="w-4 h-4 mx-auto cursor-pointer" /></td>
    </tr>
  )
}