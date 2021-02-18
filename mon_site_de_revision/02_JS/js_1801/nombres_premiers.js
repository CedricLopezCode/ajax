function nombres_premiers(){
	var premier_ou_pas = -1
	do{
		var donnee_rentree = prompt("un nombre pour savoir s'il est premier ou pas");
		//Vérification que c'est un nombre entier
		if(isNaN(donnee_rentree) == true){
			alert("Ce n'est pas un nombre");
		}
		else if(parseInt(donnee_rentree) != donnee_rentree){
			alert("On veut un nombre entier");
		}
		else{
			premier_ou_pas = donnee_rentree
		}
	}while(premier_ou_pas == -1)

	//Analyse du nombre
	var comptage = 1
	do{
		comptage ++
	}while(premier_ou_pas % comptage != 0)

	comptage == premier_ou_pas ? alert(premier_ou_pas + " est un nombre premier") : alert(premier_ou_pas + " n'est un nombre premier.\n Le premier diviseur de " + premier_ou_pas + " est " + comptage);
}
