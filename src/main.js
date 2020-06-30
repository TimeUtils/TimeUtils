
console.log("lendo")

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
  
  console.log(Math.floor(temp/60), Math.floor(temp%60))
  let resultado = document.querySelector("#resultado")
  resultado.value = `${Math.floor(temp/60)}:${Math.floor(temp%60)}`
  resultado.textContent = `${Math.floor(temp/60)}:${Math.floor(temp%60)}`

  return 0;
}