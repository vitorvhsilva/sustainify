"use client"

import { useState } from "react"

export default function CalculadoraCarbono () {

  const [conta, setConta] = useState(0)
  const [resultado, setResultado] = useState<{valor: number, consumo:number, emissao: number}>({
    valor: 0,
    consumo: 0,
    emissao: 0,
  })

  const [mostrarResultado, setMostrarResultado] = useState(false)

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const dataAtual = new Date();

    const mesAtual = dataAtual.getMonth() + 1;
    const anoAtual = dataAtual.getFullYear();

    function calcularConsumo(valorConta: number) {
      const consumoKWh = valorConta / 0.95;

      return consumoKWh;
    }

    function calcularEmissaoCarbono(consumoKWh: number) {
      return consumoKWh * 0.045; 
    }

    const consumoKWh = calcularConsumo(conta);
    const emissaoCarbono = calcularEmissaoCarbono(consumoKWh);

    const consumoKWhLimitado = consumoKWh.toFixed(2);
    const emissaoCarbonoLimitada = emissaoCarbono.toFixed(2);

    const consumoKWhFinal = parseFloat(consumoKWhLimitado);
    const emissaoCarbonoFinal = parseFloat(emissaoCarbonoLimitada);

    setResultado({valor: conta, consumo: consumoKWhFinal, emissao: emissaoCarbonoFinal})
    setMostrarResultado(true)

    const idMoradia = localStorage.getItem("idMoradia")
    
    if (idMoradia == null) {
      alert("Erro ao autenticar!")
      return
    }

    try {
      const responseFormulario = await fetch("http://localhost:8080/emissoes", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({idMoradia: parseInt(idMoradia), valorContaLuzMensal: conta, energiaGastaMensal: consumoKWhFinal, emissaoCarbonoMensal: emissaoCarbonoFinal, mesEmitido: mesAtual, anoEmitido: anoAtual})
      });

      if(!responseFormulario.ok){
        const erroTexto = await responseFormulario.text();
        alert(erroTexto)
        return
      }

      alert("Formulario feito com sucesso!")

      window.location.reload()

    } catch (error) {
      alert(error)
      console.error("Falha ao cadastrar formulario!", error);
    }
  }

  return (
    <div className="lg:w-[49%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl">faça sua emissão do mês</h2>
      <h3 className="text-xl">insira o valor da conta de energia</h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="conta" id="conta" className=" mt-5 border border-solid border-corPreta rounded-xl text-xl px-2 py-2" onChange={(e) => setConta(parseFloat(e.target.value))}/>
        <input type="submit" className="mt-2 block bg-cor4 text-corBranca text-2xl px-10 py-2 rounded-xl cursor-pointer"/>
      </form>
      {mostrarResultado && (
        <div className="w-full h-fit border border-solid border-corPreta rounded-xl my-5 p-5">
          <h2>valor da conta: {resultado.valor}</h2>
          <h2>consumo de energia aproximado: {resultado.consumo} kWh</h2>
          <h2>emissão de carbono aproximada: {resultado.emissao} kg de CO₂</h2>
        </div>
      )}
    </div>
  )
}