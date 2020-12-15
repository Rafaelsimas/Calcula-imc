const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && peso !== '' && altura !== '') {
    const valorImc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    if (valorImc < 18.5) {
      classificacao = 'você está abaixo do recomendado';
    }

    if (valorImc <= 25.0) {
      classificacao = 'você está na faixa recomendada';
    }

    if (valorImc > 30.0) {
      classificacao = 'você está acima do recomendado';
    }

    resultado.textContent = `Senhor(a) ${nome} o IMC calculado foi ${valorImc} ${classificacao}`;
  } else {
    resultado.textContent = 'preencha todos os campos';
  }
}
calcular.addEventListener('click', imc);
