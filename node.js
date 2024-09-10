const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal causa das mudanças climáticas?",
        alternativas: [ Alternativa A: Desmatamento
            Alternativa B: Atividades industriais
                      
            {
                texto: "O desmatamento tem um impacto significativo nas mudanças climáticas, pois reduz a quantidade de árvores que podem absorver dióxido de carbono, um dos principais gases de efeito estufa. Além disso, a queima de árvores libera carbono armazenado, contribuindo ainda mais para o aquecimento global."
                afirmacao: "O desmatamento contribui para o aumento das emissões de gases de efeito estufa e, consequentemente, para as mudanças climáticas."
            },
            {
                texto:  "As atividades industriais, como a queima de combustíveis fósseis e a emissão de poluentes atmosféricos, são grandes responsáveis pelas mudanças climáticas. A emissão de gases de efeito estufa provenientes da indústria contribui diretamente para o aquecimento global e altera os padrões climáticos.",
                afirmacao: "As atividades industriais são uma das principais fontes de gases de efeito estufa, intensificando o aquecimento global"
            }
        ]
            enunciado: "As atividades industriais são uma das principais fontes de gases de efeito estufa, intensificando o aquecimento global",
            alternativas: [ Alternativa A: Usar sacolas de plástico descartáveis
                Alternativa B: Optar por produtos com embalagens reutilizáveis          
                {
                    texto: "Usar sacolas de plástico descartáveis pode aumentar a quantidade de resíduos plásticos no meio ambiente. Embora convenientes, elas são frequentemente descartadas após um único uso e contribuem significativamente para a poluição marinha e terrestre.",
                    afirmacao: "Usar sacolas de plástico descartáveis pode aumentar a quantidade de resíduos plásticos no meio ambiente. Embora convenientes, elas são frequentemente descartadas após um único uso e contribuem significativamente para a poluição marinha e terrestre."
                },
                {
                    texto:  "Optar por produtos com embalagens reutilizáveis é uma das maneiras mais eficazes de reduzir o consumo de plástico. Ao escolher produtos com embalagens que podem ser usadas várias vezes, você ajuda a diminuir a quantidade de plástico descartado e reduz a demanda por novos produtos plásticos.",
                    afirmacao: "O uso de sacolas de plástico descartáveis contribui para o aumento da poluição plástica.."
                }
            ]
            {
                enunciado: "Qual é um benefício da agricultura orgânica em comparação com a agricultura convencional?",
                alternativas: [  vAlternativa A: Menor impacto ambiental
                    Alternativa B: Maior uso de pesticidas         
                    {
                        texto: "A agricultura orgânica geralmente tem um menor impacto ambiental em comparação com a agricultura convencional. Ela evita o uso de pesticidas e fertilizantes sintéticos, o que pode levar a uma melhor saúde do solo e menor contaminação da água.",
                        afirmacao: "A agricultura orgânica geralmente tem um menor impacto ambiental em comparação com a agricultura convencional. Ela evita o uso de pesticidas e fertilizantes sintéticos, o que pode levar a uma melhor saúde do solo e menor contaminação da água.."
                    },
                    {
                        texto:  "A agricultura convencional frequentemente utiliza pesticidas e fertilizantes químicos, que podem ter efeitos adversos sobre o meio ambiente e a saúde humana. Em contraste, a agricultura orgânica foca em métodos naturais para proteger e nutrir as plantas, resultando em um impacto ambiental reduzido..",
                        afirmacao: "A agricultura convencional tende a ter um maior impacto ambiental devido ao uso intensivo de pesticidas e fertilizantes químicos."
                    }
                ]
    },
    // adicione acima as pergundas substituindo as originais
    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta(); 