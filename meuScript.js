


let numero1 = parseInt(readlineSync.question('insira um numero (1): '));
let numero1 = parseInt(readlineSync.question('insira um numero (2): '));
numero1 = Number("numero1");
numero2 = Number("numero2");
if(numero1 > numero2) {
    console.log('O primeiro número é maior ');
} else if(numero1 === numero2) {
    console.log('Os números são iguais');
}
else{
    console.log('O segundo número é maior ');
}