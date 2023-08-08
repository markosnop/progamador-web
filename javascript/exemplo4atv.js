function verificar() {
  const palavra = document.getElementById("palavra").value.toLowerCase();
  if (palavra == "") {
    document.getElementById("result").innerHTML =
      "não foi informada nenhuma palavra";
  } else {
    const inversa = palavra.split("").reverse().join("");

    if (palavra == inversa) {
      document.getElementById("result").innerHTML = "sim";
    } else {
      document.getElementById("result").innerHTML = "não";
    }
  }
}
function limpar() {
  document.getElementById("result").innerHTML = "";
}
