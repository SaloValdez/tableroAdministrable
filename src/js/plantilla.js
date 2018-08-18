$(document).ready(function(){



barMenuSlide();
slideSubmenu();





//==============menu====================
// linkSubmenu();
// // linkSubmenu();
// clickEnHtml();
//

// menuCuandoCambiaTamaño();
// desplegarSubmenus();
//==============menu====================

});

// function  clickEnHtml(){
//       $("html").click(function(){
//           // alert("hola");
//           $("nav ul li").removeClass("activado");
//           $("nav ul li ul").slideUp();  //ucultar submenus
//       })
//
//       $("nav").click(function(e){
//         e.stopPropagation();
//       });
// }

function barMenuSlide(){
  $(".barMenu").click(function(){  //barra movil
        $("nav > ul").slideToggle();  //cerrar y abrir  menus para moviles
        // $("nav  .menu-usuario .up").slideToggle();
        $("nav ul li ul").slideUp();  //ucultar submenus
        // $("nav > .menu-usuario ").css({'display':'block'}); //mostrar si o si el menu
  });
}


function  menuCuandoCambiaTamaño(){
  $(window).resize(function(){//si el tamaño de la venana cambia  (detecta vertical o horizontal)
        // if($(document).width() > 1040{  //si el tamaño del documento es mayor a 450
        //   // $("nav > ul").css({'display':'block'}); //mostrar si o si el menu
        //   $("nav ul li").removeClass("activado");
        //   $(".btn-menu").css({'display':'none'});
        //
        //   $("nav > ul").css({'display':'flex'});
        //   $("nav ul li ul").slideUp();  //ucultar submenus
        // }
        //
        // // if($(document).width() > 480  &&  $(document).width() < 1040){  //si el tamaño del documento es mayor a 450 y menor a 1040
        // //   // $("nav > ul").css({'display':'block'}); //mostrar si o si el menu
        // //   $("nav ul li").removeClass("activado");
        // //   $(".btn-menu").css({'display':'none'});
        // //
        // //   // $("nav > ul").css({'display':'flex'});
        // //   $("nav ul li ul").slideUp();  //ucultar submenus
        // // }
        //
        //
        if($(document).width() < 480){  //si el tamaño del documento es mayor a 450
          // $(".btn-menu").css({'display':'block'});
          // $("nav > ul").css({'display':'none'}); //mostrar si o si el menu
          // $("nav ul li ul").slideUp(); //ocultar los submenus
          // $("nav ul li").removeClass("activado"); //remover la clase "activado" de los active
        }
  });
}

function linkSubmenu(){
  // debido al "e.preventDefault()" de desplegarSubmenus();  no funciona los submenus
  $("nav ul li ul li a").click(function(){
      window.location.href = $(this).attr("href");  //captura el url y rederige a ese url
  });
}
function slideSubmenu(){
  $("nav ul li:has(ul)").click(function(e){
    //seleccionar elementos li que tengan ul "submenu"
      e.preventDefault(); //que no fucnine el href  #  o Url
      if ($(this).hasClass("activado")) {
        //si el elemnto  li tiene la clase "activado"
         $(this).removeClass("activado");
        // $(this).children("ul").slideUp();
      }else {
        $("nav ul li ul").slideUp();  //ucultar submenus
        $("nav .usuario li ul").slideUp();  //ucultar submenus
        $("nav ul li").removeClass('activado');
        $(this).addClass("activado");
        $(this).children("ul").slideDown();  // hijos ul de li  "mostarr"
      }
  });
}
