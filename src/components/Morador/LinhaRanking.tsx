export default function LinhaRanking({numResidencia, emissao }: {numResidencia: string, emissao: number}) {
  return (
    <tr className="border border-solid border-corPreta">
      <td className="border border-solid border-corPreta">{numResidencia}</td>
      <td className="border border-solid border-corPreta">{emissao}</td>
    </tr>
  )
}