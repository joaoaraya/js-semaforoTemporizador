// Definir valor indice como (vazio)
let valueIndex = null;

// função 'proximo valor' (o 'valor indice' é menor que 52? (sim) add +1, (não) voltar p/ 0)
const nextValue = () => valueIndex = valueIndex < 52 ? ++valueIndex : 0;


const nextStep = () => {
    let sinalA = document.querySelector('div#vermelho');
    let sinalB = document.querySelector('div#amarelo');
    let sinalC = document.querySelector('div#verde');
    let timer = document.querySelector('p#timer');

    if (valueIndex >= 0 && valueIndex <= 25) {
            sinalA.style.backgroundColor = "rgb(249,61,39)";
            sinalB.style.backgroundColor = "rgb(54, 54, 54)"; 
            sinalC.style.backgroundColor = "rgb(54, 54, 54)";
            timer.style.color = "rgb(249,61,39)";
    }
    else if (valueIndex >=26 && valueIndex <= 27) {
            sinalA.style.backgroundColor = "rgb(54, 54, 54)";
            sinalB.style.backgroundColor = "rgb(252, 232, 11)"; 
            sinalC.style.backgroundColor = "rgb(54, 54, 54)";
            timer.style.color = "rgb(252, 232, 11)";
    }
    else if (valueIndex >=28 && valueIndex <= 52) {
            sinalA.style.backgroundColor = "rgb(54, 54, 54)";
            sinalB.style.backgroundColor = "rgb(54, 54, 54)"; 
            sinalC.style.backgroundColor = "rgb(19, 190, 16)";
            timer.style.color = "rgb(19, 190, 16)";
    }

    nextValue();
}

/// A função 'GO' executa o intervalo de tempo (timer) a função 'nextstep' a cada 1.000 milisegundos (1 seg.)
const go = () => setInterval (nextStep, 1000);