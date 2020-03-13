class Shark {

    constructor (nome) {
        this._nome = nome;
    }

    get nome(){
        return this._nome;

    }

    set nome(nome){
        this._nome = nome; 
    }
}
