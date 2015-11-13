$.ajaxSetup ({
	cache: false
});
var paginaactual = undefined; 

// Al arranque
	$(document).ready(function() {
			if(window.location.hash) {
					var hash = window.location.hash.substring(1); 
					var cargapagina = $.get( '../seccion/'+hash+'.html', function(datapagina) {
						$('main#cuerpo').html( datapagina );
					})
						.fail(function() { 
							$('main#cuerpo').load('../seccion/404.html'); 
						});
					paginaactual = hash; 
			} else {
					seccion('inicio');
					paginaactual = 'inicio'; 
			}
			$("#navegacion").css("display", "none");
			console.log("¡Bienvenido a mi sitio! Acá podrás ver todas las acciónes registradas durante la navegación en el sitio.");
	});

//
var seccion = function(pagina){
	if (paginaactual !== pagina) {
			$('main#cuerpo').load('../seccion/'+pagina+'.html'); 
			window.location.hash = pagina; 
			paginaactual = pagina; 
			haciaArriba(); 
			console.info('Estás en la sección '+pagina+'. '); 
	};
}

var haciaArriba = function(){
	console.log("Desplazando el sitio hacia arriba.");
	$('body').animate({scrollTop:0}, 500);
}