```js
const EXPECTED_MINUTES_IN_OVEN = 40; 
const PREPARATION_MINUTES_PER_LAYER = 2;    

function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    return  preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

console.log(remainingMinutesInOven(5));
console.log(preparationTimeInMinutes(1));
console.log(totalTimeInMinutes(1, 5));
```