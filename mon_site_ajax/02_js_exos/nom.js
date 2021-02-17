				//Exo en autonomie
	//Exo 1; nom utilisateur à afficher
var pseudo = "";
/*verifier_pseudo();
function verifier_pseudo(){
	var nom_utilisateur = document.getElementById("nom_utilisateur");
	while(pseudo == ""){
		pseudo = prompt("Saisir votre nom");
	}
	nom_utilisateur.innerHTML = pseudo;
}
*/
verifier_pseudo_jquery();
function verifier_pseudo_jquery(){
	var nom_utilisateur = $("#nom_utilisateur");
	while(pseudo == ""){
		pseudo = prompt("Saisir votre nom");
	}
	$(nom_utilisateur).html(pseudo);
}

