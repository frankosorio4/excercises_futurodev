//Crie uma função que solicite para o usuário através do prompt de comando sua idade, e a partir da idade fornecida, exiba uma mensagem informando se ele é maior de idade ou não. Considere 18 anos como maior idade.
let idade = prompt("Digite sua idade:")

validacao(idade);

function validacao(n) {
    if ( !isNaN(Number(n)) ) {
        calculoIdade(n);        
    }
    else{
        alert("A entrada fornecida não é valida.")
    }
}

function calculoIdade(i) {
    if (i >= 18 && i<100) {
        alert('Você é MAIOR de idade.');
    }
    else if (i>0 && i < 18) {
        alert('Você é MENOR de idade.');
    }
    else {
        alert('A idade fornecida não é valida.');
    }
}