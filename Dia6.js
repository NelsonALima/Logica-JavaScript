let listaCompras = [];
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (true) {   
    let confirmacao = prompt('Deseja adicionar algum alimento na sua lista? Digite [1], digite [2] para finalizar ou digite [3] para remover um item da lista.\n');

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

    if (confirmacao === '3') {
        if (listaCompras.length === 0) {
            alert('A lista de compras está vazia. Não há itens para remover.');
        } else {
            let itemRemover = prompt(`Qual item você deseja remover da lista de compras? Itens na lista: ${listaCompras}`);
            let index = listaCompras.indexOf(itemRemover);
            if (index !== -1) {
                listaCompras.splice(index, 1);
                // Remover o item da categoria correspondente
                if (frutas.includes(itemRemover)) {
                    frutas.splice(frutas.indexOf(itemRemover), 1);
                } else if (laticinios.includes(itemRemover)) {
                    laticinios.splice(laticinios.indexOf(itemRemover), 1);
                } else if (congelados.includes(itemRemover)) {
                    congelados.splice(congelados.indexOf(itemRemover), 1);
                } else if (doces.includes(itemRemover)) {
                    doces.splice(doces.indexOf(itemRemover), 1);
                }
                alert(`"${itemRemover}" foi removido da lista de compras.`);
            } else {
                alert('Não foi possível encontrar o item dentro da lista!');
            }
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
Doces: ${doces}`);
