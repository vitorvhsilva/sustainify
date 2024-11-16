import { TipoSolicitacao } from "@/app/types";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function SolicitacaoUsuario({solicitacao}:{solicitacao: TipoSolicitacao}) {

  const aceitarSolicitacao = async () => {
    try {
      const response = await fetch("http://localhost:8080/solicitacoes", {
        method:"PUT",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({idSindico: solicitacao.idSindico, idMorador: solicitacao.idMorador, numMoradia: solicitacao.numResidenciaSolicitacao})
      });

      if(!response.ok){
        const erroTexto = await response.text();
        alert(erroTexto)
        return
      }

      alert("Solicitação aceita com sucesso!")
      window.location.reload()
    } catch (error) {
      alert(error)
      console.error("Falha ao aceitar solicitação!", error);
    }
  }

  const recusarSolicitacao = async () => {
    try {
      const response = await fetch(`http://localhost:8080/solicitacoes/${solicitacao.idMorador}`);

      if(!response.ok){
        const erroTexto = await response.text();
        alert(erroTexto)
        return
      }

      alert("Solicitação recusada com sucesso!")
      window.location.reload()
    } catch (error) {
      alert(error)
      console.error("Falha ao recusar solicitação!", error);
    }
  }

  return (
    <div className="w-full h-fit rounded-md border border-corPreta border-solid my-2 p-5 flex justify-between items-center">
      <div className="w-[80%] h-fit">
        <p className="text-xl">Nome: {solicitacao.nomeMorador}</p>
        <p className="text-xl">CPF: {solicitacao.cpfMorador}</p>
        <p className="text-xl">Número Residência: {solicitacao.numResidenciaSolicitacao}</p>
      </div>
      <div className="w-[20%] h-fit flex justify-center flex-col items-center">
        <FaCheck className="text-corPreta w-10 h-10 hover:text-green-500 duration-500 transition cursor-pointer" onClick={aceitarSolicitacao}/>
        <IoMdClose className="text-corPreta w-16 h-16 hover:text-red-600 duration-500 transition cursor-pointer" onClick={recusarSolicitacao}/>
      </div>
    </div>
  )
}