function Calcular(){

    let num1 = document.getElementById('txn1')

    let res = document.getElementById('res')

    if (num1.value.length ==0){

        window.alert("Faltam dados")
    
    }else{
        let i = Number(num1.value)

        res.innerHTML= ' '
        for(let c = 1; c <=10; c++){

            let item = document.createElement('option')
            item.text = `${i} x  ${c} = ${i*c} `
            item.value = `res${c}`
            
            res.appendChild(item)

        }


    }




}