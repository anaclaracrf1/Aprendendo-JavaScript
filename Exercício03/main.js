  function Calcular() {
    var numero = document.getElementById('numero_desejado')
    var resultado = document.getElementById('resultado')   

    if (Number(numero.value.length) == 0){
         window.alert('Número inválido. Digite um número maior que 0')
    }else if (Number(numero.value) > 0) {
        resultado.innerHTML = ''; 

       for (var contador = 1; contador <= 10; contador++){
            
            resultado.innerHTML += contador + "x" + Number(numero.value) + "=" + Number(contador*numero.value) + "<br>"
        }
    }

}
