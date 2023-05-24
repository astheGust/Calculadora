let numeroAtual = "";
let operador = ""
function adicionarNumero(numero){
    
    numeroAtual += numero
    atualizarVisor();
};

function adicionarOperador(operador){
    numeroAnterior = numeroAtual
    numeroAtual += operador;
    document.getElementById("visorsuperior").innerText = numeroAtual
    numeroAtual = ""
    atualizarVisor();
    return op=operador
};

function atualizarVisor(){
 numeroAtual = numeroAtual.toString()
    document.getElementById("visorinferior").innerText = numeroAtual
};

function calcular(){
  if(op && numeroAnterior && numeroAtual){
    switch(op){
      case'/':numeroAtual = (numeroAnterior / numeroAtual)
        break
      case'*':numeroAtual = numeroAnterior * numeroAtual
        break
      case'-':numeroAtual = numeroAnterior - numeroAtual;
        break
      case'+':numeroAtual = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
        break
    };
  }else{document.getElementById("visorsuperior").innerText = ""}
  atualizarVisor();
   numeroAnterior = "";
   document.getElementById("visorsuperior").innerText = ""
};
