var compteur_champs_valides = 0;
var submit = document.getElementById("bouton_envoyer");
var les_inputs = document.querySelectorAll("input");
var le_textarea = document.querySelector("textarea");
console.log(submit);
console.log(les_inputs.length);
//-------------------------------------------------------------------------------------------------------------------------------------------
/*submit.onmouseover = verifier;
submit.onclick = verifier;
//test_sans_click();
window.setInterval(verification_tous_champs_valides, 500);
//bouton
	if(compteur_champs_valides == les_inputs.length + 1){//(le text area)
		submit = "<button id=\"bouton_envoyer\">Envoyer</button>";
	}else {
		console.log("else");
		document.querySelector("textarea").style.background = "lime";
		compteur_champs_valides++;
	}


function verification_tous_champs_valides() {
		if(compteur_champs_valides == les_inputs.length + 1/){//(le text area)
			submit = "<button id=\"bouton_envoyer\">Envoyer</button>";
		} else {
			console.log("else");
			document.querySelector("textarea").style.background = "lime";
			compteur_champs_valides++;
		}
}

function verifier() {
	//verif input
	for(var index = 0; index < les_inputs.length; index++){
		les_inputs[index].value == "" ? les_inputs[index].style.background = "red" : les_inputs[index].style.background = "lime";
		les_inputs[index].value == "" ? "" : compteur_champs_valides++;
	}
	//verif textarea
	if(document.querySelector("textarea").value == ""){
		console.log("if");		
		document.querySelector("textarea").style.background = "red";
	} else {
		console.log("else");
		document.querySelector("textarea").style.background = "lime";
		compteur_champs_valides++;
	}
	
	//compteur_champs_valides == les_inputs.length + 1 ? submit.style.background = "lime" : submit.style.background = "red" ;
	//compteur_champs_valides == les_inputs.length + 1 ? "" : submit.disable = "off" ;

}



function test_sans_click() {
	var les_inputs = document.querySelectorAll("input");
	console.log(les_inputs);
	for(var index = 0; index < les_inputs.length; index++){
		console.log("for");
		console.log("brut");
		console.log(les_inputs[index]);
		console.log("value");
		console.log(les_inputs[index].value);
		console.log("innerHTML");
		console.log(les_inputs[index].innerHTML);
	}
}
*/
//----------------------------------------------------------------------------------------------

//Corection

/*function verif(){
	if(document.querySelector("#nom").value == ""){
		document.querySelector("#nom").focus();//se concentre sur le champs faux
		document.querySelector("#nom").style.background = "red";
		return false; //permet d'eviter l'envoie quand on click
	}
	if(document.querySelector("#prenom").value == ""){
		document.querySelector("#prenom").focus();//se concentre sur le champs faux
		document.querySelector("#prenom").style.background = "red";
		return false; //permet d'eviter l'envoie quand on click
	}
}*/
/*document.querySelector("#bouton_envoyer").onclick = function(){}*/

//------------------------------------------------------------------------------------------------------
		//Refaire
var compteur_champs_valides = 0;
var submit = document.getElementById("bouton_envoyer");
var les_inputs = document.querySelectorAll("input");
var le_textarea = document.querySelector("textarea");



submit.onclick = verifier;
//le_tel.addEventListener("keyup", verifier_numero);

function verifier() {
	//verif input
	compteur_champs_valides = 0;
	for(var index = 0; index < les_inputs.length; index++){
		if(les_inputs[index].value == ""){
			les_inputs[index].style.background = "red"
		}else{
			les_inputs[index].style.background = "lime";
			compteur_champs_valides++;
		}
	}
	console.log(compteur_champs_valides);
	console.log(les_inputs.length);
	//verif textarea
	if(document.querySelector("textarea").value == ""){	
		document.querySelector("textarea").style.background = "red";
	} else {
		document.querySelector("textarea").style.background = "lime";
		compteur_champs_valides++;
	}
	if(compteur_champs_valides != les_inputs.length + 1){//1 text area
		return false;
	} 
}
//--------------------------------------------------------------------------------------------------------
	//verif numero en direct

var le_tel = document.querySelector("#numero_de_tel");

le_tel.addEventListener("keyup", verifier_nombre);
le_tel.addEventListener("keyup", verifier_numero);


function verifier_nombre(){
	console.log(le_tel.value);
	isNaN(le_tel.value) ? alert("On veut un numéro") : "";
	isNaN(le_tel.value) ? le_tel.style.background = "orange" : "";
	
}
function verifier_numero(){
	var tel_regex = /^(06|01)[0-9]{8}$/;
	//tel_regex.test(le_tel.value) ? le_tel.style.background = "lime" : le_tel.style.background = "red" ;
	if(tel_regex.test(le_tel.value)){
		le_tel.style.background = "lime";
	}else{
		le_tel.style.background = "yellow";
		le_tel.innerHTML="<p style=\"color:red\">Invalide </p>"; 
		return false;
	} 
}
//-----------------------------------------------------------------------------------------------
//Correction
/*function verif() {
	var error = 0;
	var tous_les_inputs_type_text = document.querySelectorAll('input[type="text"]');
	console.log(tous_les_inputs_type_text);

	for(var index=0; index < tous_les_inputs_type_text.length; index++){
		if(tous_les_inputs_type_text[index].value == ''){
			tous_les_inputs_type_text[index].focus();
			tous_les_inputs_type_text[index].style.background = 'red';

			error++;
		}else{
			tous_les_inputs_type_text[index].style.background = 'white';

		}
	}

	//var mobile =  /^(?:(?:+|00)33[\s.-]{0,3}(?:(0)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/gm;

	var mobile = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;
	
	if (!mobile.test(document.querySelector('#tel').value)) {
		alert('Numero KO')
		document.querySelector('#tel').focus();
		document.querySelector('#tel').style.background='red';
		return false;
	}

	console.log(error);
	if(error>0){	
		return false;
	}
}
/*document.querySelector('#submit').onclick=function () {
	alert("OK")
}*/

/*
var tel = document.querySelector('#tel');

tel.addEventListener('keyup', function () {

	if (isNaN(tel.value)) {
		document.querySelector('.error').innerHTML='<p style="color:red">Pas valide </p>';
	}
	else{

		document.querySelector('.error').innerHTML='';
	}
})*/
//------------------------------------------------------------------------------------
		//bug addEventListener  //Résolu

function change() {
	ma_classe_test.style.background="red";
}
function delete_supprime() {
	ma_classe_test.style.background="lime";
}

var ma_classe_test = document.querySelector(".test");

ma_classe_test.addEventListener("mouseover", change)
ma_classe_test.addEventListener("mouseout", delete_supprime)