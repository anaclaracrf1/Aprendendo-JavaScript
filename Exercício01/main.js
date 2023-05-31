function carregar() {
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var dia = data.getDate()
    var horas = 19
    mensagem.innerHTML = `Hoje é dia ${dia} e são ${horas} horas.`

    if (horas >= 0 && horas < 12) {
        mensagem.innerHTML = `Bom dia! Hoje é dia ${dia} e são ${horas} horas.`
        imagem.src ="../imagens/Manhã.jpg"
        document.body.style.background = '#0095B6'
    } else if (horas >= 12 && horas < 18) {
        mensagem.innerHTML = `Boa tarde! Hoje é dia ${dia} e são ${horas} horas.`
        imagem.src ="../imagens/Tarde.jpg"
        document.body.style.background = '#00A86B'
    } else {
        mensagem.innerHTML = `Boa noite! Hoje é dia ${dia} e são ${horas} horas.`
        imagem.src ='../imagens/Noite.jpg'
        document.body.style.background = '#32174D'
    }
}