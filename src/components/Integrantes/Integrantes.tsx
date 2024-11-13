import Image from "next/image"
import Integrante from "./Integrante"

export default function Integrantes () {
  return (
    <section className="w-full h-fit">
      <div className="w-full h-fit bg-cor4 px-10 py-5 flex gap-8 items-center">
        <h1 className="text-5xl text-corBranca">Time de Integrantes</h1>
        <Image className="w-40" src={"/logobranca.png"} alt="Logo da Sustainify" width={1000} height={1000}/>
      </div>
      <div className="w-full h-fit grid lg:grid-cols-3 mt-20 gap-10 px-10">        
        <Integrante nome="João Murilla Ganança" rm="RM556405" src="/integrantes/gananca.jpg" urlgit="https://github.com/joaogananca26" urllink="https://www.linkedin.com/in/joaogananca/"/>
        <Integrante nome="Lucas Bracco Yamamoto" rm="RM554458" src="/integrantes/lucas.jpg" urlgit="https://github.com/yamamotolucas" urllink="https://www.linkedin.com/in/lucas-yamamoto-33873a22b/"/>
        <Integrante nome="Vitor Hugo da Silva" rm="RM558961" src="/integrantes/vitor.jpg" urlgit="https://github.com/vitorvhsilva" urllink="https://www.linkedin.com/in/vitorvhsilva"/>
      </div>
    </section>
  ) 
}