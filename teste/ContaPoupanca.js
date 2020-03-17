class ContaPoupanca extends Conta {

    update (taxa){
        this._saldo = this._saldo + taxa * 2;
    }
    
}


