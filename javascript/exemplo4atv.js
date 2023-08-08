function verificar() {
    const palavra = document.getElementById("palavra").value.toLowerCase()

    const invesa = palavra.split("").reverse().join("");

    if (palavra == invesa) {
        document.getElementById("result").innerHTML = "sim";
    } else {
        document.getElementById("result").innerHTML = "não";
    }
}
function limpar() {
    document.getElementById("result").innerHTML = "";
}
