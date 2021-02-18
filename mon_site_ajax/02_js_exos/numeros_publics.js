function numeros_publics(){	
	//Exo Numéro de tel

	var saisie_utilisateur_numero_a_appeler = prompt("entrer le nuléro que vous voulez appeler");
	switch (saisie_utilisateur_numero_a_appeler){
		case "17":
			confirm("Vous voulez appeler la police ?");
		break;
		case "18":
			confirm("Vous voulez appeler les pompiers ?");
		break;
		case "0800":
			alert("Vous voulez appeler numéro vert");
		break;
		default: 
			alert("Ce n'est pas un numéro publique");
		break;
	}

	if(saisie_utilisateur_numero_a_appeler.substring(0,2) == "06" ){//pour prendre les lettres du début à la 2eme
		alert("Vous voulez appeler un portable");
	}
	else if(saisie_utilisateur_numero_a_appeler == "07"){
		alert("Vous voulez appeler un membre de votre famille");
	}
	else {
		alert("Vous voulez appeler quelqu'un");
	}
	saisie_utilisateur_numero_a_appeler == "123"? alert("Vous voulez appeler Cédric"):alert("Vous ne voulez pas appeler Cédric");
	saisie_utilisateur_numero_a_appeler == "007"? console.log("Bond...\n\nJames Bond"): console.log("Ce n'est pas  James Bond");


	//Attention le 0 au début des nombres est suppprimé entre la saisie et la comparaison de nombres donc;
		//Soit on passe par des string
	switch (saisie_utilisateur_numero_a_appeler){
		case "17":
			confirm("Vous voulez appeler la police ?");
		break;
		case "18":
			confirm("Vous voulez appeler les pompiers ?");
		break;
		case "0800":
			alert("Vous voulez appeler numéro vert");
		break;
		default: 
			alert("Ce n'est pas un numéro publique");
		break;
	}
		//Soit on utilise la fonction parseInt
	switch (parseInt(saisie_utilisateur_numero_a_appeler)){
		case 17:
			confirm("Vous voulez appeler la police ?");
		break;
		case 18:
			confirm("Vous voulez appeler les pompiers ?");
		break;
		case 0800:
			alert("Vous voulez appeler numéro vert");
		break;
		default: 
			alert("Ce n'est pas un numéro publique");
		break;
	}
}
