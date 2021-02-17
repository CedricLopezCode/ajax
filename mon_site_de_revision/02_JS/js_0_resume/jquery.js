$(document).ready(function(){})//pour qu'il charge à la fin
$(function anonymes())
 //s'execute automatiquement donc flux normal 
 //donc 1 seule fonction anonyme/fichier js

	//Selecteurs HTML
$("#id")	$(".class")		$("balise")		$(this)
	//Selecteurs DOM
//Famille
element.parent()
element.parents()//Tous les parents
element.child()//Que si 1 seul enfant
$("element:nth-child(2)")//Le n_ieme enfant
element.children()//Tous les enfants
element.siblings()//Les frères mais pas lui-même
element.siblings().first()//Que le 1er de la fratrie
element.siblings().last()//Que le Dernier de la fratrie


	//Evenements
$("element").click(function(){});
$("element").on("click", function(){});
//2 écritures équivalentes pour les evenements
//Mais pas d'équivalent jQuerry pour les écouteurs donc toujours addEventListener

	//css
$(this).css("background", "red");
$(this).css({"background":"red","color":"blue"});

	//boucles
$(item).each(function(index){
	$(item)[index].addEventListener("event", function);
});	

	//Methodes
// jQuerry-------------------------------JS Pur
// Attributs
element.attr("src") ;		= element.getAttribute("src");
element.empty(); 			= element.innerHTML = "";
//Classes 
element.addClass(""); 		= element.classList.add("");
element.removeClass(""); 	= element.classList.remove("");
XXXXXXXXXXXX				= element.classList.toggle("");

