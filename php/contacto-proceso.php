<?php
// Cuerpo del mensaje. 
$mensaje = "Mensaje enviado desde el sitio web personal.\n";
$mensaje.= "\nEscrito por ". $_POST['nombre'] ." (".$_POST['telefono']." | ".$_POST['email'].") \n";
$mensaje.= "\n---------------------\n";
$mensaje.= $_POST['mensaje'];
$mensaje.= "\n---------------------\n";
$mensaje.= "Este es un mensaje automatizado. No lo contestes.";

// Acá se coloca el correo donde recibirá los mensajes y los datos que se recibirán desde el sitio. 
$destino = "Fermoto5HD@outlook.com";
$remitente = $_POST['email'];
$asunto = "[Sitio personal] ".$_POST['nombre']." te envió un mensaje.";
mail($destino,$asunto,$mensaje, "From: $remitente");

// Esto se mostrará en el formulario confirmando el envío del correo.  
echo "¡El mensaje se envió sin problemas! <br>A la brevedad me pondré en contacto con vos.";
?>