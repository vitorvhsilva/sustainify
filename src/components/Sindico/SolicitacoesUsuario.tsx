import SolicitacaoUsuario from "./SolicitacaoUsuario";

export default function SolicitacoesUsuario() {
  return (
    <div className="lg:w-[29%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">solicitações de usuários para acessar sua comunidade</h2>
      <SolicitacaoUsuario />
      <SolicitacaoUsuario />
    </div>
  )
}