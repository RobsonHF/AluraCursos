class ContaCorrente extends Conta {

    update (taxa){
        this._saldo = taxa+this._saldo;
    }

}