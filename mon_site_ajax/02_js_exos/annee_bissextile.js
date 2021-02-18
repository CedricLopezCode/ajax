function annee_bissextile(){
	/*var numero_l_annee = -1
	do{
		var donnee_rentree = prompt("rentrer le numéro d'une année pour savoir si elle est bisextille ou pas");
		//Vérification que c'est un nombre entier
		if(isNaN(donnee_rentree) == true){
			alert("Ce n'est pas un nombre");
		}
		else if(parseInt(donnee_rentree) != donnee_rentree){
			alert("On veut un nombre entier");
		}
		else{
			numero_l_annee = donnee_rentree
		}
	}while(numero_l_annee == -1)
	*/
	var numero_l_annee = prompt_verifie_int("rentrer le numéro d'une année pour savoir si elle est bisextille ou pas");
	//Analyse du numéro de l'année
	if((numero_l_annee % 4 == 0 && numero_l_annee % 100 != 0) || numero_l_annee % 400 == 0)
	{
		alert("L'année " + numero_l_annee + " est une année bissextile" );
	}else{
		alert("L'année " + numero_l_annee + " n'est pas une année bissextile" );
	}

	var donnee_rentree = prompt("Chiifre = 2021 ?");

	donnee_rentree == 2021 ? console.log("Prompt = Int avec ==") : console.log("== déjà différent");
	donnee_rentree === 2021 ? console.log("Prompt = Int avec ===") : console.log("=== différent type");
	// == compare juste ja valeur
	// === compare aussi le type
	// donc évite la vérification au départ
}
