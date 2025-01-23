# Instruções
A namorada de Lucian está voltando para casa, e ele não preparou o jantar de aniversário deles!

Neste exercício, você escreverá um código para ajudar Lucian a preparar uma lasanha deliciosa de seu livro de receitas favorito. Você tem quatro tarefas relacionadas ao tempo gasto no cozimento da lasanha.

## 1. Defina o tempo de forno esperado em minutos
Defina a <u><b>EXPECTED_MINUTES_IN_OVEN</b></u> constante que representa quantos minutos a lasanha deve ficar no forno. Ela deve ser exportada. De acordo com o livro de receitas, o tempo de forno esperado em minutos é 40.

## 2. Calcule o tempo restante do forno em minutos
Implemente a função que toma como parâmetro <i>remainingMinutesInOven</i> os minutos reais que a lasanha ficou no forno e retorna quantos minutos a lasanha ainda tem que permanecer no forno, com base no tempo de forno esperado em minutos da tarefa anterior.

```js
remainingMinutesInOven(30);
// => 10
```

## 3. Calcule o tempo de preparação em minutos
Implemente a <i>preparationTimeInMinutes</i> função que recebe o número de camadas que você adicionou à lasanha como parâmetro e retorna quantos minutos você gastou preparando a lasanha, supondo que cada camada leve 2 minutos para ser preparada.

```js
preparationTimeInMinutes(2);
// => 4
```

## 4. Calcule o tempo total de trabalho em minutos
Implemente a <i>totalTimeInMinutes</i> função que recebe dois parâmetros : o <i>numberOfLayers</i> parâmetro é o número de camadas que você adicionou à lasanha, e o <i>actualMinutesInOven</i> parâmetro é o número de minutos que a lasanha ficou no forno. A função deve retornar quantos minutos no total você trabalhou cozinhando a lasanha, que é a soma do tempo de preparação em minutos, e o tempo em minutos que a lasanha passou no forno no momento.

```js
totalTimeInMinutes(3, 20);
// => 26
```