// Levantar cover
    $(document).ready(function() {
        //$(".cuerpo-landing").addClass("proximamente").fadeIn();
        console.log("¡Bienvenido a mi sitio! Acá podrás ver todas las acciónes registradas durante la navegación en el sitio.");
    });

//
function Inicio(){
    MostrarSeccion("inicio");
    console.log("Cambió el contenido a la página inicial.");
    HaciaArriba();
}
function Contacto(){
    MostrarSeccion("contacto");
    console.log("Cambió el contenido a la página de contacto.");
    HaciaArriba();
}
function HaciaArriba(){
    console.log("Desplazando el sitio hacia arriba.");
}

$(function() {  
    var items_resumen = $(".seccion#inicio-resumen .cuerpo-item");
    var items_portfolio = $(".seccion#inicio-portfolio .cuerpo-item");

    // Calcula la altura del bloque del resumen
    var seccion1_inicio = $("#inicio-resumen").outerHeight();

    // obtenemos el height + padding de la sección 2
    // y le sumamos el de la sección 1
    var seccion2_inicio = $("#inicio-portfolio").outerHeight() + seccion1_inicio;
    //var altoSeccion2 = $("#seccion2").outerHeight() + altoSeccion1;


    // Correrá este código cada vez que el usuario use el scroll
    $(window).scroll(function(event) {
        // scrollTop la posición del elemento
        height = $(event.target).scrollTop();

        // dependiendo el lugar de la pantalla
        // modificamos la clase del header
        // par cambiar su color de fondo
        if (height < 350) {
            items_resumen.removeClass("opaco").removeClass("semitransparencia");
            items_portfolio.removeClass("opaco").removeClass("semitransparencia");
            //.removeClass("verde");
        }
        else if (height > 350 && height < seccion1_inicio) {
            items_resumen.addClass("opaco").removeClass("semitransparencia");
            $("#nota-desplazar").remove();
        }
        else if (height > seccion2_inicio) {
            items_portfolio.addClass("opaco").removeClass("semitransparencia");
            $("#nota-desplazar").remove();
        } 
        //else if (height > altoSeccion1 && height < altoSeccion2) {
            //header.addClass("verde").removeClass("plata zapallo");
        //} else if (height > altoSeccion2) {
            //header.addClass("zapallo").removeClass("verde");
        //}
        else {
            items_resumen.removeClass("opaco").addClass("semitransparencia");
            items_portfolio.removeClass("opaco").addClass("semitransparencia");
        }
    });
});