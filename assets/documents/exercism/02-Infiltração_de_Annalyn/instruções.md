## Instruções
Neste exercício, você implementará a lógica de missão para um novo jogo de RPG que um amigo está desenvolvendo. A personagem principal do jogo é Annalyn, uma garota corajosa com um cão de estimação feroz e leal. Infelizmente, um desastre acontece, pois sua melhor amiga foi sequestrada enquanto procurava frutas na floresta. Annalyn tentará encontrar e libertar sua melhor amiga, opcionalmente levando seu cão com ela nesta missão.

Depois de algum tempo seguindo a trilha de sua melhor amiga, ela encontra o acampamento em que sua melhor amiga está presa. Acontece que há dois sequestradores: um poderoso cavaleiro e um arqueiro astuto.

Após encontrar os sequestradores, Annalyn considera quais das seguintes ações ela pode realizar:
 - ***Ataque rápido*** : um ataque rápido pode ser feito se o cavaleiro estiver dormindo , pois leva tempo para ele vestir sua armadura, então ele ficará vulnerável.
- ***Espião*** : o grupo pode ser espionado se pelo menos um deles estiver acordado . Caso contrário, espionar é perda de tempo.
- ***Sinalizar prisioneiro*** : o prisioneiro pode ser sinalizado usando sons de pássaros se estiver acordado e o arqueiro estiver dormindo , pois os arqueiros são treinados em sinalização de pássaros para que possam interceptar a mensagem.
- ***Libertar prisioneiro*** : Annalyn pode tentar entrar furtivamente no acampamento para libertar o prisioneiro. Isso é algo arriscado de se fazer e só pode dar certo de uma das duas maneiras:
    - Se Annalyn tiver seu cachorro de estimação com ela, ela pode resgatar o prisioneiro se o arqueiro estiver dormindo . O cavaleiro está com medo do cachorro e o arqueiro não terá tempo de se preparar antes que Annalyn e o prisioneiro possam escapar.
    - Se Annalyn não tem seu cachorro, então ela e o prisioneiro devem ser muito furtivos! Annalyn pode libertar o prisioneiro se o prisioneiro estiver acordado e o cavaleiro e o arqueiro estiverem dormindo , mas se o prisioneiro estiver dormindo, eles não podem ser resgatados: o prisioneiro ficaria assustado com a aparição repentina de Annalyn e acordaria o cavaleiro e o arqueiro.

Você tem quatro tarefas: implementar a lógica para determinar se as ações acima estão disponíveis com base no estado dos três personagens encontrados na floresta e se o cachorro de estimação de Annalyn está presente ou não.

---

## 1. Verifique se a ação 'Ataque Rápido' é possível
Implemente uma função chamada canExecuteFastAttack que recebe um valor booleano que indica se o cavaleiro está acordado. Esta função retorna true se a ação 'Fast Attack' está disponível com base no estado do personagem. Caso contrário, retorna false:

```js 
const knightIsAwake = true;
canExecuteFastAttack(knightIsAwake);
// => false
```

## 2. Verifique se a ação 'Espiar' é possível
Implemente uma função chamada canSpy que recebe três valores booleanos, indicando se o cavaleiro, o arqueiro e o prisioneiro, respectivamente, estão acordados. A função retorna true se a ação 'Spy' está disponível com base no estado dos personagens. Caso contrário, retorna false:

```js
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
// => true
```

## 3. Verifique se a ação 'Sinalizar Prisioneiro' é possível
Implemente uma função chamada canSignalPrisoner que recebe dois valores booleanos, indicando se o arqueiro e o prisioneiro, respectivamente, estão acordados. A função retorna true se a ação 'Sinalizar Prisioneiro' está disponível com base no estado dos personagens. Caso contrário, retorna false:

```js
const archerIsAwake = false;
const prisonerIsAwake = true;
canSignalPrisoner(archerIsAwake, prisonerIsAwake);
// => true
```

## 4. Verifique se a ação 'Libertar Prisioneiro' é possível
Implemente uma função chamada canFreePrisoner que recebe quatro valores booleanos. Os três primeiros parâmetros indicam se o cavaleiro, o arqueiro e o prisioneiro, respectivamente, estão acordados. O último parâmetro indica se o cão de estimação de Annalyn está presente. A função retorna true se a ação 'Free Prisoner' está disponível com base no estado dos personagens e na presença do cão de estimação de Annalyn. Caso contrário, retorna false:

```js
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
// => false
```