
const formPesquisa = document.querySelector("form#pesquisa");
const inputPesquisa = document.querySelector("form#pesquisa input")
const itens = document.querySelectorAll("li")

formPesquisa.addEventListener("submit", (event) => {
    event.preventDefault();
    pesquisar()
})

inputPesquisa.addEventListener("input", function() {
    pesquisar()
})

function pesquisar() {
    const filter = inputPesquisa.value.toLowerCase();
    itens.forEach(function(item) {
        const texto = item.textContent.toLowerCase();
        if (texto.includes(filter)) {
          item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    })
}