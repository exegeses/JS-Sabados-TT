//ubicar elemento dentro del DOM
    var verDado = document.getElementById('verDado');

//generar función
    function tirarDado()
    {
        var numeroAleatorio = Math.random();
            console.log( numeroAleatorio );
        var numeroMultiplicado = ( numeroAleatorio * 5 ) + 1;
            console.log( numeroMultiplicado );
        var numero = Math.round( numeroMultiplicado );
            console.log( numero );
        verDado.src = 'dados/dado'+numero+'.png';
    }

//llamar a función
    tirarDado();