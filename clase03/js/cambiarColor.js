//ubicar elemento dentor del DOM
    var caja = document.getElementById('caja');
    var grados = 0;
//generar función
    function cambiarColor()
    {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        grados += 5;
        caja.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
        caja.style.transform = 'rotate('+grados+'deg)';
    }
//invocar función
    cambiarColor();

//actualizar función cada 300 milisegundos
    setInterval( cambiarColor, 300 );
