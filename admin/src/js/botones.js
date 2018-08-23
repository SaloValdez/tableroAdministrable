$(document).ready(function(){



});


function clickBoton(){
  $("i").click(function(){  //barra movil
           // opacity:0;
        // $(".subMenu").slideToggle('fast');  //cerrar y abrir  menus para moviles
          $(".contenedor .cabecera .cab.cabeceraDerecho li > ul").css({'opacity':'100'});
  });
}



function  clickEnHtml(){
      $("html").click(function(){
          // alert("hola");
          $("nav ul li").removeClass("activado");
          $("nav ul li ul").slideUp();  //ucultar submenus

          $(".contenedorAdmin .headerTablet > ul li").removeClass("activado");
          $(".contenedorAdmin .headerTablet > ul li ul").slideUp();  //ucultar submenus
      })
      $("nav").click(function(e){
        e.stopPropagation();
      });
      $(".contenedorAdmin .headerTablet").click(function(e){
        e.stopPropagation();
      });
}
