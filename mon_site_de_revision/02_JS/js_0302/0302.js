$(document).ready(function(){

$("p").on("click", function(){});

//apparition disparition image
$("#bouton_image").on("click", toggle_image);

function toggle_image(){
	$("img").toggle();
	$("#bouton_image").text($("#bouton_image").text() == "Cacher" ? "Montrer": "Cacher");//version simplifiée
//$("#bouton_image").text() == "Cacher" ? $("#bouton_image").text("Montrer"): $("#bouton_image").text("Cacher"));
	
}

//animation

$(function(){
//fonction anonoyme = qui s'execute automatiquement
//Pour mettre des trucs par defaut, en dehors du ready
//1	fonction anonyme/fichier
//en dessous du ready
	$("ul li").hover(
		function(){
			$(this).find("img").animate({
				opacity: "1.2"
			})
		}, function(){
			$(this).find("img").animate({
				opacity: "0.2"
			})
		}
	)
})
























});