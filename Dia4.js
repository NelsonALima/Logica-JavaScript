const numeroSecreto = 5;
let tentativas = 2;

while (tentativas > 0) {
   chute = parseInt(prompt('Chute um numero entre 0 a 10\n'));

if (chute == 5) {
   alert('Parabens você acertou!')
   break;
} else {
    tentativas--;
    if (tentativas > 0) {
        alert(`Tente outra vez. Você tem mais ${tentativas} tentativa(s).`);
   }
 }
}

if (tentativas === 0) {
   alert(`Você atingiu o numero maximo de tentativas. O número secreto era: ${numeroSecreto}`)

}