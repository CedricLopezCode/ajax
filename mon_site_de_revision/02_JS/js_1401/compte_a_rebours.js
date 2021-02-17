function compte_a_rebours(){
	 //Exo decrementation de 20 à 0 par pas de 2

		//initialisation
	var depart_compte_a_rebours = -1;
	var decrementation = -1;
	var comptage = 0;
		//choisir si on accepte les float avec la méthode 1 ou 2
	//méthode 1: rentrée des valeurs avec vérification de valeur numérique
	/*
	do{
		var valeur_entree = prompt("Entrez la valeur de départ du compte à rebours");
		//parseInt(valeur_entree)%1 != 0 ? alert("Ce n'est pas un nombre") : depart_compte_a_rebours=parseInt(valeur_entree);
		isNaN(valeur_entree) ? alert("Ce n'est pas un nombre") : depart_compte_a_rebours=parseInt(valeur_entree);
	}while(depart_compte_a_rebours == -1)

	do{
		var valeur_entree = prompt("Entrez la décrémentation voulue");
		parseInt(valeur_entree)%1 != 0 ? alert("Ce n'est pas un nombre") : decrementation=parseInt(valeur_entree);
		//isNaN(valeur_entree) ? alert("Ce n'est pas un nombre") : decrementation=parseInt(valeur_entree);
	}while(decrementation == -1)
	*/
	//Méthode 2: rentrée des valeurs avec élimination des float

	do{
		var valeur_entree = prompt("Entrez la valeur de départ du compte à rebours");
		if (isNaN(valeur_entree)) {
			alert("Ce n'est pas un nombre");
		}
		else if (parseInt(valeur_entree) != valeur_entree){
			alert("Il y a une virgule qu'on ne veut pas")
		} 
		else{
			depart_compte_a_rebours=valeur_entree;
		} 
	}while(depart_compte_a_rebours == -1)

	do{
		var valeur_entree = prompt("Entrez la décrémentation voulue");
		if (isNaN(valeur_entree)) {
			alert("Ce n'est pas un nombre");
		}
		else if (parseInt(valeur_entree) != valeur_entree){
			alert("Il y a une virgule qu'on ne veut pas")
		} 
		else{
			decrementation = valeur_entree;
		} 
	}while(decrementation == -1)

	//affichage valeurs rentrées
	console.log("Départ du compte à rebours à:\t" + depart_compte_a_rebours);
	console.log("Décrémentation par pas de:\t" + decrementation);
	console.log("\nTop départ !!!");

	//décrémentation
	comptage = depart_compte_a_rebours;
	do{
		console.log(comptage);
		comptage = comptage - decrementation;
	}while(comptage > depart_compte_a_rebours % decrementation)
		console.log(comptage);
		console.log("Fini !!!");

	//affichage reste
	depart_compte_a_rebours % decrementation == 0 ? alert("Pile poil !") : alert("Dommage il reste :" + "  " + comptage);
}
