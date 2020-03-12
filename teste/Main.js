class Main {


    testando() {

        var teste = new Um;

        console.log(teste.nome);
        console.log(teste.getIdade());
        console.log(teste.notas);

        // teste.nome = "Maria";
        // teste.getIdade() = 20;
        // teste.notas = [4, 5, 6];
        teste._nome = "maria";
        console.log(teste.nome);
        teste.nome("Guilherme");

        console.log(teste.nome);
        console.log(teste.getIdade());
        console.log(teste.notas);

    }
}
