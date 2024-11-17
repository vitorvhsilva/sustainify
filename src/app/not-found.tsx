import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <h1 className="md:text-5xl text-2xl text-cor1">Página não encontrada :( </h1>
      <h2 className="md:text-4xl text-xl">Clique <Link href={"/"} className="text-cor1 font-semibold">aqui</Link> para voltar pra home</h2>
    </div>
  )
}