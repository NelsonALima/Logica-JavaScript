let listaCompras = [];
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];


while (true) {   
    let confirmacao = prompt('Deseja adicionar algum alimento na sua lista? Digite [1] ou digite [2] para finalizar)\n')

    if (confirmacao === '1') {
        let alimento = prompt('Qual alimento deseja adicionar?');
        let categoria = prompt('Qual a categoria desse alimento? Frutas | Laticinios | Congelados | Doces');
        listaCompras.push(alimento);

        
        if (categoria === 'Frutas') {
            frutas.push(alimento);
        } else if (categoria === 'Laticinios') {
            laticinios.push(alimento);
        } else if (categoria === 'Congelados') {
            congelados.push(alimento);
        } else if (categoria === 'Doces') {
            doces.push(alimento);
        } else {
            alert('Categoria inválida!');
        }
    }

    if (confirmacao === '2') {
        break;
    }
}

alert(`Lista de compras: ${listaCompras}  
Frutas: ${frutas}  
Laticinios: ${laticinios}  
Congelados: ${congelados}  
Doces: ${doces}`)