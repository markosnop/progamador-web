function verificar() {
    const idade = parseInt(document.getElementById("idade").value)

    if (idade < 16) {
        document.getElementById("result").innerHTML = "não eleitor"
    }
    else if (idade >= 18 && idade <= 65) {
        document.getElementById("result").innerHTML = "eleitor obrigatorio"
    }
    else if (idade < 18 || idade > 65) {
        document.getElementById("result").innerHTML = "eleitor facultativo"
    } else {
        document.getElementById("result").innerHTML = ""
    }
}
function limpar() {
    document.getElementById("result").innerHTML = "";

}