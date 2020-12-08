function carregar(){
    var msg    = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos= data.getMinutes()
    var titulo = document.getElementById("titulo")
  
   
    

    if(hora>=0 && hora <12){
        msg.innerHTML = `agora são ${hora}:${minutos} bom dia!!`
        img.src = 'imagens/manhã.png'
        titulo.innerHTML = 'enfim amanheceu !!'
        document.body.style.background = '#cfb66f'

    }else if(hora>=12 && hora <16){
        msg.innerHTML = `agora são ${hora} boa tarde!!`
        img.src = 'imagens/tarde.png'
        titulo.innerHTML = 'ha tarde finalmente chegou!'
        document.body.style.background = '#ffa707'

    }else{
        msg.innerHTML = `agora são ${hora}:${minutos} boa noite!!`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
        titulo.innerHTML = 'enfim chegou a noite!!'
    }
}