var dados = {
    nome: 'Robson',
    sobrenome: 'Ferreira',
    idade: 25,
    filme: 'Diario de uma paixão',
    nomeCompleto() {
        console.log(`O nome completo é ${this.nome} ${this.sobrenome}.`)
    }
}

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

console.log(carro.preco);

carro.preco = 3000;

console.log(carro.preco);


console.log('exercícios tudo é objeto');



var nome = 'robson';

console.log(nome.length);
console.log(nome.replace('son', 'sona'));
console.log(nome.bold);

console.log("exercícios de loop");

brasilGanhou = [1959, 1962, 1970, 1994, 2002];

brasilGanhou.forEach(function (item) {
    console.log(`Brasil ganhou a copa de ${item}.`);
});

var frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia'];

for (i=0; i<=frutas.length; i++){
    console.log(frutas[i]);
    if (frutas[i] === 'pera'){
        break;
    }
}

var ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta);


