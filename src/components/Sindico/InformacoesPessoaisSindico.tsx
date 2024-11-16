export default function InformacoesPessoaisSindico({nome, email, cpf, telefone}: {nome: string, email: string, cpf: string, telefone: string,}) {
  return (
    <div className="lg:w-[69%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">suas informações pessoais</h2>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Nome: <span className="text-cor1">{nome}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Email: <span className="text-cor1">{email}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">CPF: <span className="text-cor1">{cpf}</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Telefone: <span className="text-cor1">{telefone}</span></h3>
    </div>
  )
}