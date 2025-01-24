// canExecuteFastAttack();
// canSpy();
//---------------------------------------------------------------------------------------------------------------
let array = [];

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

    if (knightIsAwake === true){
        console.log("O cavaleiro está acordado, ataque rápido indisponível");
        return false;
    } else {
        console.log("O cavaleiro está dormindo, ataque rápido disponível");
        return true;
    }
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    knightIsAwake = array[Math.floor(Math.random() * array.length)];
    archerIsAwake = array[Math.floor(Math.random() * array.length)];
    prisonerIsAwake = array[Math.floor(Math.random() * array.length)];

    if(knightIsAwake === false && archerIsAwake === false && prisonerIsAwake === false) {
        console.log("A ação de espionagem não está disponivel");
        return false;
    } else if(knightIsAwake === true || archerIsAwake === true || prisonerIsAwake === true) {
        console.log("A ação de espionagem está disponivel");
        return true;
    }  
}


console.log();
