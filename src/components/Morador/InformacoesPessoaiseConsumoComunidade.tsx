import GraficoLinha from "../Graficos/GraficoLinha";

export default function InformacoesPessoaiseConsumoComunidade() {

  const data = [
    { mes: 'Janeiro', emissao: 30 },
    { mes: 'Fevereiro', emissao: 45 },
    { mes: 'Março', emissao: 20 },
    { mes: 'Abril', emissao: 25 },
  ];

  return (
    <div className="lg:w-[69%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">suas informações pessoais</h2>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Nome: <span className="text-cor1">Vitor Hugo da Silva</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Email: <span className="text-cor1">vitor@email.com</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">CPF: <span className="text-cor1">52313213213</span></h3>
      <h3 className="md:text-3xl text-xl font-semibold my-2">Telefone: <span className="text-cor1">11987321311</span></h3>
      <div className="w-full h-[2px] mx-auto rounded-xl bg-corPreta/50 my-5"></div>
      <h2 className="text-2xl mb-5">consumo da comunidade</h2>
      <GraficoLinha data={data}/>
    </div>
  )
}