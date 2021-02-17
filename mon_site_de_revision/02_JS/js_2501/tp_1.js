var compteur_champs_valides = 5;
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

function verif(){
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
}
/*document.querySelector("#bouton_envoyer").onclick = function(){}*/

//------------------------------------------------------------------------------------------------------
		//Refaire
/*
submit.onclick = verifier;

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


}*/
function change(){
	ma_classe_test.style.background = "red";
}
function delete_supprime(){
	ma_classe_test.style.background = "green";
}

var ma_classe_test = document.querySelector('.test');
ma_classe_test.addEventListener("mouseover", change);
ma_classe_test.addEventListener("mouseout", delete_supprime);




