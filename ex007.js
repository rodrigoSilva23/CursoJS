var agora = new Date()

var hora = 17

if(hora<12 && hora >=5){
    console.log(`são exatamente ${hora}! bom dia!!`)
}else if(hora<=16 && hora >=12){
    console.log(`são exatamente ${hora}! boa tarde!!`)
}else if(hora >16){
    console.log(`são exatamente ${hora}! boa noite!!`)
}else{ console.log(`são exatamente ${hora}! a madrugada vai ser longa`)}