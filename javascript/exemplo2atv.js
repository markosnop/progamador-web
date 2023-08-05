function verificar() {
    const idade = parseInt(document.getElementById("idade").value)

    if (idade < 18) {
        document.getElementById("result").innerHTML = "não pode dirigir"
    }
    else if (idade >= 18 ) {
        document.getElementById("result").innerHTML = "pode dirigir"
    }
}
function limpar() {
    document.getElementById("result").innerHTML = "";

}