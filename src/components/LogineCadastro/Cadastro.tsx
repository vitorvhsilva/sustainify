"use client"

import { TipoCadastro } from "@/app/types"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Cadastro() {

  useEffect(() => {
    setSindicoSelecionado(false)
  }, [])

  const navigate = useRouter()
  const [sindicoSelecionado, setSindicoSelecionado] = useState(false)
  const [cadastro, setCadastro] = useState<TipoCadastro>({
    nome: "",
    cep: "",
    cpf: "",
    email: "",
    numEndereco: "",
    numResidencia: "",
    rua: "",
    senha: "",
    telefone: ""
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
      cadastroSindico(cadastro)
    } else {
      cadastroMorador(cadastro)
    }
  }

  const cadastroMorador = (cadastro: TipoCadastro) => {
    const requisicao = {
      nomeMorador: cadastro.nome,
      cpfMorador: cadastro.cpf,
      emailMorador: cadastro.email,
      senhaMorador: cadastro.senha,
      telefoneMorador: cadastro.telefone,
      cepSolicitacao: cadastro.cep,
      numResidenciaSolicitacao: cadastro.numResidencia
    } 
    console.log(requisicao)
  }

  const cadastroSindico = async (cadastro: TipoCadastro) => {
    const requisicao = {
      nomeSindico: cadastro.nome,
      cpfSindico: cadastro.cpf,
      emailSindico: cadastro.email,
      senhaSindico: cadastro.senha,
      telefoneSindico: cadastro.telefone,
      ruaComunidade: cadastro.rua,
      numComunidade: cadastro.numEndereco,
      cepComunidade: cadastro.cep
    } 

    try {
      const response = await fetch("http://localhost:8080/sindicos", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(requisicao)
      });

      if(!response.ok){
        const erroTexto = await response.text();
        alert(erroTexto)
        return
      }

      const responseIdSindico = await fetch(`http://localhost:8080/sindicos/${requisicao.cpfSindico}`);
      const idSindico = await responseIdSindico.json();

      localStorage.setItem("idSindico", idSindico)

      alert("Cadastro feito com sucesso!")
      setCadastro({
        nome: "",
        cep: "",
        cpf: "",
        email: "",
        numEndereco: "",
        numResidencia: "",
        rua: "",
        senha: "",
        telefone: ""
      });
      navigate.push("/sindico")

    } catch (error) {
      alert(error)
      console.error("Falha ao cadastrar sindico!", error);
    }
  }

  return (
    <section className="w-full h-fit py-10 bg-cover bg-[url('/login/fundologin.jpg')] flex items-center lg:justify-end">
      <div className="xl:w-[40%] lg:w-[60%] md:w-[80%] w-[95%] h-fit bg-cor4 rounded-xl lg:mr-10 mx-auto">
        <Image className="w-48 mx-auto block" src={'/logobranca.png'} alt="Logo da Sustainify" width={1000} height={1000}/>
        <h1 className="text-center text-corBranca text-3xl mb-2">Cadastro</h1>
        <h2 className="text-2xl text-corBranca ml-5">Já tem uma conta? <Link href={"/login"} className="text-cor5 underline">Faça Login</Link></h2>
        <form action="" className="p-5" onSubmit={handleSubmit}>
          <div className="w-full h-fit my-5">
            <label htmlFor="nome" className="block text-2xl text-corBranca font-semibold">Nome</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="nome" id="nome" value={cadastro.nome} onChange={(e)=> setCadastro({...cadastro, nome:e.target.value})}/>
          </div>

          <div className="w-full h-fit my-5">
            <label htmlFor="email" className="block text-2xl text-corBranca font-semibold">Email</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="email" id="email" value={cadastro.email} onChange={(e)=> setCadastro({...cadastro, email:e.target.value})}/>
          </div>

          <div className="w-full h-fit my-5">
            <label htmlFor="senha" className="block text-2xl text-corBranca font-semibold">Senha</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="senha" id="senha" value={cadastro.senha} onChange={(e)=> setCadastro({...cadastro, senha:e.target.value})}/>
          </div>

          <div className="w-full h-fit my-5">
            <label htmlFor="cpf" className="block text-2xl text-corBranca font-semibold">CPF</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="cpf" id="cpf" value={cadastro.cpf} onChange={(e)=> setCadastro({...cadastro, cpf:e.target.value})}/>
          </div>

          <div className="w-full h-fit my-5">
            <label htmlFor="telefone" className="block text-2xl text-corBranca font-semibold">Telefone</label>
            <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="telefone" id="telefone" value={cadastro.telefone} onChange={(e)=> setCadastro({...cadastro, telefone:e.target.value})}/>
          </div>

          <h2 className="text-corBranca font-semibold text-2xl mb-2">Tipo de Conta</h2>
          <div className="w-full flex items-center h-fit my-5">
            <div className="w-full h-fit flex items-center md:gap-4 gap-1 ">
              <input className="w-8 h-8" type="radio" id="morador" name="tipo" value="morador" onClick={clicarRadioMorador} />
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
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="cep" id="cep" value={cadastro.cep} onChange={(e)=> setCadastro({...cadastro, cep:e.target.value})}/>
              </div>

              <div className="w-full h-fit my-5">
                <label htmlFor="rua" className="block text-2xl text-corBranca font-semibold">Rua</label>
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="rua" id="rua" value={cadastro.rua} onChange={(e)=> setCadastro({...cadastro, rua:e.target.value})}/>
              </div>

              <div className="w-full h-fit my-5">
                <label htmlFor="num" className="block text-2xl text-corBranca font-semibold">Número</label>
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="num" id="num" value={cadastro.numEndereco} onChange={(e)=> setCadastro({...cadastro, numEndereco:e.target.value})}/>
              </div>
            </>
          ) 
          :
          (
            <>
              <h2 className="text-corBranca font-semibold text-2xl mb-2">Insira as informações do seu endereço</h2> 
              <div className="w-full h-fit my-5">
                <label htmlFor="cep" className="block text-2xl text-corBranca font-semibold">CEP da Comunidade</label>
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="cep" id="cep" value={cadastro.cep} onChange={(e)=> setCadastro({...cadastro, cep:e.target.value})}/>
              </div>
              <div className="w-full h-fit my-5">
                <label htmlFor="num" className="block text-2xl text-corBranca font-semibold">Número da sua Residência</label>
                <input className="text-2xl px-2 py-2 w-full rounded-xl" type="text" name="num" id="num" value={cadastro.numResidencia} onChange={(e)=> setCadastro({...cadastro, numResidencia:e.target.value})}/>
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