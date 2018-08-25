$(document).ready(function(){

clicknuevo();
clickCancelar();

clickImprimir();

// if ($("#btnImprimir").hasClass("disabled")) {
//       alert("Tiene la clase DISABLE");
// }else {
//       alert("NO TIENE LA CLASE ");
// }
$("#btnBuscar").click(function(){  //barra movil

  $("#btnImprimir").addClass("insertar"); //???????????????
$("#btnImprimir").removeClass("actualizar");
});

});

//
 function clicknuevo(){
  $("#btnNuevo").click(function(){  //barra movil
//            // opacity:0;
//         // $(".subMenu").slideToggle('fast');  //cerrar y abrir  menus para moviles
//           // $(".contenedor .cabecera .cab.cabeceraDerecho li > ul").css({'opacity':'100'});

      $("#btnGuardar").removeClass("disabled");
      $("#btnCancelar").removeClass("disabled");
      $("#btnVer").addClass("disabled");
      $("#btnImprimir").addClass("actualizar"); //???????????????
$("#btnImprimir").removeClass("insertar");

 });
//
}


function clickCancelar(){
  $("#btnCancelar").click(function(){
      $("#btnGuardar").addClass("disabled");
      $("#btnVer").removeClass("disabled");
      $("#btnCancelar").addClass("disabled");
 });

}

function clickImprimir(){
  $("#btnImprimir").click(function(){
    if ($("#btnImprimir").hasClass("actualizar")) {
          alert("Actualizar Registro");
    }else if ($("#btnImprimir").hasClass("insertar")) {
        alert("Insertar Registro");
    } else{
          alert("Error ");
    }

 });

}
