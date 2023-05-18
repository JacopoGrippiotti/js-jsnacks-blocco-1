let arrayDaRiempire = []


for(let i = 0; i < 6 ; i++){

    let userNumber = parseInt(prompt('inserisci il numero che vuoi aggiungere'))

    if((userNumber % 2) !== 0){
        arrayVuoto[arrayVuoto.length] = userNumber
    }

    else{
        console.log('il numero non è stato aggiunto perchè era pari')
    }
}

console.log(arrayVuoto)