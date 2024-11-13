"use client"

import Image from "next/image"
import Link from "next/link"

export default function Login() {

  return (
    <section className="w-full h-[92vh] bg-cover bg-[url('/login/fundologin.jpg')] flex items-center">
      <div className="xl:w-[40%] lg:w-[60%] md:w-[80%] w-[95%] h-fit bg-cor1 rounded-xl lg:ml-14 mx-auto">
        <Image className="w-48 mx-auto block" src={'/logobranca.png'} alt="Logo da Sustainify" width={1000} height={1000}/>
        <h1 className="text-center text-corBranca text-3xl mb-2">Login</h1>
        <h2 className="text-2xl text-corBranca ml-5">Não tem uma conta? <Link href={"/cadastro"} className="text-cor2 underline">Crie uma agora</Link></h2>
        <form action="" className="p-5">
          <div className="w-full h-fit my-5">
            <label htmlFor="email" className="block text-2xl text-corBranca font-semibold">Email</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="email" id="email" />
          </div>
          <div className="w-full h-fit my-5">
            <label htmlFor="senha" className="block text-2xl text-corBranca font-semibold">Senha</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="senha" id="senha" />
          </div>
          <h2 className="text-corBranca font-semibold text-2xl mb-2">Tipo de Conta</h2>
          <div className="w-full flex items-center h-fit my-5">
            <div className="w-full h-fit flex items-center md:gap-4 gap-1 ">
              <input className="w-8 h-8" type="radio" id="morador" name="tipo" value="morador"/>
              <label htmlFor="morador" className="text-2xl text-corBranca">Morador</label>
            </div>
            <div className="w-full h-fit flex items-center md:gap-4 gap-1 ">
              <input className="w-8 h-8" type="radio" id="sindico" name="tipo" value="sindico"/>
              <label htmlFor="sindico" className="text-2xl text-corBranca">Síndico</label>
            </div>
          </div>
          <input type="submit" className="bg-cor4 hover:bg-cor5 duration-500 transition cursor-pointer px-10 py-2 text-corBranca text-2xl rounded-xl block mx-auto xl:mt-14 mt-6"/>
        </form>
      </div>
    </section>
  )
}