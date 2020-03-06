var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);  //EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM
  
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        // var mensagemErro = document.querySelector("#mensagem-erro");
        // mensagemErro.textContent = erros;
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.classList.add("mensagem-erro");
        li.textContent = erro;
        ul.appendChild(li);
       
    });
}


function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;

}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
  
    return td;
}

function validaPaciente(paciente) {

    var erros = [];
    var mensagens = document.querySelector("#mensagens-erro");
        mensagens.textContent = "";

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser nulo");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push(" A altura é inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser nulo");
    }

    if(paciente.altura.length == 0){
        erros.push("A algura não pode ser nulo");
    }
    
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser nulo");
    }
        
    // if (validaPeso(paciente.peso) && validaAltura(paciente.altura)){
        
    // }

    return erros;
}


