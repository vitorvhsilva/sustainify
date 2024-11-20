import { TipoSolicitacao } from "@/app/types";
import SolicitacaoUsuario from "./SolicitacaoUsuario";
export default function SolicitacoesUsuario({solicitacoes}:{solicitacoes: TipoSolicitacao[]}) {

  return (
    <div className="lg:w-[29%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">solicitações de usuários para acessar sua comunidade</h2>
      {solicitacoes && solicitacoes.map((s, i) => ( <SolicitacaoUsuario key={i} solicitacao={s}/> )) }
      {solicitacoes.length == 0 && <h3 className="text-xl text-cor1 font-semibold">nenhuma solicitação cadastrada!</h3>}
    </div>
  )
}