// Definir valores iniciais
let valueIndex = null, n = 16;

// Função 'proximo valor' (o 'valor indice' é menor que 52? (sim) add +1, (não) voltar p/ 0)
const nextValue = () => valueIndex = valueIndex < 36 ? ++valueIndex : 0;

// Função 'contagem de tempo do contador' (tirar 1 numero se for menor que 25)
const timerCount = () => n = n < 1 ? 15 : --n;

// Função 'zero na frente' inclui o zero na frente se for (9..8)
const zeroNaFrente = () => n = n < 10 ? '0'+n : n;


// Quando exexcutar a função 'nextStep' no timer: (mudar cores e contadores)
const nextStep = () => {
    let sinalA = document.querySelector('div#vermelho');
    let sinalB = document.querySelector('div#amarelo');
    let sinalC = document.querySelector('div#verde');
    let timer = document.querySelector('p#timer');

    if (valueIndex >= 0 && valueIndex <= 15) {
            sinalA.style.backgroundColor = "rgb(249,61,39)";
            sinalB.style.backgroundColor = "rgb(54, 54, 54)"; 
            sinalC.style.backgroundColor = "rgb(54, 54, 54)";
            timer.style.color = "rgb(249,61,39)";
            timerCount();
            timer.innerHTML = zeroNaFrente();
    }
    else if (valueIndex >=16 && valueIndex <= 17 || valueIndex >=34 && valueIndex <= 35) {
            sinalA.style.backgroundColor = "rgb(54, 54, 54)";
            sinalB.style.backgroundColor = "rgb(252, 232, 11)"; 
            sinalC.style.backgroundColor = "rgb(54, 54, 54)";
            timer.style.color = "rgb(54, 54, 54)";
    }
    else if (valueIndex >=18 && valueIndex <= 33) {
            sinalA.style.backgroundColor = "rgb(54, 54, 54)";
            sinalB.style.backgroundColor = "rgb(54, 54, 54)"; 
            sinalC.style.backgroundColor = "rgb(19, 190, 16)";
            timer.style.color = "rgb(19, 190, 16)";
            timerCount();
            timer.innerHTML = zeroNaFrente();
    }
    
    nextValue();
}


// A função 'GO' executa o intervalo de tempo (timer) a função 'nextstep' a cada 1.000 milisegundos (1 seg.)
const go = () => setInterval (nextStep, 1000);