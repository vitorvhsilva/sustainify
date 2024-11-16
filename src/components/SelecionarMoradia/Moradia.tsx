import { useRouter } from "next/navigation";
import { FaHouse } from "react-icons/fa6";

export default function Moradia({numResidencia, aceita}: {numResidencia: string, aceita: number}) {

  const navigate = useRouter()

  const resultado = aceita == 1 ? "Sim" : "Não"

  const onClickMoradia = async () => {
    const responseMoradia = await fetch(`http://localhost:8080/moradias/${numResidencia}`);
    const idMoradia = await responseMoradia.json();

    localStorage.setItem("idMoradia", idMoradia)

    navigate.push("/morador")
  }

  return (
    <div className={`border border-solid rounded-xl border-corPreta p-5 flex items-center justify-around ${aceita == 1 && "cursor-pointer hover:scale-[102%] transition duration-500"}`} onClick={onClickMoradia}>
      <FaHouse className="lg:w-60 lg:h-60 w-32 h-32 text-cor1"/>
      <div className="w-[50%] h-fit flex flex-col gap-6">
        <h2 className="md:text-3xl text-xl">Número Residência: <span className="font-semibold text-cor1">{numResidencia}</span></h2>
        <h2 className="md:text-3xl text-xl">Solicitação Aceita: <span className="font-semibold text-cor1">{resultado}</span></h2>
      </div>
    </div>
  )
}