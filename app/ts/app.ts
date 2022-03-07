// let contaController = new ContaController();
//
// contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

let listaDeClientes = new Clientes();

let clienteMaria = new Cliente("Maria dos Anjos", "123.456.789-00", new Conta("146", 500));
let clienteJoao = new Cliente("João Mendes", "452.158.725-85", new Conta("852", 945));
let clienteAna = new Cliente("Ana Medeiros", "889.174.265-45", new Conta("412", 241));
let clientePedro = new Cliente("Pedro Oliveira", "445.126.894-33", new Conta("225", 184));

listaDeClientes.inserir(clienteMaria);
listaDeClientes.inserir(clienteJoao);
listaDeClientes.inserir(clienteAna);
listaDeClientes.inserir(clientePedro);

console.log(listaDeClientes.listar());
listaDeClientes.remover("445.126.894-33");
console.log(listaDeClientes.listar());

console.log(listaDeClientes.pesquisar("123.456.789-00"));

let clienteController = new ClienteController();
clienteController.listar()

let contaClienteEspecial1 = new Conta("258", 785);
let clienteEspecial1 = new ClienteEspecial("Alfredo", "999.452.178-33", contaClienteEspecial1);

let contaCliente = new Conta("951", 1230);
let clientePaulo = new Cliente("Paulo", "885.126.745-55", contaCliente);

clienteEspecial1.inserirDependente(clientePaulo);
console.log(clienteEspecial1.listarDependente());