let custoProduto = 250;
let vendaProduto = 480;

if (custoProduto < 0 || vendaProduto < 0) {
    console.log('Erro: Valores Inválidos');
} else {
    let custoTotal = custoProduto*1.2;
    let lucro = vendaProduto - custoTotal;
    let lucroMil = lucro*1000;
    console.log('Seu lucro é de R$ ' + lucroMil);
}