var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest(); //cria variável para que seja possível uma conexção

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //ṕega os dados (mas não envia)


    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {

            var resposta = xhr.responseText; //pega a resposta e bota na variável
            var pacientes = JSON.parse(resposta) //transforma a resposta em objeto do js

            adicionaPacienteNaTabela(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);

            });

        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");


        }
    });

    xhr.send(); // envia os dados requisitados

});