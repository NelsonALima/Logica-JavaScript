caminhoSeguir = prompt('Escolha [1] para: Front-End ou Escolha [2] para: Back-End \n');

if (caminhoSeguir == 1) {
    alert('Você escolheu Front-End!')
    caminhoFront = prompt('Você quer aprender: React digite [1] ou Vue digite [2]')
    if (caminhoFront == 1) {
        alert('Você escolheu React')
    } else {
        alert('Você escolheu Vue')
    }
   
} else {
    alert('Você escolheu Back-End|')
    caminhoBack = promt('Você quer aprender: C# digite [1] ou Java digite [2]')
    if (caminhoBack == 1) {
        alert('Você escolheu C#')
    } else {
        alert('Você escolheu Java')
    }
}

especializarFull = prompt('Você deseja se especializar? digite [1] ou se tornar Fullstack? digite [2]');

if (especializarFull == 1) {
    alert('Você escolheu especializar, faça todos os cursos oferecidos para area escolhida!')
    
    } else {
        alert('Você escolheu Fullstack, você tera que aprender sobre as 2 areas!')
    }

    let aprender = 'ok';

    while (aprender === 'ok') {
        alert('Tem mais alguma tecnologia que você gostaria de aprender?');
        let tecnologia = prompt('React[1] | Vue[2] | C#[3] | Java[4]');
    
        if (tecnologia === '1')
            alert('React: biblioteca para construção de interfaces visuais em JavaScript');
        else if (tecnologia === '2')
            alert('Vue: framework progressivo para a construção de interfaces de usuário');
        else if (tecnologia === '3')
            alert('C#: é uma linguagem orientada a objeto.');
        else if (tecnologia === '4')
            alert('Java: linguagem de programação amplamente usada para codificar aplicações Web');
        else {
            alert('Opção inválida. O programa será encerrado.');
            break;
        }
    }
       
