$(document).ready(function(){
//==============menu====================
    barMenuSlide();
    slideSubmenu();
    slideSubmenuUsuarioTablet();
    menuCuandoCambiaTamaño();
    clickEnHtml();
    linkSubmenu();
    linkSubmenuTabletUsuario();
//==============menu====================


//===============form========================
vistaPreviaImagenInputFile();

//===============form==========================
});

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

function barMenuSlide(){
  $(".barMenu").click(function(){  //barra movil
        $("nav > ul").slideToggle();  //cerrar y abrir  menus para moviles
        // $("nav  .menu-usuario .up").slideToggle();
        $("nav ul li ul").slideUp();  //ucultar submenus
        // $("nav > .menu-usuario ").css({'display':'block'}); //mostrar si o si el menu
  });
}

function slideUsuarioTablet(){
  $(".headerTablet ul li:has(ul)").click(function(e){
    //seleccionar elementos li que tengan ul "submenu"
      e.preventDefault(); //que no fucnine el href  #  o Url
      if ($(this).hasClass("activado")) {
        //si el elemnto  li tiene la clase "activado"
         $(this).removeClass("activado");
        // $(this).children("ul").slideUp();
      }else {
        $(".headerTablet ul li ul").slideUp();  //ucultar submenus
        $(".headerTablet .usuario li ul").slideUp();  //ucultar submenus
        $(".headerTablet ul li").removeClass('activado');
        $(this).addClass("activado");
        $(this).children("ul").slideDown();  // hijos ul de li  "mostarr"
      }
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
          cerrarBarMenu();

          // $(".btn-menu").css({'display':'block'});
          // $("nav > ul").css({'display':'none'}); //mostrar si o si el menu
          // $("nav ul li ul").slideUp(); //ocultar los submenus
          // $("nav ul li").removeClass("activado"); //remover la clase "activado" de los active
        }
  });
}

function linkSubmenu(){
  // debido al "e.preventDefault()" de desplegarSubmenus();  no funciona los submenus
  $(".contenedor nav > ul li ul li a").click(function(){
      window.location.href = $(this).attr("href");  //captura el url y rederige a ese url
  });
}
function linkSubmenuTabletUsuario(){
  // debido al "e.preventDefault()" de desplegarSubmenus();  no funciona los submenus
  $(".contenedorAdmin .headerTablet > ul li ul li a").click(function(){
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
         $("nav ul li ul").slideUp();  //ucultar submenus
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

function slideSubmenuUsuarioTablet(){
  $(".contenedor .contenedorAdmin .headerTablet ul li:has(ul)").click(function(e){
    //seleccionar elementos li que tengan ul "submenu"
      e.preventDefault(); //que no fucnine el href  #  o Url
      if ($(this).hasClass("activado")) {
        //si el elemnto  li tiene la clase "activado"
         $(this).removeClass("activado");
         $(".contenedor .contenedorAdmin .headerTablet ul li ul").slideUp();  //ucultar submenus
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


// ===== INICIO SUBMENU  --CORRIGIENDO ERROR
    var mediumBp = matchMedia('(max-width: 480px)');
    var changeSize = function changeSize(mql) {
          if(mql.matches){
            var menu = document.querySelector("nav > ul")
            menu.style.display= "none"
            var elemento = document.querySelector("nav > .menuUsuario")
            elemento.style.display= "none"
          }else {
            // var elemento = document.querySelector(".contenedor .ejemplo > ul > li");
            // elemento.style.display = "block"
            // var menu = document.querySelector("nav > ul")
            // menu.style.display= "block"
          }
    };
    mediumBp.addListener(changeSize);
    changeSize(mediumBp);
// ===== FIN  SUBMENU  --CORRIGIENDO ERROR



// TODO: INICIO input file
// (function() {
//
//   'use strict';
//
//   $('.input-file').each(function() {
//           var $input = $(this),
//               $label = $input.next('.js-labelFile'),
//               labelVal = $label.html();
//
//          $input.on('change', function(element) {
//             var fileName = '';
//             if (element.target.value) fileName = element.target.value.split('\\').pop();
//             fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
//          });
//   });
//
// })();

function vistaPreviaImagenInputFile(){
      $('#file').change(function(){
        // vistaPreviaImagen(this);
        if (this.files  && this.files[0]) {
            var  reader  = new FileReader(); //clase que permite leer archivos
            reader.onload = function(e){  // e -> evento que permite acceder a la ruta de la imagen
                $('#mostrarImagen').html("<img src='"+e.target.result+"' class='img-thumbnail'/>");
            }
            reader.readAsDataURL(this.files[0]);
        }
      });
}

// FIN  input file
