var idade = 11

if (idade >= 18 && idade <=60){

    console.log('Você é obrigado a votar')
} else{

    if ((idade>=16 && idade<=18) || (idade >=60)){

        console.log ('Voto Opcional')
    }
    else{
        console.log('Você ainda não tem idade para votar')
    }
}