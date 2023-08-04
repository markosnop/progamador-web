function pesoIdeal() {
    const altura = parseFloat(document.getElementById("altura").value);
    const sexo = document.getElementById("masc").value;

let pesoIdeal;

    if(sexo === "M") {// 5 == "5" -true; 5 == "5" - false
    pesoIdeal = 72.7*altura-58;
    } else {
        pesoIdeal = 62,1*altura-44.
    }

document.getElementById("result").innerHTML = pesoIdeal;
}
function limpar() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("status").innerHTML = "";
}