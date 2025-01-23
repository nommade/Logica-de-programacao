## Introdução
JavaScript é uma linguagem dinâmica que suporta estilos orientados a objetos, imperativos e declarativos (por exemplo, programação funcional).
<br>

## (Re-)Atribuição
Existem algumas maneiras principais de atribuir valores a nomes em JavaScript - usando variáveis ​​ou constantes. No Exercism, as variáveis ​​são sempre escritas em <u><b>camelCase</b></u>; as constantes são escritas em <u><b>SCREAMING_SNAKE_CASE</b></u> . Não há um guia oficial a seguir, e várias empresas e organizações têm vários guias de estilo. Sinta-se à vontade para escrever variáveis ​​da maneira que quiser . A vantagem de escrevê-las da maneira como os exercícios são preparados é que elas serão destacadas de forma diferente na interface da web e na maioria dos IDEs.

Variáveis ​​em JavaScript podem ser definidas usando as palavras-chave <u><b>const</b></u>, <u><b>let</b></u> ou <u><b>var</b></u>.

Uma variável pode referenciar valores diferentes ao longo de sua vida útil ao usar letor var. Por exemplo, <i>myFirstVariablepode</i> ser definida e redefinida muitas vezes usando o operador de atribuição =:

```js
let myFirstVariable = 1;
myFirstVariable = 'Some string';
myFirstVariable = new SomeComplexClass();
```

Em contraste com let e var, variáveis ​​que são definidas com const podem ser atribuídas apenas uma vez. Isso é usado para definir constantes em JavaScript.

```js
const MY_FIRST_CONSTANT = 10;

// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.
```

> Em um Exercício de Conceito posterior, a diferença entre atribuição/vinculação constante e valor constante é explorada e explicada.
<br>

## Declarações de função
Em JavaScript, unidades de funcionalidade são encapsuladas em funções , geralmente agrupando funções no mesmo arquivo se elas pertencem uma à outra. Essas funções podem receber parâmetros (argumentos) e podem retornar um valor usando a returnpalavra-chave. As funções são invocadas usando () sintaxe.

```js
function add(num1, num2) {
  return num1 + num2;
}

add(1, 3);
// => 4
```

> Em JavaScript, há muitas maneiras diferentes de declarar uma função. Essas outras maneiras parecem diferentes de usar a function palavra-chave. A faixa tenta introduzi-las gradualmente, mas se você já as conhece, sinta-se à vontade para usar qualquer uma delas. Na maioria dos casos, usar uma ou outra não é melhor ou pior.
<br>

## Expondo para outros arquivos
Para tornar um function, uma constante ou uma variável disponível em outros arquivos , eles precisam ser exportados usando a <u><b>export</u></b> palavra-chave . Outro arquivo pode então importá-los usando a <u><b>import</u></b> palavra-chave. Isso também é conhecido como sistema de módulos. Um ótimo exemplo é como todos os testes funcionam. Cada exercício tem pelo menos um arquivo, por exemplo lasagna.js, que contém a implementação. Além disso, há pelo menos um outro arquivo, por exemplo lasagna.spec.js, que contém os testes. Este arquivo importa as entidades públicas (ou seja, exportadas) para testar a implementação:

```js
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15
```