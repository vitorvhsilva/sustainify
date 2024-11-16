import { FaHouse } from "react-icons/fa6";

export default function Moradia() {
  return (
    <div className="border border-solid rounded-xl border-corPreta p-5 flex items-center justify-around hover:scale-[102%] transition duration-500 cursor-pointer">
      <FaHouse className="lg:w-60 lg:h-60 w-32 h-32 text-cor1"/>
      <div className="w-[50%] h-fit flex flex-col gap-6">
        <h2 className="md:text-3xl text-xl">Número Residência: 42</h2>
        <h2 className="md:text-3xl text-xl">Solicitação Aceita: Sim</h2>
      </div>
    </div>
  )
}