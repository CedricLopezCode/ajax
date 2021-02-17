
				//if

	if(nombre > 5){
		console.log("Ton chiffre est supérieur à 5");
	}
	else if(nombre < 5){
	// Ne fais cette 2eme comparaison que si la 1ére est false
	//== if imbriqués pour éviter de faire des tests inutiles
		console.log("Ton chiffre est inférieur à 5");
	}
	else{//Si tous les if et else if d'avant sont false
		console.log("Ton chiffre est égal à 5");
	}
	if(booleen){}//pas besoin de préciser == true
				//Ternaires = Conditions simple en 1 lignes
		//Mais ne marche que s'il n'y a que 1 instruction

	10 > 5 ? console.log("Vrai") : console.log("Faux"); 
	//Vrai donc prend le 1er après le ? (avant les :)

	1 > 5 ? console.log("Vrai") : console.log("Faux"); 
	//Faux donc prend le 2eme après le ?(Après les :)

	//Pour utiliser un return dans un ternaire c'est en direct
	function test_return_ternaire(){
	return 1 == 1 ? true :  false;
	}
	

				//Switch case = comparaison valeur exacte
	//classique
	switch (numéro_du_jour){ //nom de la variable à comparer
		case 1: //valeurs exactes que peut prendre cette variable
			console.log("Lundi");
		break; //Attention à pas oublier le break sinon il fera tous les suivant meme si c'est pas égal !!!
		case 2:
			console.log("Mardi");
		break;
		default: //toujours mettre un default pour éviter les erreurs
			console.log("Ce n'est pas un jour de la semaine");
		break;
	}
	//si on oublie les break;.............
	//si on met 1 il va sortir tous les jours de la semaine + le default
	switch (numéro_du_jour){ 
		case 1:
			console.log("Lundi");
		case 2:
			console.log("Mardi");
		case 7:
			console.log("Dimanche");
		default: 
			console.log("Ce n'est pas un jour de la semaine");
		break;
	}
	//........Mais ça peut être volontaire
	switch (numéro_du_jour){ 
		case 1:
		case 2:
		case 3:
			console.log("Début de semaine");
		break;
		case 4:
		case 5:
			console.log("Fin de semaine");
		break;
		case 6:
		case 7:
			console.log("Week-end");
		break;
		default:
			console.log("Ce n'est pas un jour de la semaine");
		break;
	}

	