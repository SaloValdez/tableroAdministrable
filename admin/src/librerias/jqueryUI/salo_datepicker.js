$(document).ready(function(){
	$.datepicker.regional['es'] = {
	 closeText: 'Cerrar',
	 prevText: '< Ant',
	 nextText: 'Sig >',
	 currentText: 'Hoy',
	 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	 monthNamesShort: ['Enero','Febrero','Marzo','Abril', 'Mayo','Junio','Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre'],
	 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
	 dayNamesMin: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
	 weekHeader: 'Sm',
	 dateFormat: 'dd/mm/yy',
	 firstDay: 1,
	 isRTL: false,
	 showMonthAfterYear: false,
	 yearSuffix: ''
	 };

				  $.datepicker.setDefaults($.datepicker.regional['es']);


				 $(function () {
				 $("#desde").datepicker();
				 // changeMonth:true,
				 // changeYear:true
				 });
});







$( "#datepicker" ).datepicker({
	inline: true
});

$( "#datepicker2" ).datepicker({
	dateFormat: 'dd-mm-yy'
});



$( "#fnacimientoPersonal" ).datepicker({
	dateFormat: 'yy-mm-dd',
	changeMonth:true,
	changeYear:true
});


//RANGOS SALO================================
$( function() {
  var from = $( "#desde" )
      .datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
				changeYear:true
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#hasta" ).datepicker({
      dateFormat: "yy-mm-dd",
      changeMonth: true,
			changeYear:true

    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    var dateFormat = "yy-mm-dd";
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
});
// FIN    RANGOS SALO================================
