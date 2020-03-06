// alert("Olá mundo");
// console.log("Olá mundoo");
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    var tdImc = paciente.querySelector(".info-imc")

    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");

    }

    if (!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);

        tdImc.textContent = imc;
    }

    function calculaImc(peso, altura) {
        var imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    console.log(paciente); //tr
    // console.log(tdPeso); // td que tem o peso
    // console.log(peso); // peso
    // console.log(tdAltura); // td que tem o peso
    // console.log(altura); // Altura
    // console.log(tdImc);
    // console.log(imc);

}

titulo.addEventListener("click", function () {
    console.log("olha só, posso chamar uma função anonima")
});

function mostraMensagem() {
    console.log("Olá, eu fui clicado!");
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 300) {

        return true;
    }else{
    return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}