export default function BannerHome() {
  return (
    <section className="w-full h-fit">
      <div className="relative w-full h-[80vh] bg-cover bg-no-repeat bg-[url('/home/bannerhome2.jpg')]">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative pt-10 justify-center items-center flex flex-col h-full">
          <h1 className="text-7xl text-corBranca text-center">Bem-vindo a <span className="text-cor5">Sustainify</span></h1>
          <h2 className="text-2xl text-corBranca text-center">Transformando Consumo em Conscientização</h2>
          <p className="text-xl text-corBranca w-[50%] text-center mt-10 mx-auto">Na busca por um futuro mais sustentável, nossa plataforma oferece soluções inteligentes para que condomínios acompanhem seu consumo de energia e entendam o impacto de suas emissões de carbono. Combinamos tecnologia e compromisso ambiental para promover uma gestão mais eficiente e sustentável.</p>
          <button className="text-corBranca px-10 py-5 bg-cor4 rounded-full mx-auto block mt-20 text-xl hover:bg-cor5 hover:scale-110 transition duration-500">Fazer a diferença</button>
        </div>
      </div>
    </section>
  );
}
