nome = prompt('Qual o seu nome?\n');
idade = prompt('Quantos anos você tem?\n');
linguagemProgramacao = prompt('Qual linguagem de programação você está estudando?\n');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`);

gostoEstudarLinguagem = prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO`)

if (gostoEstudarLinguagem == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso');
    
} else {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
    
}