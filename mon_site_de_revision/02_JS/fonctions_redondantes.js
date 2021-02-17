function XXXXXXXXXXX(){}
function prompt_verifie_int(message_du_prompt){
	var nom_du_chiffre_quon_attend = -1;
	do{
		var donnee_rentree = prompt(message_du_prompt);
		//Vérification que c'est un nombre entier
		if(isNaN(donnee_rentree)){
			alert("Ce n'est pas un nombre");
		}
		else if(parseInt(donnee_rentree) != donnee_rentree){
			alert("On veut un nombre entier");
		}
		else{
			nom_du_chiffre_quon_attend = donnee_rentree;
		}
	}while(nom_du_chiffre_quon_attend == -1)
	return nom_du_chiffre_quon_attend;
}
function prompt_verifie_nombre(message_du_prompt){
	var nom_du_chiffre_quon_attend = -1;
	do{
		var donnee_rentree = prompt(message_du_prompt);
		//Vérification que c'est un nombre 
		isNaN(donnee_rentree)? alert("Ce n'est pas un nombre") : nom_du_chiffre_quon_attend = donnee_rentree;
	}while(nom_du_chiffre_quon_attend == -1)
	return nom_du_chiffre_quon_attend;
}
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//     A Tester
function verifier_numero_de_telephone_valide_juste_background(id_input_telephone){
		var tel_regex = /^(01|02|03|04|05|06|07|08|09|)[0-9]{8}$/;
		tel_regex.test(id_input_telephone.value) ? id_input_telephone.style.background = "lime" : id_input_telephone.style.background = "yellow";
	}
	function verifier_numero_de_telephone_valide_juste_true(numero){
		var tel_regex = /^(01|02|03|04|05|06|07|08|09|)[0-9]{8}$/;
		return tel_regex.test(numero) ? true : false;
	}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
/*var compteur_champs_valides = 0;
var textarea_valide = 0;
var les_inputs = $("input");
var le_textarea = $("textarea");

$("#bouton_envoyer").on("click", verifier);
//le_tel.addEventListener("keyup", verifier_numero);

function verifier_validite_formulaire(){
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
		/*$("form").hide();
		$("#message_envoi").show();

	}
	event.preventDefault();	
}
//------------------------------------------------------------------------------------
function verif_numero_en_direct(id_input_telephone){ 
	var le_tel = document.querySelector("#id_input_telephone");
	le_tel.addEventListener("keyup", verifier_nombre);
	le_tel.addEventListener("keyup", verifier_numero_valide);
	function verifier_nombre(){
		if(isNaN(le_tel.value)){
			le_tel.style.background = "red";
			alert("Il ne faut que des chiffres");
		}
	}
	function verifier_numero_de_telephone_valide_juste_background(){
		var tel_regex = /^(01|02|03|04|05|06|07|08|09|)[0-9]{8}$/;
		if(tel_regex.test(le_tel.value)){
			le_tel.style.background = "lime";
			return true;
		}else{
			le_tel.style.background = "yellow";
			return false;
		} 
	}
	function verifier_numero_de_telephone_valide_juste_background(){
		var tel_regex = /^(01|02|03|04|05|06|07|08|09|)[0-9]{8}$/;
		tel_regex.test(le_tel.value) ? le_tel.style.background = "lime" : le_tel.style.background = "yellow";
	}
	function verifier_numero_de_telephone_valide_juste_true(){
		var tel_regex = /^(01|02|03|04|05|06|07|08|09|)[0-9]{8}$/;
		return tel_regex.test(le_tel.value) ? le_tel.style.background = "lime" : le_tel.style.background = "yellow";
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
}*/


