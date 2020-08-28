let salarioBruto = 3000.00;
let salarioAliquota;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioAliquota = salarioBruto*(1-0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioAliquota = salarioBruto*(1-0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioAliquota = salarioBruto*(1-0.11);
} else {
    salarioAliquota = salarioBruto - 570.88;
}

if (salarioAliquota <= 1903.98) {
    salarioLiquido = salarioAliquota;
    console.log('O Salário Líquido é de R$ ' + salarioLiquido);
} else if (salarioAliquota >= 1903.99 && salarioAliquota <= 2826.65) {
    salarioLiquido = salarioAliquota - ((salarioAliquota*0.075) - 142.80);
    console.log('O Salário Líquido é de R$ ' + salarioLiquido);
} else if (salarioAliquota >= 2826.66 && salarioAliquota <= 3751.05) {
    salarioLiquido = salarioAliquota - ((salarioAliquota*0.15) - 354.80);
    console.log('O Salário Líquido é de R$ ' + salarioLiquido);
} else if (salarioAliquota >= 3751.06 && salarioAliquota <= 4664.68) {
    salarioLiquido = salarioAliquota - ((salarioAliquota*0.225) - 636.13);
    console.log('O Salário Líquido é de R$ ' + salarioLiquido);
} else {
    salarioLiquido = salarioAliquota - ((salarioAliquota*0.275) - 869.36);
    console.log('O Salário Líquido é de R$ ' + salarioLiquido);
}