export default function BannerHome() {
  return (
    <section className="w-full h-fit">
      <div className="relative w-full h-[80vh] bg-cover bg-no-repeat bg-[url('/home/bannerhome2.jpg')]">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative pt-10 justify-center h-full">
          <h1 className="text-7xl text-corBranca text-center">Ajude o mundo</h1>
          <h2 className="text-2xl text-corBranca text-center">Monitore o consumo de energia do seu condomínio por meio de nossa solução tecnológica</h2>
        </div>
      </div>
    </section>
  );
}
