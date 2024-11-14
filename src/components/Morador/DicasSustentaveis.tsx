import DicaSustentavel from "./DicaSustentavel";

export default function DicasSustentaveis() {
  return (
    <div className="lg:w-[29%] w-[90%] h-fit pt-2">
      <h2 className="text-2xl mb-5">dicas para reduzir a emissão</h2>
      <DicaSustentavel titulo="Adote Iluminação LED" texto="Substituir lâmpadas incandescentes ou fluorescentes por LEDs pode reduzir o consumo de energia em até 80%. Além disso, as lâmpadas LED duram mais, reduzindo a necessidade de substituição frequente e o desperdício."/>
      <DicaSustentavel titulo="Desligue Equipamentos no Modo Standby" texto="Muitos aparelhos consomem energia mesmo quando estão em modo standby. Desligar dispositivos, como TVs, computadores e carregadores, quando não estão em uso pode economizar até 10% na conta de energia e diminuir o consumo desnecessário."/>
      <DicaSustentavel titulo="Invista em Eletrodomésticos Eficientes" texto="Eletrodomésticos com selo de eficiência energética consomem menos energia. Investir em aparelhos de classificação A++ ou A+++ pode reduzir significativamente o consumo e as emissões associadas ao uso doméstico."/>
      <DicaSustentavel titulo="Ajuste o Termostato e o Aquecedor de Água" texto="Reduzir a temperatura de aquecedores de água e ajustar o termostato para alguns graus abaixo do habitual no inverno e acima no verão pode reduzir muito o consumo. Cada grau a menos ou a mais pode representar uma economia de até 5% no consumo de energia."/>
      <DicaSustentavel titulo="Aproveite a Luz Natural" texto="Utilize a luz natural o máximo possível, especialmente em áreas comuns. Deixar cortinas abertas durante o dia e instalar claraboias pode reduzir a necessidade de iluminação artificial e, consequentemente, a energia consumida para iluminação."/>
      
    </div>
  )
}