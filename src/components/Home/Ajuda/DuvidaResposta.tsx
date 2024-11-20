"use client"

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function DuvidaResposta({pergunta, resposta}: {pergunta: string, resposta: string}) {

  const [clicado, setClicado] = useState(false)

  const clicarDuvida = () => {
    if (clicado) {
      setClicado(false)
      return
    }

    setClicado(true)
  }

  return (
    <div className="w-full h-fit my-5 p-5 border border-solid border-corPreta rounded-xl cursor-pointer transition duration-500" onClick={clicarDuvida}>
      <div className="w-full h-fit flex items-center justify-between">
        <h3 className="text-2xl text-cor2 font-semibold">{pergunta}</h3>
        { clicado ? 
          <IoIosArrowUp className="text-5xl text-cor2"/>
          :
          <IoIosArrowDown className="text-5xl text-cor2"/>
        }
      </div>
      { clicado &&    
        <p className="text-xl">{resposta}</p>   
      }
    </div>
  )
}