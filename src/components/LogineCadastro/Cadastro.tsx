"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Cadastro() {

  const [sindicoSelecionado, setSindicoSelecionado] = useState(false)

  const clicarRadioMorador = () => {
    setSindicoSelecionado(false)
  }

  const clicarRadioSindico = () => {
    setSindicoSelecionado(true)
  }

  return (
    <section className="w-full h-fit py-10 bg-cover bg-[url('/login/fundologin.jpg')] flex items-center lg:justify-end">
      <div className="xl:w-[40%] lg:w-[60%] md:w-[80%] w-[95%] h-fit bg-cor4 rounded-xl lg:mr-10 mx-auto">
        <Image className="w-48 mx-auto block" src={'/logobranca.png'} alt="Logo da Sustainify" width={1000} height={1000}/>
        <h1 className="text-center text-corBranca text-3xl mb-2">Cadastro</h1>
        <h2 className="text-2xl text-corBranca ml-5">Já tem uma conta? <Link href={"/login"} className="text-cor5 underline">Faça Login</Link></h2>
        <form action="" className="p-5">
          <div className="w-full h-fit my-5">
            <label htmlFor="nome" className="block text-2xl text-corBranca font-semibold">Nome</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="nome" id="nome" />
          </div>

          <div className="w-full h-fit my-5">
            <label htmlFor="email" className="block text-2xl text-corBranca font-semibold">Email</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="email" id="email" />
          </div>

          <div className="w-full h-fit my-5">
            <label htmlFor="senha" className="block text-2xl text-corBranca font-semibold">Senha</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="senha" id="senha" />
          </div>

          <div className="w-full h-fit my-5">
            <label htmlFor="cpf" className="block text-2xl text-corBranca font-semibold">CPF</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="cpf" id="cpf" />
          </div>

          <div className="w-full h-fit my-5">
            <label htmlFor="telefone" className="block text-2xl text-corBranca font-semibold">Telefone</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="telefone" id="telefone" />
          </div>

          <h2 className="text-corBranca font-semibold text-2xl mb-2">Tipo de Conta</h2>
          <div className="w-full flex items-center h-fit my-5">
            <div className="w-full h-fit flex items-center md:gap-4 gap-1 ">
              <input className="w-8 h-8" type="radio" id="morador" name="tipo" value="morador" onClick={clicarRadioMorador}/>
              <label htmlFor="morador" className="text-2xl text-corBranca">Morador</label>
            </div>
            <div className="w-full h-fit flex items-center md:gap-4 gap-1 ">
              <input className="w-8 h-8" type="radio" id="sindico" name="tipo" value="sindico" onClick={clicarRadioSindico}/>
              <label htmlFor="sindico" className="text-2xl text-corBranca">Síndico</label>
            </div>
          </div> 
          { sindicoSelecionado ?
          (
            <>
              <h2 className="text-corBranca font-semibold text-2xl mb-2">Informações da Comunidade</h2> 
              <div className="w-full h-fit my-5">
                <label htmlFor="cep" className="block text-2xl text-corBranca font-semibold">CEP</label>
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="cep" id="cep" />
              </div>

              <div className="w-full h-fit my-5">
                <label htmlFor="rua" className="block text-2xl text-corBranca font-semibold">Rua</label>
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="rua" id="rua" />
              </div>

              <div className="w-full h-fit my-5">
                <label htmlFor="num" className="block text-2xl text-corBranca font-semibold">Número</label>
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="num" id="num" />
              </div>
            </>
          ) 
          :
          (
            <>
              <h2 className="text-corBranca font-semibold text-2xl mb-2">Insira o CEP da Comunidade</h2> 
              <div className="w-full h-fit my-5">
                <label htmlFor="cep" className="block text-2xl text-corBranca font-semibold">CEP</label>
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="cep" id="cep" />
              </div>
            </>
          )
          }
          <input type="submit" className="bg-cor1 hover:bg-cor2 duration-500 transition cursor-pointer px-10 py-2 text-corBranca text-2xl rounded-xl block mx-auto xl:mt-14 mt-6"/>
        </form>
      </div>
    </section>
  )
}