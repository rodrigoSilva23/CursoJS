function verificador(){
var data = new Date()
var ano  = data.getFullYear()
var fano = document.getElementById('txtano')
var res  = document.querySelector('p#res')
var anosp = 'anos'
var img = document.createElement('img')




if(fano.value.length == 0 || Number(fano.value)> ano){
   window.alert('[erro] informe um valor correto!')
}else{
   var fsex   = document.getElementsByName('radsex')
   var idade  = ano - Number(fano.value)
   var genero = ''
      if(fsex[1].checked ){
         var genero = 'Homem'
         if(idade>=0 && idade <=10){
            var genero ='menininho'           
            img.setAttribute('src','imagens/bebeM.png')
            if(idade == 1){
             var anosp = 'ano'
            }
            if( idade ==0){
               var idade = ''
               var anosp = 'apenas  meses '
            } 

         }else if(idade <21){
            var genero ='jovem Rapaz'           
            img.setAttribute('src','imagens/jovemM.png')
            

         }else if(idade<50){
            var genero ='Homem'
            img.setAttribute('src','imagens/homem.png')
         }else {
            var genero ='idoso'
            img.setAttribute('src','imagens/senhor.png')
         }
      
    } else if(fsex[0].checked){
         var genero = 'mulher'
         if(idade>=0 && idade<=10){
            var genero ='menininha'           
            img.setAttribute('src','imagens/bebe.png')
            if(idade == 1){
             var anosp = 'ano'
            }
            if( idade ==0){
               var idade = ''
               var anosp = 'apenas  meses '
            } 

            }else if(idade <21){
            var genero ='jovem Moça'           
            img.setAttribute('src','imagens/jovem.png')
            

         }else if(idade<50){
            var genero ='mulher'
            img.setAttribute('src','imagens/mulher.png')
         }else {
            var genero ='idosa '
            img.setAttribute('src','imagens/foto-idoso-f.png')
            
         }
    }  
    res.innerHTML = `detectamos ${genero}   de ${idade}  ${anosp} de idade <br>`
   
      res.appendChild(img)
   
   
    
   }
   
   
}

 