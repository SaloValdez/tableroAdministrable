$(document).ready(function(){

    cambiarDatapikerESPAÑOL();
    fechaNacPersonal_DataPiker();
});

function  cambiarDatapikerESPAÑOL(){
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
}

function fechaNacPersonal_DataPiker(){
  $( "#fnacimientoPersonal" ).datepicker({
  	dateFormat: 'yy-mm-dd',
  	changeMonth:true,
  	changeYear:true
  });
}
