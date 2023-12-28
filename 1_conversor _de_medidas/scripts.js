// Selecionar os Elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const converButton = document.querySelector("#convert-btn");
const menssagElement = document.querySelector("#message");

// Função para converter as unidades
function conversao() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue == toValue) {
    outputElement.value = inputElement.value;
    menssagElement.textContent = "";
    return;
  }

  //Converte a entrada em metros

  let metros;
  switch (fromValue) {
    case "m":
      metros = inputElement.value;
      break;
    case "km":
      metros = inputElement.value * 1000;
      break;
    case "cm":
      metros = inputElement.value / 100;
      break;
    case "mm":
      metros = inputElement.value / 1000;
      break;
  }

  // Converter metros para unidade de saida
  let resultadoFinal;
  switch (toValue) {
    case "m":
      resultadoFinal = metros;
      break;
    case "km":
      resultadoFinal = metros / 1000;
      break;
    case "cm":
      resultadoFinal = metros * 100;
      break;
    case "mm":
      resultadoFinal = metros * 1000;
      break;
  }

  //Exibir resultado no input
  outputElement.value = resultadoFinal;

  //resultado na mensagem

  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;

  // Mensagem final
  const message = `${inputElement.value} ${fromLabel} equivalem a ${resultadoFinal} ${toLabel}`;
  menssagElement.textContent = message;
  return;
}

converButton.addEventListener("click", conversao);
