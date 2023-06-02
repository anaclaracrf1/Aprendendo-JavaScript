var data = new Date()
var ano = data.getFullYear()
var ano_digitado = document.getElementById('ano_de_nascimento')
var resultado = document.getElementById('resultado')

function Verificar() {

    if (ano_digitado.value > ano || ano_digitado.value == 0){
        window.alert('Ano inválido, tente novamente...')
    }

}
