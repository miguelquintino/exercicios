
let lista = document.querySelectorAll("ul li")
let corpo = document.querySelector("body")

function removerAtivo() {
	lista.forEach(item => {
		item.classList.remove('ativo')
	})
}

function adicionarAtivo(tag) {
	tag.classList.add('ativo')
}

function mudarCor(tag) {
	cor = tag.getAttribute('cor')
	corpo.style.backgroundColor = cor
	removerAtivo()
	adicionarAtivo(tag)
	console.log("A cor actual é " + cor)
}

lista.forEach(item => {
	item.addEventListener('click', () => {
		mudarCor(item)
	})
})