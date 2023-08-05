function verificar() {
    const idade = parseFloat(document.getElementById("idade").value);
    const sexoS = document.getElementById("sim");
    const sexoN = document.getElementById("não");
let verificar;
// 5 == "5" -true; 5 == "5" - false
    if(idade >= 18 && sexoS.checked) {
        document.getElementById("result").innerHTML = "pode dirigir";
    }  
    else {
        document.getElementById("result").innerHTML = "não pode dirigir";
    }
    if(idade < 18 && sexoS.checked) {
        document.getElementById("result").innerHTML = "Você não vai com a minha cara?";
}
}
function limpar() {
    document.getElementById("result").innerHTML = "";
   
}