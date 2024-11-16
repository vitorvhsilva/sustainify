import Moradia from "./Moradia";

export default function SelecionarMoradiaPage() {
  return (
    <section className="w-full h-fit mt-10 p-5">
      <h1 className="text-5xl mb-5">Selecione sua Moradia</h1>
      <div className="w-full h-fit grid lg:grid-cols-2 grid-cols-1 gap-8">
        <Moradia />
        <Moradia />
      </div>
    </section>
  )
}