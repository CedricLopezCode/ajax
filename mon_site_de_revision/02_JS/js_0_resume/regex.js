
//---------------------------------------------------------------------------------------------------------
		//expressions regulieres

		//Regex 
//utilisé principalement dans les formulaires
//Poiur vérifier que l'utilisateur saisi bien ce qu'on attend

var regex = /je suis l'id de test/

var id = document.getElementById("test").innerHTML;

console.log(id.match(regex)); //compare si id correspond bien à regex
  //									ici le + signifie répété  au moins 1 fois
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@([a-zA-Z0-9\_\-\*\.\,\;\:\+])+(\.)+([a-zA-Z])$/ //$ signifie la fin donc plus de récupération 
//                   pas d'espace entre c'est volontaire
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@([a-zA-Z0-9\_\-\*\.\,\;\:\+])+(\.)+([a-zA-Z]{2,3})$/ //pour dire combien de lettre j'accepte
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@(hotmail\.com)/ //pour imposer

var tel_regex = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/  // ^ pour dire que ça commence forcément par ça
var indicatif = /^(0033|\+33)[0-9]{9}$/


regex.test(input_a_analyser.value);
regex.match(input_a_analyser.value);


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