function mensagem (){
    const nome ='marcus'
   document.write('seja bem vindo '+nome);//cntratenar=juntar textos
}
function soma (num1,num2){
    document.writeln('soma de $(num1) e $(num2) é:$(num1 + num2)')
}
function mult(num1,num2){
    return num1 + num2
}

mensagem()
document.write('<br>')
soma(10,15)  
document.write('<br>');
document.write(mult(5,10))