function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

function subtrairNumeros(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicarNumeros(numero1, numero2) {
    return numero1 * numero2;
}

function dividirNumeros(numero1, numero2) {
    if (numero2 === 0) {
        return "Não é possível dividir por 0";
    } else {
        return numero1 / numero2;
    }
}

function calcular() {
    while (true) {
        let operador = prompt('Escolha + para soma, - para subtração, * para multiplicação, / para divisão, ou "sair" para sair: ');

        if (operador === '+') {
            let numero1 = parseFloat(prompt('Digite o primeiro número: '));
            let numero2 = parseFloat(prompt('Digite o segundo número: '));
            alert("Soma: " + somarNumeros(numero1, numero2));
        } else if (operador === '-') {
            let numero1 = parseFloat(prompt('Digite o primeiro número: '));
            let numero2 = parseFloat(prompt('Digite o segundo número: '));
            alert("Subtração: " + subtrairNumeros(numero1, numero2));
        } else if (operador === '*') {
            let numero1 = parseFloat(prompt('Digite o primeiro número: '));
            let numero2 = parseFloat(prompt('Digite o segundo número: '));
            alert("Multiplicação: " + multiplicarNumeros(numero1, numero2));
        } else if (operador === '/') {
            let numero1 = parseFloat(prompt('Digite o primeiro número: '));
            let numero2 = parseFloat(prompt('Digite o segundo número: '));
            alert("Divisão: " + dividirNumeros(numero1, numero2));
        } else if (operador.toLowerCase() === 'sair') {
            alert("Até a próxima!");
            break;
        } else {
            alert("Operador inválido.");
        }
    }
}

calcular();
