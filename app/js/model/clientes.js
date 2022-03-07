class Clientes {
    constructor() {
        this._clientes = new Array();
        let clienteMaria = new Cliente("Maria dos Anjos", "123.456.789-00", new Conta("146", 500));
        let clienteJoao = new Cliente("João Mendes", "452.158.725-85", new Conta("852", 945));
        let clienteAna = new Cliente("Ana Medeiros", "889.174.265-45", new Conta("412", 241));
        let clientePedro = new Cliente("Pedro Oliveira", "445.126.894-33", new Conta("225", 184));
        this._clientes.push(clienteMaria, clienteAna, clienteJoao, clientePedro);
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        this._clientes = this._clientes.filter(cliente => cliente.cpf != cpf);
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
}
