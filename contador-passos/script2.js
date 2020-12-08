function calcular(){
    var inicio = document.querySelector('#txtinicio')
    var fim    = document.querySelector('#txtfim')
    var passos = document.querySelector('#txtpassos')
    var res    = document.getElementById('res')
    
    if(fim.value.length == 0 || passos.value.length == 0 || inicio.value.length == 0){
       res.innerHTML='[ERRO] dados incompleto!!'
        
    }else{ 
        res.innerHTML ='contando:'
   
      var i = Number(inicio.value)
      var f = Number(fim.value)
      var p = Number(passos.value)
     
     if(i<f){
         //contagem crescente
        for(c = i;c<=f;c+=p){
    res.innerHTML += `${c} \u{1F463}`
        }
    }else{
        //contagem decrescente
            for(c = i;c>=f;c-=p){
                res.innerHTML += `${c} \u{1F463}`
        }
     
    }
    }
    res.innerHTML += `\u{1F3C1}`
}