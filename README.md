# Fermoto5HD - Sitio Personal v5.0
Este es el repositorio que muestra el armado integral de mi sitio personal en su 5ta versión. 
El sitio se creó desde cero, implementando FM5strap, mi framework basado en Bootstrap v4, junto con Angular y las tecnologías aplicadas en la v4. 

## En esta versión (v5.0.0-beta2) 

## Changelog
### v5.0.0
Versión estable del sitio 
* Estilos: Creado archivo sass para estilos del sitio. 
* Layout: El `container` pasa a ser `container-fluid`. 
* Scripts: HTML5 routing. Cambio de rutas y redirect de links viejos. 
* Portfolio: Modificación del controller, unificación de los JSON de los distintos portfolios en uno sólo, junto con filtros en las 3 subsecciones. 
* Portfolio: Webapp del TP N°1 de Infraestructura 1 integrado en el sitio. 

### v5.0.0-beta2
* Se corrije el error del botón "Ver más..." en el home, que abría la sección de YouTube en una ventana nueva. 
* Se corrijen los links de la sección de trabajos prácticos de la UNSAM. 
* Se le agrega la funcionalidad que le faltaba al formulario mediante Angular, aunque falta realizar el alert de success y de error. De paso se agrega un cálculo para humanos para evitar spam. 
* Se reemplazan los covers de la sección Portfolios y la subsección Lantalks por el cover por defecto. 

### v5.0.0-beta1
* El repositorio del sitio v4 pasa a ser el repositorio principal para las versiones de mi sitio personal. En caso que quieras ver el armado de la 4ta versión podés buscarlo en este mismo repositorio en el branch "v4". 
* Gracias a los "genios" de Instagram y sus políticas para usar su API, tengo que usar temporalmente un token para mostrar la última foto cargada a mi cuenta. Más adelante implemento un bypass o similar. 
* Más interacciones con la API de YouTube. 
* Actualizado el JSON de portfolios. 
* El formulario de contacto pasa a estar dentro de un modal. 

## Al modificar el sitio 
* Correr `npm install` para instalar los módulos necesarios. 
* Correr `grunt` para actualizar dependencias y copiarlas en vendor. 

## Reutilización de archivos 
Sentite libre en utilizar los distintos archivos de este repositorio para lo que se te ocurra o para algún proyecto que tengas! 

# Licencia 
El contenido del repositorio está bajo una Licencia Creative Commons Atribución 4.0 Internacional.