var data = new Date()
var ano = data.getFullYear()
var ano_digitado = document.getElementById('ano_de_nascimento')
var resultado = document.getElementById('resultado')
var genero = document.querySelectorAll('.genero')

function Verificar() {

    if (ano_digitado.value > ano || ano_digitado.value <= 0){
        window.alert('Ano inválido, tente novamente...')
    }else {
        
        var idade = ano - Number(ano_digitado.value)
        var genero_escolhido = ''

        if (genero[0].checked) {
            genero_escolhido = 'Homem'
            if (idade >= 0 && idade <= 12){
                resultado.innerHTML = `Você tem ${idade} anos e é um mini homem ;)`
            }else if (idade >= 13 && idade <= 18){
                resultado.innerHTML = `Você tem ${idade} anos e é um homem jovem :)`
            }else if (idade >= 19 && idade <= 65) {
                resultado.innerHTML = `Você tem ${idade} anos e é um homem adulto :]`
            }else {
                resultado.innerHTML = `Você tem ${idade} anos e é um homem idoso :/`
            }
        }else if (genero[1].checked) {
            genero_escolhido = 'Mulher'
            if (idade >= 0 && idade <= 12){
                resultado.innerHTML = `Você tem ${idade} anos e é uma mini mulher ;)`
            }else if (idade >= 13 && idade <= 18){
                resultado.innerHTML = `Você tem ${idade} anos e é uma mulher jovem :)`
            }else if (idade >= 19 && idade <= 65) {
                resultado.innerHTML = `Você tem ${idade} anos e é uma mulher adulto :]`
            }else {
                resultado.innerHTML = `Você tem ${idade} anos e é uma mulher idoso :/`
            }
        }
    }
    
    
    
}
