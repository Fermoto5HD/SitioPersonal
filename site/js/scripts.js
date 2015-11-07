		$.ajaxSetup ({
				// Disable caching of AJAX responses
				cache: false
		});
		
		var menuresponsive = 1; 
		var height = $(window).scrollTop();
		var largo = $(window).width(); 
		var paginaactual = undefined; 

// Al arranque
		$(document).ready(function() {
				if(window.location.hash) {
						var hash = window.location.hash.substring(1); 
						//$('main#cuerpo').load('../seccion/'+hash+'.html'); 
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
				//cerrarMenu();
				haciaArriba(); 
				console.info('Estás en la sección '+pagina+'. '); 
		};
}

var haciaArriba = function(){
	console.log("Desplazando el sitio hacia arriba.");
	$('body').animate({scrollTop:0}, 500);
}
function menuResponsive(){
		if (menuresponsive === 1) {
				abrirMenu();
		}
		else if (menuresponsive === 0) {
				cerrarMenu();
		}
}

function cerrarMenu(){
		if (largo <= 640) {
				$("#navegacion").css("display", "none");
				$("header#estructura-header").css("background-color", "initial");
				menuresponsive = 1;
				console.log("Menú móvil cerrado");
		}
}
function abrirMenu(){
		if (largo <= 640) {
				$("#navegacion").css("display", "block");
				$("header#estructura-header").css("background-color", "rgba(0, 0, 0, 0.75)");
				menuresponsive = 0;
				console.log("Menú móvil abierto");
		}
}