function verificar() {
    const numero = parseInt(document.getElementById("numero").value)

    if (numero < 0) {
        document.getElementById("result").innerHTML = "numero negativo"
    }
    else if (numero >= 1) {
        document.getElementById("result").innerHTML = "numero positivo"
    }
   
     else {
        document.getElementById("result").innerHTML = ""
    }
}
function limpar() {
    document.getElementById("result").innerHTML = "";

}