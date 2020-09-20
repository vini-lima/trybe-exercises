const estados = {
  'Selecione': '     ',
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}
const selecionaEstados = document.getElementById('estado');

for (const key in estados) {
  let estadoAtual = document.createElement('option');
  estadoAtual.innerText = estados[key];
  selecionaEstados.appendChild(estadoAtual);
}

const dataDigitada = document.getElementById('data');

dataDigitada.addEventListener('change', function() {
  if (dataDigitada.value[2] === '/' && dataDigitada.value[5] === '/' && dataDigitada.value.length === 10) {
    let dia = dataDigitada.value[0] + dataDigitada.value[1];
    let mes = dataDigitada.value[3] + dataDigitada.value[4];
    let ano = dataDigitada.value[6] + dataDigitada.value[7] + dataDigitada.value[8] + dataDigitada.value[9];
    if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 1890) {
    } else {
      alert('Campo data inválido!');    
    }
  } else {
    alert('Campo data inválido!');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let resumoForm = {
    Nome: `${document.querySelector('#nome').value}`,
    Email: `${document.querySelector('#email').value}`,
    CPF: `${document.querySelector('#cpf').value}`,
    Endereço: `${document.querySelector('#endereco').value}`,
    Cidade: `${document.querySelector('#cidade').value}`,
    Estado: `${document.querySelector('#estado').value}`,
    Tipo: `${document.querySelector('#tipo1').value}`,
    Resumo: `${document.querySelector('#resumo').value}`,
    Cargo: `${document.querySelector('#cargo').value}`,
    Descrição: `${document.querySelector('#descricao-cargo').value}`,
    Data: `${document.querySelector('#data').value}`
  }
});

const limpar = document.querySelector('.limpar');

limpar.addEventListener('click', function() {
  document.querySelector('#nome').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#cpf').value = '';
  document.querySelector('#endereco').value = '';
  document.querySelector('#cidade').value = '';
  document.querySelector('#estado').value = '';
  document.querySelector('#tipo1').value = '';
  document.querySelector('#resumo').value = '';
  document.querySelector('#cargo').value = '';
  document.querySelector('#descricao-cargo').value = '';
  document.querySelector('#data').value = '';
});
