class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
    inserirDependente(dependente) {
        this._dependentes.push(dependente);
    }
    listarDependente() {
        return this._dependentes;
    }
}
