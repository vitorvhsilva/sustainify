import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function SolicitacaoUsuario() {
  return (
    <div className="w-full h-fit rounded-md border border-corPreta border-solid my-2 p-5 flex justify-between items-center">
      <div className="w-[80%] h-fit">
        <p className="text-xl">Nome: Vitor Hugo da Silva</p>
        <p className="text-xl">CPF: 52439200883</p>
        <p className="text-xl">Número Residência: 45A</p>
      </div>
      <div className="w-[20%] h-fit flex justify-center flex-col items-center">
        <FaCheck className="text-corPreta w-10 h-10 hover:text-green-500 duration-500 transition cursor-pointer"/>
        <IoMdClose className="text-corPreta w-16 h-16 hover:text-red-600 duration-500 transition cursor-pointer"/>
      </div>
    </div>
  )
}