var mes_liens = document.querySelectorAll(".mes_liens a");
for(var index = 0; index < mes_liens.length; index++){
	var lien = mes_liens[index];
	lien.style.background = "red";
}

//En jQuery

$(".mes_liens a").css("background", "lime");

//************************************************
$("p").click(function(){
	$(".test").toggle();//forcement entre hide et show
})

function monImage(){
	for(var index = 0; index < 300; index++){
		$(".image").fadeOut(5000).delay(300).fadeIn(5000);
	}
}

//-------------------------------------------------
$(document).ready(function(){});//permet d'attendre la fin du chargement de la page


//Galerie version JS
var toutes_les_images = document.querySelectorAll('.item');
function clique() {
	var getSrc = this.getAttribute('src');
	var img_cliquee =' <img src="'+getSrc+'">'
	document.querySelector('.bloc').innerHTML = img_cliquee;
}
for(var index = 0; index < toutes_les_images.length; index++){
	toutes_les_images[index].addEventListener('click', clique);
}

//Galerie version JQuery
$(".item").each(function(index){
	$(".item")[index].addEventListener("click", clique);
});	
function clique() {
	var getSrc = $(this).attr("src");
	var img_cliquee = '<img src="'+getSrc+'">';
	$('.bloc').html(img_cliquee);

	//OU
	$('.bloc').html('<img src="'+$(this).attr("src")+'">');
}
