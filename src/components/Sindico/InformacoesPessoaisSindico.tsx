import { TipoComunidade, TipoSindico } from "@/app/types";
import { useRouter } from "next/navigation";

export default function InformacoesPessoaisSindico({sindico, comunidade}: {sindico: TipoSindico, comunidade: TipoComunidade}) {

  const navigate = useRouter()

  const onClickDeslogar = () => {
    localStorage.removeItem("idSindico")

    navigate.push("/")
  }

  return (
    <div className="lg:w-[69%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">suas informações pessoais</h2>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Nome: <span className="text-cor1">{sindico.nomeSindico}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Email: <span className="text-cor1">{sindico.emailSindico}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">CPF: <span className="text-cor1">{sindico.cpfSindico}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Telefone: <span className="text-cor1">{sindico.telefoneSindico}</span></h3>
      <h2 className="text-2xl mb-5">informações da sua comunidade</h2>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Rua: <span className="text-cor1">{comunidade.ruaComunidade}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Número: <span className="text-cor1">{comunidade.numComunidade}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">CEP: <span className="text-cor1">{comunidade.cepComunidade}</span></h3>
      <button className="px-10 py-2 bg-red-600 text-xl text-white rounded-xl hover:bg-red-500 transition duration-500" onClick={onClickDeslogar}>Deslogar</button>
    </div>
  )
}