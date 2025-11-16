
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 mt-8 space-y-8">
      <div className="prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold text-amber-800 border-b-2 border-amber-200 pb-2 mb-4">
          Qual é a fórmula e como se calculam os juros compostos?
        </h2>
        <p>A fórmula dos juros compostos é:</p>
        <p className="text-center font-mono bg-gray-100 p-4 rounded-md my-4 text-lg">M = C (1+i)^t</p>
        <p>Na equação, cada letra se refere a um valor, onde:</p>
        <ul className="list-disc list-inside space-y-2 my-4">
            <li><strong>M</strong> é o valor final da transação, o montante acumulado</li>
            <li><strong>C</strong> é o capital investido</li>
            <li><strong>i</strong> é a taxa de juros</li>
            <li><strong>t</strong> é o tempo em que o capital ficará aplicado ou sob empréstimo</li>
        </ul>
        <p>Sem a ajuda de uma calculadora de juros compostos, fica um pouco mais complicado fazer as contas, mas não é impossível. Para que a equação faça sentido, é preciso selecionar um período de tempo e taxa de juros equivalentes.</p>
        <p>Um detalhe importante, é que se você usar uma taxa mensal, lembre-se de usar o tempo em meses e não em anos. Por exemplo, se o intuito é que as parcelas durem 24 meses, este deverá ser o número usado ao fazer o cálculo, e não 2, que corresponderia ao total em anos.</p>
        <p>Além disso, é muito importante que a taxa de juros esteja em formato decimal, para que os cálculos deem certo. Enfim, ao longo do tempo em que o investimento durar, o cálculo dos juros compostos deverá considerar os seguintes fatores:</p>
        <ul className="list-disc list-inside space-y-2 my-4">
            <li>Valor inicial acordado na transação</li>
            <li>Rendimento acumulado do mês anterior</li>
            <li>Taxa de juros do mês em curso</li>
        </ul>
        <p>Levando em conta o crescimento exponencial dos juros compostos, quanto maior for o período pagando um empréstimo ou aplicando em um investimento, maior será sua dívida ou rendimento.</p>
        <p>Isso significa que em um investimento, você ganhará cada vez mais ao longo dos meses. No entanto, os juros compostos também são usados em dívidas, neste caso, você pagará um valor maior a cada mês.</p>

        <h2 className="text-2xl font-bold text-amber-800 border-b-2 border-amber-200 pb-2 mb-4 mt-8">
          Onde os juros compostos são aplicados?
        </h2>
        <p>Primeiramente, os juros compostos são conhecidos como juros sobre juros, já que seu cálculo leva em conta não apenas o valor inicial, mas também os juros do período.</p>
        <p>Na prática, eles são usados em várias relações comerciais como, por exemplo, em empréstimos, investimentos e até mesmo em compras feitas em várias parcelas.</p>
        <p>No entanto, como os juros compostos oferecem um crescimento exponencial, eles são muito usados no mercado financeiro, para validar empréstimos, financiamentos ou investimentos.</p>
        <p>Os juros compostos em si, não são bons nem ruins. A sua experiência com esses juros, como você pode ver na calculadora de juros compostos, vai depender de qual posição você toma na situação. Por exemplo:</p>
        
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">1- Contas</h3>
        <p>Com o intuito de desestimular atrasos no pagamento de contas, instituições financeiras e empresas privadas podem usar os juros compostos, fazendo com que o pagador apenas aumente sua dívida caso não efetue o pagamento em dia.</p>
        <p>Dessa forma, quanto mais a conta demorar para ser quitada, mais alto será o valor em aberto. Nessa situação, os juros compostos são vantajosos para a empresa, mas é um verdadeiro pesadelo para o cliente, pois a dívida pode virar uma grande bola de neve.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">2- Financiamentos</h3>
        <p>O cálculo de juros compostos também incide sobre financiamentos e empréstimos, já que as instituições preferem utilizar o método para garantir maiores rendimentos. Neste caso, o financiamento pode sair bem caro para o cliente, pois os juros compostos irão aumentar muito o valor final a ser pago.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">3- Investimentos</h3>
        <p>Por fim, os juros compostos também são muito usados como remuneração em investimentos. Sendo assim, investir em ativos com juros compostos é uma boa forma de usar os juros compostos a seu favor. Muitos investimentos de renda fixa remuneram com juros compostos, por exemplo, CDBs, CRIs, Tesouro Direto e etc.</p>
        <p>Nas ações você também pode usufruir dos juros compostos. Mas neste caso, você deve reinvestir os dividendos recebidos, desse modo, você terá o efeito dos juros compostos no longo prazo.</p>

        <h2 className="text-2xl font-bold text-amber-800 border-b-2 border-amber-200 pb-2 mb-4 mt-8">
          Diferenças entre juros simples e compostos
        </h2>
        <p>Os juros simples e compostos, são tipos de juros cobrados em empréstimos ou investimentos. No entanto, os dois funcionam de formas diferentes.</p>
        <p>A principal diferença entre eles, é que os juros simples incidem apenas em cima do capital inicial. Aqui no nosso site, além da calculadora de juros compostos, você também encontra uma calculadora de juros simples. Em outras palavras, os juros são calculados somente sob a quantia investida ou emprestada inicialmente.</p>
        <p>Por outro lado, os juros compostos incidem sobre o montante total. Ou seja, o juros é calculado não apenas em cima do capital inicial, mas também em cima dos juros que a aplicação já rendeu até então. É por isso que ele é chamado de juros sobre juros.</p>
        <p>Para facilitar, confira a diferenciação dos dois, separados por tópicos:</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="border p-4 rounded-lg bg-gray-50">
                <h4 className="font-bold text-lg text-gray-800">Juros Simples</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Ao serem somados nominalmente ao capital, os juros simples formariam uma reta (ex.: 100, 110, 120 etc);</li>
                    <li>Os juros simples são pagos de forma periódica ao credor;</li>
                    <li>Os juros simples são iguais ao longo do tempo, mas diminuem em termos reais;</li>
                    <li>Juros simples, ocorre a fruição imediata dos juros pelo credor.</li>
                </ul>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
                <h4 className="font-bold text-lg text-gray-800">Juros Compostos</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Ao serem somados nominalmente ao capital, os juros compostos formariam uma curva ascendente;</li>
                    <li>Os juros compostos são pagos apenas no vencimento;</li>
                    <li>Juros compostos são crescentes em termos reais e nominais, se a taxa for acima da inflação;</li>
                    <li>Tecnicamente, nos juros compostos ocorre a fruição diferida dos juros pelo credor.</li>
                </ul>
            </div>
        </div>

        <p className="mt-6">Agora que você sabe a diferença entre os dois tipos de juros, vamos a um exemplo, para que você entenda a grande diferença entre o rendimento dos dois tipos:</p>
        <p>Vamos supor que você fez um investimento inicial de R$ 5.000, por um período de 12 meses com 1% de juros ao mês e que você não realizou novos aportes. Neste caso, nos juros compostos, você teria um total de R$ 5.634,13. Por outro lado, com os juros simples você teria R$ 5.600,00.</p>
        <p>Como estamos considerando apenas 12 meses sem novos aportes, o valor entre os juros compostos e simples pode parecer pequeno. Mas no longo prazo, a diferença entre eles é grande. Vamos considerar esse investimento de R$ 5.000 com juros de 1% ao mês, em diferentes prazos:</p>

        <div className="space-y-4 my-6">
            <div>
                <h4 className="font-bold text-lg text-gray-800">5 anos</h4>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Juros simples:</strong> R$ 8.000,00</li>
                    <li><strong>Juros compostos:</strong> R$ 9.083,48</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg text-gray-800">10 anos</h4>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Juros simples:</strong> R$ 11.000,00</li>
                    <li><strong>Juros compostos:</strong> R$ 16.501,93</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg text-gray-800">20 anos</h4>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Juros simples:</strong> R$ 17.000,00</li>
                    <li><strong>Juros compostos:</strong> R$ 54.462,77</li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-lg text-gray-800">30 anos</h4>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Juros simples:</strong> R$ 23.000,00</li>
                    <li><strong>Juros compostos:</strong> R$ 179.748,21</li>
                </ul>
            </div>
        </div>
        
        <p>Com trinta anos, é possível perceber a enorme diferença entre os juros simples e composto no longo prazo. Se você for investindo todos os meses, o valor final será ainda maior.</p>
        <p>Essa bola de neve de rendimento formada pelos juros compostos, é conhecida como a mágica dos juros compostos e pode te ajudar a construir seu patrimônio a longo prazo. Como Albert Einstein dizia: “juros compostos são a oitava maravilha do mundo”.</p>
        <p className="mt-6">Já usou a nossa calculadora de juros compostos? O que achou? Compartilha com todos que vão adorar usar essa ferramenta.</p>

      </div>
    </div>
  );
};

export default InfoSection;