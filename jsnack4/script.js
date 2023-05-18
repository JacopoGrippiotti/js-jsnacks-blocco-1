let number = parseInt(prompt('inserisci un numero di 4 cifre'));

let arrayNumberStringed = number.toString().split('')

let sumOfNumbers = 0

for(let i = 0; i < arrayNumberStringed.length ; i++) {

    let numberToAdd = parseInt(arrayNumberStringed[i])

    sumOfNumbers += numberToAdd;

}

console.log(sumOfNumbers)

