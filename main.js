let calcular = true;

while (calcular != false) {
  let escolha = prompt("Qual opção você deseja: 'soma', 'subtração', 'multiplicação', 'divisão' ou deseja 'sair'?");

  switch (escolha) {
    case "soma":
      soma();
      break;
    case 'subtração':
      subtracao();
      break;
    case 'multiplicação':
      multiplicacao();
      break;
    case 'divisão':
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

function soma() {
  let n1 = Math.floor(prompt("Primeiro número: "));
  let n2 = Math.floor(prompt("Segundo número: "));
  let resultadoSoma = (n1 + n2);
  alert(`O resultado foi ${resultadoSoma}`);
}
function subtracao() {
  let n1 = Math.floor(prompt("Primeiro número: "));
  let n2 = Math.floor(prompt("Segundo número: "));
  let resultadoSubtracao = (n1 - n2);
  alert(`O resultado foi ${resultadoSubtracao}`);
}

function multiplicacao() {
  let n1 = Math.floor(prompt("Primeiro número: "));
  let n2 = Math.floor(prompt("Segundo número: "));
  let resultadoMultiplicacao = (n1 * n2);
  alert(`O resultado foi ${resultadoMultiplicacao}`);
}

function divisao() {
  let n1 = Math.floor(prompt("Primeiro número: "));
  let n2 = Math.floor(prompt("Segundo número: "));
  let resultadoDivisao = (n1 / n2);
  alert(`O resultado foi ${resultadoDivisao}`);
}

function sair() {
  alert("Até a próxima!");
}