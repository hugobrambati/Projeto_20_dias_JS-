function atualizarelogio() {
  const horasElemento = document.querySelector(".horas");
  const minutosElemento = document.querySelector(".minutos");
  const segundosElemento = document.querySelector(".segundos");

  const dataAtual = new Date();
  const horas = dataAtual.getHours().toString().padStart(2, "0");
  const minutos = dataAtual.getMinutes().toString().padStart(2, "0");
  const segundos = dataAtual.getSeconds().toString().padStart(2, "0");

  horasElemento.textContent = horas;
  minutosElemento.textContent = minutos;
  segundosElemento.textContent = segundos;
}

setInterval(atualizarelogio, 1000);
