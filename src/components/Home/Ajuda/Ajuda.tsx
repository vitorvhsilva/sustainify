import DuvidaResposta from "./DuvidaResposta";

export default function Ajuda() {
  return (
    <div className="w-full h-fit p-10">
      <h2 className="text-4xl text-cor1">Responda suas dúvidas</h2>
      <DuvidaResposta pergunta="O que é a Calculadora de Emissões de Carbono e como funciona?" resposta="A calculadora estima as emissões de carbono com base no consumo de energia registrado. Basta inserir seus dados de consumo, e nosso sistema utiliza fatores de conversão confiáveis para calcular a quantidade de CO₂ emitida."/>
      <DuvidaResposta pergunta="Como posso monitorar o consumo de energia do meu condomínio?" resposta="A plataforma oferece gráficos e relatórios em tempo real para acompanhar o consumo total do condomínio, divididos por unidade, áreas comuns e períodos. O síndico e os moradores podem acessar esses dados a qualquer momento."/>
      <DuvidaResposta 
        pergunta="A plataforma ajuda a reduzir custos de energia?" 
        resposta="Sim! Com relatórios detalhados, dicas práticas e metas personalizáveis, você pode identificar áreas de desperdício e implementar estratégias para reduzir o consumo, diminuindo custos e impactos ambientais." 
      />
      <DuvidaResposta 
        pergunta="Como a plataforma incentiva práticas sustentáveis entre os moradores?" 
        resposta="Oferecemos desafios sustentáveis, como metas de economia mensal, e mostramos comparativos de consumo entre moradores para motivar mudanças. Além disso, compartilhamos dicas e campanhas de conscientização para engajar a comunidade." 
      />
      <DuvidaResposta 
        pergunta="É possível integrar a plataforma com sistemas existentes no condomínio?" 
        resposta="Sim, nossa solução pode ser integrada a sistemas de gestão de energia e sensores inteligentes, permitindo uma coleta automática de dados para maior precisão e praticidade." 
      />
      <DuvidaResposta 
        pergunta="Quais dados são necessários para usar a calculadora ou os gráficos?" 
        resposta="Basta informar o consumo de energia mensal, que pode ser obtido na conta de luz. Caso o condomínio tenha sensores de monitoramento, os dados podem ser importados diretamente." 
      />
      <DuvidaResposta 
        pergunta="A plataforma é segura para armazenar meus dados?" 
        resposta="Sim, levamos a privacidade e segurança a sério. Utilizamos tecnologias modernas de criptografia para proteger suas informações pessoais e de consumo." 
      />
      <DuvidaResposta 
        pergunta="Quem pode acessar os dados do condomínio?" 
        resposta="Apenas o síndico tem acesso completo aos dados do condomínio. Moradores podem visualizar informações relacionadas à sua unidade e dados gerais, como consumo total do condomínio e comparativos." 
      />
      <DuvidaResposta 
        pergunta="Como posso participar dos desafios de economia?" 
        resposta="Os desafios aparecem diretamente no painel de controle do morador. Basta acompanhar suas metas e comparar seu desempenho com os outros participantes. Resultados e rankings são atualizados automaticamente." 
      />
      <DuvidaResposta 
        pergunta="Como faço para relatar problemas ou dar sugestões sobre a plataforma?" 
        resposta="Você pode usar a seção de Contato na plataforma para enviar sugestões ou relatar problemas. Nosso time de suporte está disponível para ajudar rapidamente." 
      />

    </div>
  )
}