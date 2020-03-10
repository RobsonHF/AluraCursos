class Negociacao {
    constructor(){
        this._data = new Date(data.getTime());
        this._quantidade = 1;
        this._valor = 0.0;
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

}