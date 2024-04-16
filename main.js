const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores= document.querySelectorAll(".contador");
const tempoObjetivo1= new Date("2024-04-25");
contadores[0].textContent =tempoObjetivo1;
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date
("2024-04-25T00:00:00");

contadores[0].textContent = calculatempo(tempoObjetivo1);

function calculatempo(tempoObjetivo1) {

     let tempoAtual = new date();
     let tempofinal = tempoObjetivo1-tempoAtual;
     let segundos = math.floor(tempofinal / 1000);
     let minutos = math.floor(segundo / 60);
     let horas = math.floor(minutos / 60);
     let dias = math.floor(horas / 24);
     segundos %=60;
     minutos %=60;
     horas %=24;
     return dias + "dias" + horas +"horas" + minutos + "minutos" + segundos + "segundos";
}