"use client"

import { TipoLogin } from "@/app/types"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Login() {

  const navigate = useRouter()

  useEffect(() => {
    setSindicoSelecionado(false)
  }, [])

  const [sindicoSelecionado, setSindicoSelecionado] = useState(false)
  const [login, setLogin] = useState<TipoLogin>({
    email: "",
    senha: "",
  })

  const clicarRadioMorador = () => {
    setSindicoSelecionado(false)
  }

  const clicarRadioSindico = () => {
    setSindicoSelecionado(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (sindicoSelecionado) {
      loginSindico(login)
    } else {
      loginMorador(login)
    }
  }

  const loginMorador = async (login: TipoLogin) => {

  }

  const loginSindico = async (login: TipoLogin) => {
    try {
      const response = await fetch("http://localhost:8080/sindicos/login", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(login)
      });

      if(!response.ok){
        const erroTexto = await response.text();
        alert(erroTexto)
        return
      }

      const idSindico = await response.json();
      localStorage.setItem("idSindico", idSindico)

      alert("Login feito com sucesso!")
      navigate.push("/sindico")

    } catch (error) {
      alert(error)
      console.error("Falha ao fazer login!", error);
    }
  }

  return (
    <section className="w-full h-[92vh] bg-cover bg-[url('/login/fundologin.jpg')] flex items-center">
      <div className="xl:w-[40%] lg:w-[60%] md:w-[80%] w-[95%] h-fit bg-cor1 rounded-xl lg:ml-14 mx-auto">
        <Image className="w-48 mx-auto block" src={'/logobranca.png'} alt="Logo da Sustainify" width={1000} height={1000}/>
        <h1 className="text-center text-corBranca text-3xl mb-2">Login</h1>
        <h2 className="text-2xl text-corBranca ml-5">Não tem uma conta? <Link href={"/cadastro"} className="text-cor2 underline">Crie uma agora</Link></h2>
        <form action="" className="p-5" onSubmit={handleSubmit}>
          <div className="w-full h-fit my-5">
            <label htmlFor="email" className="block text-2xl text-corBranca font-semibold">Email</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="email" id="email" value={login.email} onChange={(e)=> setLogin({...login, email:e.target.value})}/>
          </div>
          <div className="w-full h-fit my-5">
            <label htmlFor="senha" className="block text-2xl text-corBranca font-semibold">Senha</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="senha" id="senha" value={login.senha} onChange={(e)=> setLogin({...login, senha:e.target.value})}/>
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
          <input type="submit" className="bg-cor4 hover:bg-cor5 duration-500 transition cursor-pointer px-10 py-2 text-corBranca text-2xl rounded-xl block mx-auto xl:mt-14 mt-6"/>
        </form>
      </div>
    </section>
  )
}