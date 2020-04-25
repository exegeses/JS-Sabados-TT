// ubicar elemento dentro del DOM

    var campoNombre = document.querySelector('input[name="nombre"]');
    var errorNombre = document.querySelector('#errorNombre');

    var campoEmail = document.querySelector('input[name="email"]');
    var errorEmail = document.querySelector('#errorEmail');


// generar función

    function validar()
    {
        //vaciar campos de error
        errorNombre.innerHTML = '';
        errorEmail.innerHTML = '';

        //chequear que haya algo en campo nombre
        if( campoNombre.value == '' | campoNombre.value == null ){

            errorNombre.innerHTML = '<img src="imagenes/error2.png"> Complete el campo Nombre';
            return false;
        }

        //chequear que haya algo en campo email
        if ( campoEmail.value == '' | campoEmail.value == null ){
            errorEmail.innerHTML = '<img src="imagenes/error2.png"> Complete el campo Email';
            return false;
        }

        return true;

    }
