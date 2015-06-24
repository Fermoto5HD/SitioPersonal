<div class="cuerpo-landing contacto">
	<div class="landing-sombra">
		<div class="encuadre">
			<div class="landing-texto proximamente"><h1 style="margin-bottom: 0px;">¿Alguna duda con algo? ¿Te interesaron los trabajos que realicé?</h1>
			¡Ponete en contacto conmigo y te responderé las dudas o consultas que tengas!</div>
		</div>
	</div>
</div>
<div class="encuadre">
	<center>
		<div class="seccion" id="contacto-redessociales">
			<h1>Podés contactarte via redes sociales:</h1>
			<a href="http://facebook.com/Fermoto5HD" target="blank"><button><i class="fa fa-facebook-official fa-2x"></i></button></a>
			<a href="http://twitter.com/Fermoto5HD" target="blank"><button><i class="fa fa-twitter fa-2x"></i></button></a>
			<a href="https://plus.google.com/117999670362964140369/" target="blank"><button><i class="fa fa-google-plus fa-2x"></i></button></a>
		</div>
		<div class="seccion" id="contacto-formulario">
			<h1>O si preferís una respuesta por correo electrónico, llená este formulario: </h1>
			<div id="estado-envio" class="oculto">
				<p>No se pudo determinar el estado del envío. </p>
			</div>
			<form id="formulario-contacto" name="contacto">
				<input class="campo-texto" id="contacto-nombre" type="text" placeholder="Tu nombre"></input>
				<input class="campo-texto" id="contacto-correo" type="email" placeholder="Tu correo electrónico"></input>
				<input class="campo-texto" id="contacto-telefono" type="number" placeholder="Un teléfono si lo deseas (opcional)"></input>
				<textarea class="campo-texto-extendido" id="contacto-mensaje" placeholder="Y lo que me quieras consultar o proponer!"></textarea>
				<div class="error-envio" style="display: none;">
					<h1 class="error-envio-titulo">Revisá bien... algo está provocando que no se pueda enviar el mensaje.</h1>
					<p class="error-envio-item">No se pudo determinar el error. <br>Si se sigue repitiendo por favor abrí un "issue" en el repositorio del sitio reportando este error. </p>
				</div>
				<input id="contacto-enviar" type="button" onclick="RealizarEnvio()" value="¡Enviar mensaje!"></input>
			</form>
		</div>
	</center>
</div>