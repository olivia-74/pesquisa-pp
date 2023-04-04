//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
    let tarefas = []
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    for(; i < 3 ;){
        tarefas.push(prompt("Insira a tarefa").split('.'));
    }
    
//c) Imprima o array no console
    console.log(tarefas)
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    let indice = prompt("Digite o índice de uma tarefa já realizada")

//e) Remova da lista o item de índice que o usuário escolheu.
    tarefas = tarefas.splice(indice,  1)
    
//f) Imprima o array no console
    console.log(tarefas)

// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.
// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).
    function letraA(nome, idade, endereco, profissao){
        let parametros = input.split('\n');
        nome = push(parametros[0]);
        idade = push(parametros[1]);
        endereco = push(parametros[2]);
        profissao = push(parametros[3]);
        return parametros
    }
    console.log('Eu sou' + nome + ', tenho' + idade + ', moro em' + endereco + ' e sou' + profissao)


// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    let p1 = prompt("Digite o 1° parâmetro");
    let p2 = prompt("Digite o 2° parâmetro");

    function letraB(p1, p2){
        const soma = p1 + p2
        return soma
    }
    console.log(calculoSoma(p1, p2))


// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    let n1 = prompt();
    let n2 = prompt();

    function letraC(n1, n2){
        if (Boolean(n1 >= n2) = true){
            console.log('É maior ou igual (>=)')
        }
   }


// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    let N1 = prompt();

    function letraD(N1){
        if (Boolean(N1 % 2 == 0) = true){
            console.log('É par')
        }
}


// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    let string = ("");

    function letraE(string){
        console.log(string.length, string.toUpperCase());
    }

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b
    let x = prompt();
    let y = prompt();

    function SOMA(x,y){
        const soma = x + y
        return soma
    }

    function SUBTRACAO(x,y){
        const subtracao = x - y
        return subtracao
    }

    function MULTIPLICACAO(x,y){
        const multiplicacao = x * y
        return multiplicacao
    }

    function DIVISAO(x,y){
        const divisao = x / y
        return divisao
    }

    console.log(SOMA(x,y), SUBTRACAO(x,y), MULTIPLICACAO(x,y), DIVISAO(x,y))

