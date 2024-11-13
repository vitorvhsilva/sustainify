export default function InputTextLogin({nome, id, inputClicado, setInputClicado}: {nome:string, id:string, inputClicado: string, setInputClicado: (id: string) => void}) {
  return (
    <div className={`w-full h-fit flex justify-between ${inputClicado == id ? "bg-cor4": "bg-cor2"} items-center p-5 rounded-xl my-2 transition duration-500`} onClick={() => setInputClicado(id)}>
      <label className="lg:text-5xl md:text-4xl text-xl text-corBranca" htmlFor={id}>{nome}</label>
      <input type="text" name={id} id={id} className="lg:w-[80%] md:w-[60%] w-[70%] md:h-16 h-10 md:text-2xl text-xl p-2 rounded-xl" />
    </div>
  )
}