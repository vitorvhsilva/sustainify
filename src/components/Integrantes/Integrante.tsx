import Image from "next/image"

export default function Integrante({nome, rm, src, urllink, urlgit}: {nome: string, rm: string, src: string, urllink: string, urlgit: string}) {
  return (
    <div className="border border-solid border-corPreta flex flex-col rounded-xl items-center h-fit">
      <Image className="w-80 h-80 rounded-full p-5" src={src} alt="Integrante do Time" width={1000} height={1000}/>
      <h2 className="xl:text-4xl text-3xl">{nome}</h2>
      <h3 className="text-xl text-cor5">1TDSPY - {rm}</h3>
      <div className="w-full h-fit flex items-center gap-2 my-2 ml-10">
        <h3 className="text-2xl"><a href={urlgit} target="_blank">github</a></h3>
        <Image className="w-8" src={"/integrantes/github.png"} alt="Icone do Github" width={1000} height={1000}/>
      </div>
      <div className="w-full h-fit flex items-center gap-2 my-2 ml-10">
        <h3 className="text-2xl"><a href={urllink} target="_blank">linkedin</a></h3>
        <Image className="w-8" src={"/integrantes/linkedin.png"} alt="Icone do Linkedin" width={1000} height={1000}/>
      </div>
    </div>
  )
}