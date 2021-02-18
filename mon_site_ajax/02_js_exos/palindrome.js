
$("#bouton").click(test_palindrome);

function test_palindrome(){

	var mot_rentre = $("#mot_rentre").val();
	console.log(mot_rentre);
	var mot_inverse = inversion(mot_rentre);
	comparaison(mot_rentre, mot_inverse);
	event.preventDefault();
}
function inversion(mot){
	var tab = mot.split(""); 
	var tab_inverse = tab.reverse(); 
	var mot_inverse = tab_inverse.join(""); 
	return mot_inverse
}
function comparaison(motun, motdeux){
	console.log(motun);
	motun == motdeux ? affichage_palindrome_oui() : affichage_palindrome_non();
}
function affichage_palindrome_oui(){
	console.log(mot_rentre);
	mot_rentre = $("#mot_rentre").val();
	console.log(mot_rentre);
	$("#reponse").html(mot_rentre + " est bien un palindrome");
	$("#reponse").css("background", "lime");
}

function affichage_palindrome_non(){
	
	mot_rentre = $("#mot_rentre").val();
	console.log(mot_rentre);
	$("#reponse").html(mot_rentre + " n'est pas un palindrome");
	$("#reponse").css("background", "red");
}