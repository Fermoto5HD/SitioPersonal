<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<head>
	<!-- Título + metadata -->
		<title>Fernando Javier Osorio Lorenzo (Fermoto5HD) - Fase Beta 1.5</title>
		
		<meta name="description" content='Sitio personal de Fernando Javier Osorio Lorenzo, más conocido en Internet como "Fermoto5HD".'>
		<meta property="og:description" content='Sitio personal de Fernando Javier Osorio Lorenzo, más conocido en Internet como "Fermoto5HD".'>
		<meta name="twitter:title" content="Sitio personal de Fermoto5HD" />
		<meta name="twitter:description" content='Sitio personal de Fernando Javier Osorio Lorenzo, más conocido en Internet como "Fermoto5HD".' />
	<!-- Charset + estilos -->
		<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
		<meta name="theme-color" content="rgb(0, 0, 50)" />
		<!-- Momentáneamente el sitio no será responsive. En las próximas versiones se incorporará la vista responsive. -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="img/Favicon.ico">

		<link rel="stylesheet" type="text/css" href="css/contacto.css">
	<!-- Scripts -->
		<script type="text/javascript" src="js/scripts.js"></script>
		<script type="text/javascript" src="js/contacto.js"></script>
		<!--<script type="text/javascript" src="js/ajax-paginas.js"></script>-->
		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<link rel="stylesheet" type="text/css" media="all" href="css/general.css">
		<link rel="stylesheet" type="text/css" media="all" href="css/font-awesome.css">
		<link rel="stylesheet" type="text/css" media="all" href="css/materialdesignicons.min.css" />
		<link rel="stylesheet" type="text/css" media="all" href="css/header.css">
		<link rel="stylesheet" type="text/css" media="all" href="css/inicio.css">
		<link rel="stylesheet" type="text/css" media="all" href="css/cover.css">
		<script type="text/javascript">
			$(document).ready(function() {
				$("header#estructura-header").load("header.html");
				$("#cuerpo").load("contenido.html");
				$("footer").load("footer.html");
			});
		</script>
		
	</head>
	<body>
		<header id="estructura-header">
			<?php //include ("header.php");?>
		</header>
		<div id="cuerpo">
			<?php //include ("contenido.php");?>
		</div>
	</body>
	<footer>
		<?php //include ("footer.php"); ?>
	</footer>
</html>