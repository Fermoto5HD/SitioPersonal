// Los valores iniciales
	var seconds = 2;
	var regionpagina = "cuerpo";
	var contenido = "inicio";

// La función 
	function MostrarSeccion(contenido){
		// Objeto XMLHttpRequest
		var xmlHttp;
		try{
			xmlHttp=new XMLHttpRequest(); // Firefox, Opera 8.0+, Safari
		}
		catch (e){
			try{
				xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); // Para el Lenternet Explorer
			}
			catch (e){
				try{
					xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e){
					alert("Para visitar este sitio tendrás que actualizar el navegador, ya que el sitio utiliza AJAX como motor de carga de las secciones.");
					return false;
				}
			}
		}
		// Timestamp for preventing IE caching the GET request
			var timestamp = parseInt(new Date().getTime().toString().substring(0, 10));
			var procesourl = contenido+".php?t="+timestamp;
		// Corrobora disponibilidad
			xmlHttp.onreadystatechange=function(){
				if(xmlHttp.readyState== 4 && xmlHttp.readyState != null){
					document.getElementById(regionpagina).innerHTML=xmlHttp.responseText;
					//setTimeout('objetoajax()',seconds*1000);
				}
	        }
		// Muestra que está cargando el sitio
			$('#cuerpo').html('<div id="pantalla-carga"><br><br><br><br>Esperá un momento. <br>Próximamente una pantalla de carga decente. </div>');
		// Más magia :D 
			$.ajax({
				url: contenido+".php",
				type: 'GET',
				success: function() {
					xmlHttp.open("GET",procesourl,true);
					xmlHttp.send(null);
				},
				error: function() {
					$('#cuerpo').html('<br><br><br><br><center><div class="cover" id="error404"><div class="cover-degrade" id="error404"><div class="encuadre"><div class="cover-texto">Ha ocurrido un error<div class="cover-texto-parrafo">Probablemente sea un error en el servidor de hosting o puede que se haya cortado tu conexión a Internet.</div></div></div></div></div></center>');
				}
			});
	}

// Lo que hará al cargar el sitio 
	window.onload = function(){
		MostrarSeccion("inicio");
	}