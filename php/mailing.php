<?php
	// Message content. 
	$msj = "Este mensaje fue enviado desde la página personal (Fermoto5HD.com).<br>";
	if ((!empty($_POST['tel'])) || (!is_null($_POST['tel']))) {
		$msj.= "Escrito por ". $_POST['name'] ." (Correo: ".$_POST['email'].").<br>";
	} else {
		$msj.= "\Escrito por ". $_POST['name'] ." (Teléfono: ".$_POST['tel']." | Correo: ".$_POST['email'].").<br>";
	}
	$msj.= "---------------------<br>";
	$msj.= nl2br($_POST['msj']);
	$msj.= "<br>---------------------<br><br>";
	$msj.= "Es un mensaje automático. Responder a la dirección especificado en el mail.";

	// Headers. 
	$to = "contacto@fermoto5hd.com";
	$remitente = $_POST['email'];
	$subject = "[Sitio Personal] Llegó un mensaje nuevo de ".$_POST['name'];
	$headers = "Content-Type: text/html; charset=UTF-8; From: $remitente";

	mail($to,$subject,$msj,$headers);

	// Return success message. 
	echo json_encode(array('status' => 'sent'));
?>