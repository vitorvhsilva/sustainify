export default function DicaSustentavel({titulo, texto}: {titulo: string, texto: string}) {
  return (
    <div className="w-full h-fit border border-solid border-cor1 my-2 p-2 rounded-xl hover:bg-cor2 transition duration-500">
      <h3 className="text-xl text-cor1 font-semibold">{titulo}</h3> 
      <p>{texto}</p>
    </div>
  )
}