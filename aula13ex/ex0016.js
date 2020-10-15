function Contar(){

    var ini = document.getElementById('tn1')
    var fim = document.getElementById('tn2')
    var passo = document.getElementById('tn3')

    var res = document.getElementById('res')


    if (ini.value.length ==0|| fim.value.length==0||passo.value.length==0){

        window.alert("Faltam dados")

        res.innerHTML = "Impossível contar"
    } else{
        res.innerHTML='Contando...<br/>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){

            window.alert('Passo inválido! Considerando passo = 1')

            p = 1
        }

        if(i < f){

            for(let c = i; c <= f; c += p ){

                res.innerHTML += `${c} \u{1F449} `

            }
        } else {
            
            for(let c = i; c >= f; c -= p ){

                res.innerHTML += `${c} \u{1F449} `

            }

            }
            res.innerHTML += `\u{1F3C1}`

        }

     
       
        
    }


    


