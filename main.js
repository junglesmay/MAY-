const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
  
for(let i=0;i <botoes.length;i++){
  botoes[i].onclick = function(){

    for(let j=0;j<botoes.length;j++){
      botoes[j].classlist.remove("ativo");
      textos[j],classlist.remove("ativo");
    }
    
    botoes[i].classlist.add("ativo");
    textos[i].classlist.add("ativo");
  }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-12-05T00:00:00");
const tempoObjetivo3 = new Date("2024-12-30T00:00:00");
const tempoObjetivo4 = new Date("2025-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

function atualizaCronometro(){
  for (let i=0; i<contadores.length;i++){
    contadores[i].textContent = calculaTempo(tempos[1]);
  }
}

atualizaCronometro();
setInterval()

function calculaTempo(tempoObjetivo){
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal/1000);
  let minutos = Math.floor(segundos/60);
  let horas = Math.floor(minutos/60);
  let horas = Math.floor(horas/24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  
  return dias + " dias " + horas " horas " + minutos + " minutos " + segundos + " segundos";
}

