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
    console.log(conta)

    function calcularConsumo(valorConta: number) {
      const consumoKWh = valorConta / 0.95;

      return consumoKWh;
    }

    const consumoKWh = calcularConsumo(conta);

    function calcularEmissaoCarbono(consumoKWh: number) {
      return consumoKWh * 0.045; 
    }

    const emissaoCarbono = calcularEmissaoCarbono(consumoKWh);
    setResultado({valor: conta, consumo: consumoKWh, emissao: emissaoCarbono})
    setMostrarResultado(true)
  }

  return (
    <div className="w-[49%] h-fit pt-2">
      <h2 className="text-2xl">insira o valor da sua conta de energia</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="conta" id="conta" className=" mt-5 border border-solid border-corPreta rounded-xl text-xl px-2 py-2" onChange={(e) => setConta(parseFloat(e.target.value))}/>
        <input type="submit" className="mt-2 block bg-cor4 text-corBranca text-2xl px-10 py-2 rounded-xl cursor-pointer"/>
      </form>
      {mostrarResultado && (
        <div className="w-full h-fit border border-solid border-corPreta rounded-xl mt-5 p-5">
          <h2>valor da conta: {resultado.valor}</h2>
          <h2>consumo de energia aproximado: {resultado.consumo} kWh</h2>
          <h2>emissão de carbono aproximada: {resultado.emissao} kg de CO₂</h2>
        </div>
      )}
    </div>
  )
}