$(document).ready(function(){
slideFormCerrarSession();
clickEnHtml();
slidPanelAdminstracion();

$(".eliminarSession").slideUp();
$(".contenedor .cabecera .cab.cabeceraDerecho li > ul").slideUp();
});


function slideFormCerrarSession(){
  $(".nombreUsuario").click(function(){  //barra movil

        $(".eliminarSession").slideToggle();  //cerrar y abrir  menus para moviles
          $(".eliminarSession").css({'opacity':'100'});

          // opacity:0;
  });
}

function slidPanelAdminstracion(){
  $(".men").click(function(){  //barra movil
           // opacity:0;
        $(".subMenu").slideToggle('fast');  //cerrar y abrir  menus para moviles
          $(".contenedor .cabecera .cab.cabeceraDerecho li > ul").css({'opacity':'100'});
  });
}

function  clickEnHtml(){
      // $("html").click(function(){
      //      $(".eliminarSession").slideUp();
      // })
      // $(".nombreUsuario").click(function(e){
      //   e.stopPropagation();
      // });

}
