function RealizarEnvio(){
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
 

    if(sendMail == "true"){
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
                    $('#contactform').css("border-color","#25A25A");
                    $("#contacto-enviar").val("Se está enviando el correo...");
                    console.log("Enviando correo...");
             },
 
             success:  function (response) {
                    $('form')[0].reset();
                    $("#contacto-enviar").val("¡Enviar correo!");
                    $("#contacto-enviar").removeAttr("disabled");
                    $("#estado-envio p").html(response);
                    $("#estado-envio").fadeIn('slow');
                    console.log("El envío se realizó con exito.");
            }
     });
 
} 
else{$("#contacto-enviar").removeAttr("disabled");}
 
}