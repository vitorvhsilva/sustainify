"use client"

import Image from "next/image"
import { useState } from "react"
import { FaCalculator, FaGamepad } from "react-icons/fa"
import { MdEnergySavingsLeaf } from "react-icons/md"
import { SlEnergy } from "react-icons/sl"
import InputTextLogin from "./InputTextLogin"

export default function Login() {

  const [inputClicado, setInputClicado] = useState("")

  return (
    <section className="w-full h-fit pt-10 bg-cover bg-[url('/login/fundologin.jpg')]">
      <div className="md:w-[80%] w-[95%] h-fit bg-cor1 mx-auto rounded-xl p-5">
        <div className="w-full h-fit flex justify-between items-center md:mb-10 mb-5 md:flex-row flex-col md:gap-0 gap-8">
          <div className="md:w-[50%] w-full h-full md:text-left text-center">
            <h1 className="text-5xl text-corBranca">Faça Login</h1>
          </div>
          <div className="md:w-[50%] w-full flex justify-around items-center">
            <FaCalculator className="w-10 h-10 text-corBranca"/>
            <SlEnergy className="w-10 h-10 text-corBranca"/>
            <FaGamepad className="w-10 h-10 text-corBranca"/>
            <MdEnergySavingsLeaf className="w-10 h-10 text-corBranca"/>
          </div>
        </div>
        <form action="" className="w-full h-fit">
          <InputTextLogin id="nome" nome="Nome" inputClicado={inputClicado} setInputClicado={setInputClicado}/>
          <InputTextLogin id="email" nome="Email" inputClicado={inputClicado} setInputClicado={setInputClicado}/>
        </form>
        <Image className="w-24 mx-auto block" src={"/logobranca.png"} alt="Logo da Sustainify" width={1000} height={1000}/>
      </div>
    </section>
  )
}