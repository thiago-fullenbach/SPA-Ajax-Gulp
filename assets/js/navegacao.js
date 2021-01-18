function navegarViaAjax(url, seletor) { // Função de obtenção de conteudo de outras páginas
    if (!url || !seletor) return
    const elemento = document.querySelector(seletor)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            elemento.innerHTML = html
        })
}

function marcarLink(url) {
    const links = document.querySelectorAll('[url-spa]')
    const linkSelecionado = document.querySelector(`[url-spa="${url}"]`)
    links.forEach(link => link.classList.remove('selecionado'))
    linkSelecionado.classList.add('selecionado')
}

document.querySelectorAll('[url-spa]').forEach(link => { // Navega via Ajax durante o click
    const url = link.attributes['url-spa'].value
    const seletor = link.attributes['destino-spa'].value

    link.onclick = e => {
        e.preventDefault()

        marcarLink(url)
        navegarViaAjax(url, seletor)
    }
})

window.onload = () => { // Carrega página com conteudo da página início
    marcarLink('paginas/inicio.html')
    navegarViaAjax('paginas/inicio.html', '#conteudo')
} 