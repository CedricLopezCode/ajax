	//Récupération des infos
var champs_valeur_ht = document.querySelector("#valeur_ht");
var valeur_ht = parseFloat(champs_valeur_ht.innerHTML);
var champs_tva_choisi = document.querySelector("#taux_tva_choisi");
var taux_tva_choisi = parseFloat(champs_tva_choisi.innerHTML);
calculs_et_affichage();
	//Choix de la TVA avec les badges
var taux_tva_proposes = document.querySelectorAll(".badge_tva");
for(var index = 0; index < taux_tva_proposes.length; index++){
	taux_tva_proposes[index].addEventListener("click", change_taux_tva);
}
function change_taux_tva(){
	taux_tva_choisi = parseFloat(this.querySelector(".taux_tva_possible").innerHTML);
	calculs_et_affichage();
}
	//Calculs et Affichage
function calculs_et_affichage(){
	champs_tva_choisi.innerHTML = taux_tva_choisi;
	var valeur_tva = valeur_ht * taux_tva_choisi / 100;
	document.querySelector("#valeur_tva").innerHTML = valeur_tva;
	var valeur_ttc = valeur_ht + valeur_tva;
	document.querySelector("#valeur_ttc").innerHTML = valeur_ttc;
	document.querySelector("#prix_ht").innerHTML = valeur_ht;
	document.querySelector("#prix_tva").innerHTML = valeur_tva;
	document.querySelector("#pourcentage_tva").innerHTML = taux_tva_choisi;
	document.querySelector("#prix_ttc").innerHTML = valeur_ttc;
	//console.log(taux_tva_choisi);
}
	//Saisie manuelle Prix HT
champs_valeur_ht.ondblclick = change_valeur_ht;
function change_valeur_ht(){
	champs_valeur_ht.innerHTML = '<form><input type="number" id="input_ht"></form>';
	var input_ht = document.querySelector("#input_ht");
	document.querySelector("form").onsubmit = recup_valeur_ht ;
}
function recup_valeur_ht(){
	input_ht.value == "" ? "": valeur_ht = parseFloat(input_ht.value);
	champs_valeur_ht.innerHTML = valeur_ht;
	calculs_et_affichage();
	event.preventDefault();
}
	//Saisie manuelle tva
champs_tva_choisi.ondblclick = change_valeur_tva;
function change_valeur_tva(){
	champs_tva_choisi.innerHTML = '<form><input type="int" id="input_tva"></form>';
	var input_tva = document.querySelector("#input_tva");
	document.querySelector("form").onsubmit = recup_valeur_tva;
}
function recup_valeur_tva(){
	input_tva.value == "" ? "": taux_tva_choisi = parseFloat(input_tva.value);
	calculs_et_affichage();
	event.preventDefault();
}
//----------------------------------------------------------------

