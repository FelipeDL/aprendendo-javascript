function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length==0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!!')
    }
    else{
        var fsex = document.getElementsByName('radisex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src',"/aula12ex/imagens/hbebe.png")
            }

            else if(idade < 21){
                img.setAttribute('src',"/aula12ex/imagens/hjovem.png")
            }
            else if(idade < 50){
                img.setAttribute('src',"/aula12ex/imagens/hadulto.png")
            }

            else{
                img.setAttribute('src',"/aula12ex/imagens/hidoso.png")
            }



        } else if (fsex[1].checked){
            genero = 'Mulher'
                if(idade >=0 && idade <10){
                    img.setAttribute('src',"/aula12ex/imagens/mbebe.png")
                }

                else if(idade < 21){
                    img.setAttribute('src',"/aula12ex/imagens/mjovem.png")
                }
                else if(idade < 50){
                    img.setAttribute('src',"/aula12ex/imagens/madulta.png")
                }

                else{
                    img.setAttribute('src',"/aula12ex/imagens/midosa.png")
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }






}
