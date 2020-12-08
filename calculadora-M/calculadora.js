function  resultado(){
    var res = document.querySelector('#rexibir')
    var numero = document.querySelector('#txtn')
    var erro   = document.querySelector('#erro')
    var img    = document.querySelector('#img')


 if(numero.value.length == 0){
    erro.innerHTML = 'Por Favor informe um valor!'
    res.style.display ='none'; //desativa a tela de resultado
 
    img.style.display='none'

    

   
 }else{
    erro.innerHTML = ''//remove a frase de erro caso tenha valor
    res.style.display ='block';//ativa a tela caso tenha valor
    res.innerHTML =`resultado!<br>`
    img.style.display='block'

   
    for(c =0;c<=9;c++){//realiza a contagem e multiplica a mesma
        r = c * Number(numero.value)
        res.innerHTML +=`${numero.value} x ${c}=${r} <br>  `
        
        
    }
 }
}