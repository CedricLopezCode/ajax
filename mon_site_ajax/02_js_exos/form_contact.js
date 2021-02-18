$(document).ready(function(){

var compteur_champs_valides = 0;
var textarea_valide = 0;
var les_inputs = $("input");
var le_textarea = $("textarea");

$("#bouton_envoyer").on("click", verifier);
//le_tel.addEventListener("keyup", verifier_numero);

function verifier() {
	//verif input
	compteur_champs_valides = 0;
	les_inputs.each(function(index){
		if($(les_inputs[index]).val() == ""){
			$(les_inputs[index]).css("background", "red");
		}else{
			$(les_inputs[index]).css("background", "lime");
			compteur_champs_valides++;
		}
	});
	console.log("input "+ compteur_champs_valides);
	//verif textarea
	if(le_textarea.val() == ""){
		le_textarea.css("background", "red");
	}else if(compter_char_mots()){
		le_textarea.css("background", "lime");
		compteur_champs_valides++;
	}
	console.log("textarea "+ compteur_champs_valides);
	//compter_char_mots == ""? le_textarea.css("background", "red") : le_textarea.css("background", "lime");
	//------------------------------------------------------------------------------------
		
	//Totalité ok ?
	console.log("total "+ compteur_champs_valides);
	if (compteur_champs_valides == les_inputs.length + 1){/*1 text area*/
		$("form").hide();
		$("#message_envoi").show();

	}
	event.preventDefault();	
}
//------------------------------------------------------------------------------------
	//verif numero en direct

var le_tel = $("#numero_de_tel");

le_tel.bind("keyup", verifier_nombre);
le_tel.bind("keyup", verifier_numero);


function verifier_nombre(){
	console.log($.isNumeric(le_tel.val()));
	//$.isNumeric(le_tel.val()) ? "" : alert("On veut un numéro");
	$.isNumeric(le_tel.val()) ? "" : $(this).after("<p>On veut un numéro</p>");
	$.isNumeric(le_tel.val()) ? "" : le_tel.css("background", "orange");
	set
}
function verifier_numero(){
	var tel_regex = /^(06|01)[0-9]{8}$/;
	if(tel_regex.test(le_tel.val())){
		le_tel.css("background", "lime");
	}else{
		le_tel.css("background", "yellow");
		le_tel.html("<p style=\"color:red\">Invalide </p>"); 
	} 
}
//------------------------------------------------------------------------------------
	//Comptage caratère et mot
le_textarea.bind("keyup", compter_char_mots);
function compter_char_mots(){
	var nombre_mots = le_textarea.val().split(" ").length;
	var nombre_char = le_textarea.val().split("").length;
	$("#comptage_text_area").children().first().html(nombre_char);
	$("#comptage_text_area:nth-child(2)").html(nombre_mots);
	if(nombre_char > 200){
		le_textarea.addClass("mauvais");
		return false;
	}else{
		le_textarea.removeClass("mauvais");
		return true; 
	}
}

})//Fin document ready

$(function(){
	$("#message_envoi").hide();
})
