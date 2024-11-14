export default function DicaSustentavel({titulo, texto}: {titulo: string, texto: string}) {
  return (
    <div className="w-full h-fit">
      <h3 className="text-xl text-cor1 font-semibold">{titulo}</h3> 
      <p>{texto}</p>
    </div>
  )
}