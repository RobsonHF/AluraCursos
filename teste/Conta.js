class Conta {
    constructor (saldo) {
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    update (taxa){
        throw new Error ('necessita de uma classe filha');
    }
}