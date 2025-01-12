
let tela = document.getElementById('tela');

function adicionar(num) {
  tela.value += num
}

function apagar() {
  tela.value = tela.value.slice(0, -1)
}

function limpar() {
  tela.value = '' 
}

function calcular() {
  if (tela.value != 0) {
    try {
      tela.value = eval(tela.value)
    }
    catch (err) {
      tela.value = "ERRO!"
    }
  }
}