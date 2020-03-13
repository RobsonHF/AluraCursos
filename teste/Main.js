class Main {


    testando() {

        var numeros = [1,2,3,4]
        // numeros.reduce(function(total,num) { // passar isso para arrow function
        //     return total * num;
        // }, 1);

        numeros = numeros.reduce((total, num) => total * num, 1);
        console.log(numeros);
        

        // var teste = new Um;

        // console.log(teste.nome);
        // console.log(teste.getIdade());
        // console.log(teste.notas);

        // // teste.nome = "Maria";
        // // teste.getIdade() = 20;
        // // teste.notas = [4, 5, 6];
        // teste._nome = "maria";
        // console.log(teste.nome);
        // teste.nome("Guilherme");

        // console.log(teste.nome);
        // console.log(teste.getIdade());
        // console.log(teste.notas);

    }
}
