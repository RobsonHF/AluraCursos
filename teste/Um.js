class Um {

    constructor () {
        this._nome = "joao";
        this._idade = 18;
        this._notas = [1,2,3];

    }

    get nome(){
        return this._nome;

    }

    getIdade(){
        return this._idade;
    }

    get notas (){
        return this._notas;
    }

    set nome(nome){
        this._nome = nome; 
    }
}

