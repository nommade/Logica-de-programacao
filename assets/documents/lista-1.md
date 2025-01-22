# Lista de Exercicios de lógica de programação
<br>

## Variáveis e Funções
### Exercício 1.1
Faça um programa que exiba 3 números na tela.

```js
var n = [1,2,3];
console.log (n);
```
---

### Exercício 1.2
Faça um programa que leia 3 números e exiba-os na tela.

```js
let array = [];
let contador = 0;

while (contador < 3) {
    let menssage = prompt("digite um numero");
    array.push(menssage);
    contador ++;
}

console.log(array);
```
---

### Exercício 1.3
Faça um programa que leia 3 números, some-os e exiba a média entre eles.

```js
let array = [];
let contador = 0;

while (contador < 3) {
    let menssage = parseInt(prompt());
    array.push(menssage);
    contador++;
}

let calc = (array[0] + array[1] + array[2]) / array.length;
console.log(calc);
```
---

### Exercício 1.4
Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.

```js
let temperatura = parseInt(prompt());
let celsius = ( ( temperatura - 32 ) * 5 ) / 9
console.log(celsius);
```
---
<br>

## Condicionais (if, else)
### Exercício 2.1
Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.

```js
let array = [];
let contador = 0;

while (contador < 2) {
    let menssage = parseInt(prompt());
    array.push(menssage);
    contador++
}

let calc = array[0] + array[1];

if (calc >= 100) {
    document.write(`O numero é: ${calc}`);
}
```
---

### Exercício 2.2
Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

```js
function personagemMorreu (dano, saude) {
    const multiplicador = 100;
    let golpe = parseInt(prompt("valor do ataque."));
    let vitalidade = parseInt(Math.random()*multiplicador+1);

    dano = golpe;
    saude = vitalidade;

    if (dano >= saude) {
        alert(`1 - Seu personagem não resistiu ao ataque. Vida atual ${saude}`);
    } else {
        alert(`0 - Seu personagem resistiu ao ataque. Vida atual: ${saude}`);
    }

    console.log(golpe);
    console.log(vitalidade);
}

personagemMorreu();
```
---

### Exercício 2.3
Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.

```js
function limitaPosicao (posicao) {
    posicao = parseInt(prompt("Qual o valor de sua posição?"));   
    let novaPosicao = parseInt(Math.random()*100+1);
    
    if (posicao >= 0 && posicao <= 100) {
        alert(`Sua posição é: ${posicao}`);
    } else {
            alert(`Sua posição passou a ser ${novaPosicao}`);
    }
    
    console.log(posicao);
}

limitaPosicao ();
```
---
<br>

## 3. Lógica
### Exercício 3.1
Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.

```js
function verificaParOuImpar(numero) {
    numero = parseInt(prompt());
    
    if (numero % 2 === 0) {
        alert("o numero é par");
    } else {
        alert("o numero é impar");
    }
}   

verificaParOuImpar();
```
---

### Exercício 3.2
Faça um programa que leia três números e exiba o maior entre eles.

```js
function encontraMaiorNumero(num1, num2, num3) {
    num1 = parseInt(prompt());
    num2 = parseInt(prompt());
    num3 = parseInt(prompt());

    if(num1 > num2 && num1 > num3) {
        alert(`O numero ${num1} é o maior numero`);
    } else if(num3 > num2 && num3 > num1) {
        alert(`O numero ${num3} é o maior numero`);
    } else if(num2 > num3 && num2 > num1) {
        alert(`O numero ${num2} é o maior numero`);
    }

    console.log(num1, num2, num3);
}

encontraMaiorNumero();
```
---

### Exercício 3.3
Faça um programa que leia um número e determine se ele é positivo, negativo ou zero.

```js
function verificaNumero(numero) {
    numero = parseInt(prompt());

    if (numero === 0) {
        console.log("O numero é 0");
    } else {
        if (numero < 0) {
            console.log("O numero é negativo");
        } else {
            console.log("O numero é positivo, maior do que 0");
        }
    }
}

verificaNumero();
```
---

## 4. Loop
### Exercício 4.1
Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.

```js
let contador = 1;
let numero = parseInt(prompt());

while (contador <= 10) {
    let conta = numero * contador;
    document.write(`${conta}`);
    contador++;
}
```
---

## 5. Vetores (array)
### Exercício 5.1
Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.

```js
let array = [];
let contador = 1;

while (contador <= 10) {
    let numero = parseInt(prompt());
    array.push(numero);
    contador++;
}

array.sort(function (a,b) {
    return a - b;
});

console.log(array);
```
---