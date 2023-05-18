
let sumNumber = 0;

for( let i = 0; i < 10; i++){
    let numberAsked = parseInt(prompt('inserisci il numero da sommare'));
    console.log(numberAsked);
    sumNumber += numberAsked;
}

console.log(sumNumber);