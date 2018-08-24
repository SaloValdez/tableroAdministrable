$(document).ready(function(){



});


function clickBoton(){
  $("i").click(function(){  //barra movil
           // opacity:0;
        // $(".subMenu").slideToggle('fast');  //cerrar y abrir  menus para moviles
          $(".contenedor .cabecera .cab.cabeceraDerecho li > ul").css({'opacity':'100'});
  });

}
