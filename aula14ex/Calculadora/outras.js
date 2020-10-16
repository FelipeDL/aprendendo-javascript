
        var n1 = Number(window.document.getElementById ('n1').value)

        n1.addEventListener('click',clicar)
        n1.addEventListener('mouseout', sair)
        n1.addEventListener('mouseenter', entrar)

        var n2 = window.document.getElementById ('n2')

        n2.addEventListener('click',clicar)
        n2.addEventListener('mouseout', sair)
        n2.addEventListener('mouseenter', entrar)

        var res = window.document.getElementById('resultado')

        
        
        
       function clicar() {

           

            n1.style.background= 'gray'
            n2.style.background= 'gray'
       }
       
       function sair() {

            n1.style.background= 'white'
            n2.style.background= 'white'

       }
       function entrar() {

            n1.style.background= 'gray'
            n2.style.background= 'gray'
       }