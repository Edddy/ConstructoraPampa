; (function ($) {
	var app = $.sammy(function () {
		this.get('/', function () {
			$('#main').load('home.html');
		});

		this.get('#/test', function () {
			$('#main').text('Hello World');
		});

		this.get('#/contactenos', function () {
			$('#main').load('contactenos.html');
		});
		this.get('#/constructora', function () {
			$('#main').load('constructora.html');
		});
		this.get('#/estilos', function () {
			$('#main').load('estilos.html');
		});
		this.get('#/trabajosrealizados', function () {
			$('#main').load('trabajosrealizados.html');
		});
		this.get('#/otrosservicios', function () {
			$('#main').load('otrosservicios.html');
		});
		this.get('#/quienessomos', function () {
			$('#main').load('quienessomos.html');
		});
	});

	$(function () {
		app.run();
	});

	
})(jQuery);

function openTab(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}


function AmpliarFoto(ancho, alto, imgurl, scrollbars, texto) {
	// Get the modal
	var modal = document.getElementById('imageModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var modalImg = document.getElementById("imageModalImg");
	var captionText = document.getElementById("caption");

	modal.style.display = "block";
	modalImg.src = imgurl;
	captionText.innerHTML = texto;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
	}
}