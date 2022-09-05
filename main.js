let calcular = true;

while (calcular != false) {
  let escolha = prompt("Qual opção você deseja: 'soma', 'subtração', 'multiplicação', 'divisão' ou deseja 'sair'?");

  switch (escolha) {
    case 'soma':
      soma();
      break;
    case 'subtração':
      subtracao();
      break;
    case 'multiplicação':
      multiplicacao();
      break;
    case 'divisao':
      divisao();
      break;
    case 'sair':
      sair();
      calcular = false;
      break;
    default:
      alert("Opção não encontrada!");
      escolha = prompt("Qual opção você deseja: 'soma', 'subtração', 'multiplicação', 'divisão' ou deseja 'sair'?");
  }
}

function soma(n1,n2) {
  let resultadoSoma = (n1 + n2);
  return resultadoSoma;
}
function subtracao(n1,n2) {
  let resultadoSubtracao = (n1 - n2);
  return resultadoSubtracao;
}

function multiplicacao(n1,n2) {
  let resultadoMultiplicacao = (n1 * n2);
  return resultadoMultiplicacao;
}

function divisao(n1,n2) {
  let resultadoDivisao = (n1 / n2);
  return resultadoDivisao;
}

function sair() {
  alert("Até a próxima!")
}