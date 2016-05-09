setTimeout(function(){
  var inicio = 0;
  var timeout = 0;

  function iniciar(elemento)
  {
    if(timeout == 0)
    {
      // Obtenemos el valor actual
      inicio = vuelta = new Date().getTime();

      // iniciamos el proceso
      funcionando();
    }else{
      // detemer el cronometro
      clearTimeout(timeout);
      timeout = 0;
    }

  }

  function funcionando()
  {
    // obteneos la fecha actual
    var actual = new Date().getTime();

    // obtenemos la diferencia entre la fecha actual y la de inicio
    var diff = new Date(actual-inicio); 

    // mostramos la diferencia entre la fecha actual y la inicial
    var result = LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds());

    document.getElementById('crono').innerHTML = result;

    // Indicamos que se ejecute esta función nuevamente dentro de 1 segundo
    timeout = setTimeout("funcionando()",1000);
  }

  function LeadingZero(Time) { /* Funcion que pone un 0 delante de un valor si es necesario */

    return (Time < 10) ? "0" + Time : + Time;

  }
}, 5000)
  