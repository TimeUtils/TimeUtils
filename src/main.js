
document.querySelector(".sidebar").style.height = window.innerHeight

function calcularTempoDecorrido(){
  const corretor = 1440;

  const tempoInicial = document.querySelector("#tempoInicial").value
  const horaInicial = parseInt(tempoInicial.split(":")[0])
  let minutoInicial = parseInt(tempoInicial.split(":")[1])

  const tempoFinal = document.querySelector("#tempoFinal").value
  const horaFinal = parseInt(tempoFinal.split(":")[0])
  let minutoFinal = parseInt(tempoFinal.split(":")[1])

  minutoInicial += horaInicial * 60;
  minutoFinal += horaFinal * 60;

  if (minutoFinal <= minutoInicial)
      minutoFinal += corretor;

  const temp = minutoFinal -minutoInicial
  
  let resultado = document.querySelector("#resultado")
  let horas = Math.floor(temp/60);
  let minutos = Math.floor(temp%60);
  console.log(minutos)
  if(minutos < 10) minutos = `0${minutos}`
  
  console.log(horas)
  if(horas < 10) horas = `0${horas}`
  
  resultado.textContent = `${horas}:${minutos}`
}