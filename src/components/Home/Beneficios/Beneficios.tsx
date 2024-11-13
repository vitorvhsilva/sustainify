import { FaCalculator } from "react-icons/fa"
import { MdEnergySavingsLeaf } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { FaGamepad } from "react-icons/fa";
import Beneficio from "./Beneficio"

export default function Beneficios() {
  return (
    <section className="w-full h-fit px-10 py-10">
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
        <Beneficio titulo="Calculadora de Emissão de Carbono" texto="Com nossa calculadora de carbono, você pode estimar as emissões de CO₂ do seu condomínio com base no consumo mensal de energia. Entenda o impacto do seu consumo energético e descubra formas de reduzir sua pegada de carbono, promovendo um ambiente mais sustentável.">
          <FaCalculator className="w-40 h-40 text-corBranca"/>
        </Beneficio>
        
        <Beneficio titulo="Monitoramento de Energia em Tempo Real" texto="Monitore o consumo de energia do condomínio em tempo real e tenha acesso a relatórios detalhados. Visualize padrões de uso, identifique picos de consumo e encontre oportunidades para otimizar a utilização de energia, reduzindo custos e impacto ambiental.">
          <SlEnergy className="w-40 h-40 text-corBranca"/>
        </Beneficio>
        
        <Beneficio titulo="Dicas de Economia para Condomínios" texto="A plataforma oferece sugestões práticas para reduzir o consumo de energia, desde ajustes rápidos até estratégias mais abrangentes. Essas dicas ajudam a diminuir gastos e contribuem para uma gestão mais consciente, promovendo um estilo de vida sustentável no condomínio e sociedade.">
          <MdEnergySavingsLeaf className="w-40 h-40 text-corBranca"/>
        </Beneficio>

        <Beneficio titulo="Sistema de Recompensa entre os Moradores" texto="Forneça prmios a sua escolha para os moradores de acordo com os dados fornecidos por nós, pelo nosso sistema de ranking, assim gerando gameficação no seu condomínio. Dessa forma, você recompensa os moradores e fornece cada vez mais um meio ambiente sustentável para as próximas gerações">
          <FaGamepad className="w-40 h-40 text-corBranca"/>
        </Beneficio>
      </div>    
    </section>
  )
}