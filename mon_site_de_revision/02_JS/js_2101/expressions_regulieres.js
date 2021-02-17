
//---------------------------------------------------------------------------------------------------------
		//expressions regulieres


var regex = /je suis l'id de test/

var id = document.getElementById("test").innerHTML;

console.log(id.match(regex)); //compare si id correspond bien à regex
test0152@test.fr
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@([a-zA-Z0-9\_\-\*\.\,\;\:\+])+(\.)+([a-zA-Z])$/ //$ signifie la fin donc plus de récupération 
//                   pas d'espace entre c'est volontaire
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@([a-zA-Z0-9\_\-\*\.\,\;\:\+])+(\.)+([a-zA-Z]{2,3})$/ //pour dire combien de lettre j'accepte
var email_regex = /([a-zA-Z0-9\_\-\*\.\,\;\:\+])+\@(hotmail\.com)/ //pour imposer

var tel_regex = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/  // ^ pour dire que ça commence forcément par ça
var indicatif = /^(0033|\+33)[0-9]{9}$/
//elementatester.regex