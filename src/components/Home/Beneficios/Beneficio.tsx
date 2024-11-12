export default function Beneficio({titulo, texto, children}: {titulo:string, texto: string, children: JSX.Element}) {
  return (
    <div className="border-cor5 border border-solid rounded-xl h-fit hover:scale-110 transition duration-500">
      <div className="h-[50%] w-full bg-cor1 rounded-t-lg flex justify-center items-center py-20">
        {children}
      </div>
      <div className="h-[50%] w-full p-5">
        <h2 className="text-2xl">{titulo}</h2>
        <p className="mt-2">{texto}</p>
      </div>
    </div>
  )
}