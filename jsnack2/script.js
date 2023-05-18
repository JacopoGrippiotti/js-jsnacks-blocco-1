let festaGrandeGatsbyInvitati = ['Franceschetto, Monica Bellucci, Giovanni Rana, Pierino '];

let seiInvitato = false

let nomeUtente = prompt('inserisci il tuo nome e scopri se sei invitato alla festa ')

for(let i = 0; i < festaGrandeGatsbyInvitati.length; i++){

    console.log(festaGrandeGatsbyInvitati[i])
    
    if(nomeUtente == festaGrandeGatsbyInvitati[i]){

        seiInvitato = true
    }
    else if(nomeUtente !== festaGrandeGatsbyInvitati){

        seiInvitato = false
    }
}

if(seiInvitato == true){
    console.log('sei invitato alla festa sei un grande')
}

else{
    console.log('non sei invitato ma la vita è piena di sorprese e chissà un domani potresti esserlo')
}