var intentos = 0; 
function RealizarEnvio(){
	$('form .callout').remove(); 
	$("#contacto-enviar").attr("disabled", true);
	$('.error-envio').css("display","none");  
	$(".error-envio-item").remove();
 
	var filtro=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
	var valor_nombre = $('#contacto-nombre').val();  
	var valor_correo = $('#contacto-correo').val();
	var valor_telefono = $('#contacto-telefono').val();   
	var valor_mensaje = $('#contacto-mensaje').val();
 
	console.log("Ejecutando verificación del formulario.");

	if (valor_mensaje.length == 0 ){
		$('.error-envio').css("display","block");  
		$('.error-envio-titulo').after("<p class='error-envio-item'>¿No te estará faltando el mensaje a enviar?</p>");
		var sendMail = "false";
	}
	if (filtro.test(valor_correo)){
		sendMail = "true";
	} 
	else if (valor_correo.length == 0 ) {
		$('.error-envio').css("display","block");  
		$('.error-envio-titulo').after("<p class='error-envio-item'>No ingresaste tu dirección de correo.</p>");
		sendMail = "false";
	}
	else{
		$('.error-envio').css("display","block");  
		$('.error-envio-titulo').after("<p class='error-envio-item'>Ingresaste algo en el campo de correo... pero no es uno válido.</p>");
		sendMail = "false";
	}

	if (valor_nombre.length == 0 ){
		$('.error-envio').css("display","block");  
		$('.error-envio-titulo').after("<p class='error-envio-item'>No ingresaste tu nombre.</p>");
		var sendMail = "false";
	}
	if(sendMail == "false"){
		console.log("Hay errores en los campos de texto. Verificá que todo esté en orden.")
	}
 

	if(sendMail){
		var datos = {
				"nombre" : $('#contacto-nombre').val(),
				"telefono" : $('#contacto-telefono').val(),
				"email" : $('#contacto-correo').val(),
				"mensaje" : $('#contacto-mensaje').val()
		};
		console.log("¡Perfecto! Todos los datos estan en orden.");

		$.ajax({
			data:  datos,
			url:   'php/contacto-proceso.php',
			type:  'post',
			beforeSend: function () {
				$(":submit").html("Se está enviando el correo...").attr("disabled", true);
				console.log("Enviando correo...");
			},
			error:  function (status) {
				intentos++; 
				if (intentos >= 3) {
					$('.row.form').before('<div class="callout error text-left" data-closable>\
											<p>Ocurrió un error al enviar el mensaje. Parece que intentaste enviar varias veces sin éxito... </p>\
											<p>Te invito a que me escribas a mi e-mail <a href="mailto://Fermoto5HD@outlook.com">haciendo click acá</a>. </p><p>Te pido mil disculpas por estos errores. </p>\
											<button class="close-button" aria-label="Dismiss alert" type="button" data-close>\
												<span aria-hidden="true">&times;</span>\
											</button>\
										</div>');
				} else {
					$('.row.form').before('<div class="callout error text-left" data-closable>\
											<p>Ocurrió un error al enviar el mensaje. Reintentá de nuevo en unos minutos. </p><p>Disculpá las molestias...</p>\
											<button class="close-button" aria-label="Dismiss alert" type="button" data-close>\
												<span aria-hidden="true">&times;</span>\
											</button>\
										</div>');
				}
				$(":submit").html("Reenviar").removeAttr("disabled");
				console.error("Ocurrió un error al enviar.");
			},
			success:  function (response) {
				$('form')[0].reset();
				$(":submit").html("¡Enviar correo!").removeAttr("disabled");
				$('.row.form').before('<div class="callout success text-left" data-closable>\
											<p>'+response+'</p>\
											<button class="close-button" aria-label="Dismiss alert" type="button" data-close>\
												<span aria-hidden="true">&times;</span>\
											</button>\
										</div>');
				console.log("El envío se realizó con exito.");
			}
		});
	}
}