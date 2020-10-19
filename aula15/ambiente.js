let num =[5, 8, 6, 7]

console.log(`Nosso vetor é o ${num}`)

num[4]= 9 // acrescenta ao elemento 4 o valor 9;

console.log(num)

num.push(2)

console.log(num) // comando push acrescenta o valor escolhido
                // como último elemento.

console.log (`O vetor tem ${num.length} elementos`)

num.sort()

for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}

for(let pos in num){
    console.log(`A posição ${pos} tem como element o ${num[pos]}`)
}

console.log(num.indexOf(7)) // pesquisa se o elemento faz parte do vetor
                            // se existir mostra a posição.