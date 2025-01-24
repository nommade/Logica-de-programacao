let array = [];
let chance = [];

for(let i = 0; i <= 20; i++) { 
    let validacao = parseInt(Math.random()*10+1);
    function trueOrFalse() {
        if (validacao % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    array.push(trueOrFalse());
}

function canExecuteFastAttack(knightIsAwake) {
    knightIsAwake = array[Math.floor(Math.random() * array.length)];

    if (knightIsAwake == true){
        console.log("O cavaleiro está dormindo, ataque rápido disponível");
    } else {
        console.log("O cavaleiro está acordado, ataque rápido indisponível");
    }
}

for(let i = 0; i < 3; i++) {
    function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
        let characters = [knightIsAwake, archerIsAwake, prisonerIsAwake];
        return characters[length] = array[Math.floor(Math.random() * array.length)];
    }
    chance.push(canSpy());
}

canExecuteFastAttack();