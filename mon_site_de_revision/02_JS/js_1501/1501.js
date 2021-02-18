function comparaison_de_nombres(){

				//Partie Saisie utilisateur //Au choix Alerte ou tableau pré-rempli

		//Saisie d'un nombre de chiffre à comparer
	var nombre_de_chiffre_a_comparer = 0;
	var saisie_nombre;
	do{
		var saisie_nombre = prompt("Combien il y a de chiffre à comparer ?");
		isNaN(saisie_nombre) ? alert("Il faut rentrer un chiffre") : nombre_de_chiffre_a_comparer = saisie_nombre;
	}while(nombre_de_chiffre_a_comparer == 0)

		//Saisie des X chiffre à comparer
	var tableau_des_chiffres_a_compare = Array(nombre_de_chiffre_a_comparer)
	for(var x_ieme_chiffre_a_comparer = 0; x_ieme_chiffre_a_comparer < nombre_de_chiffre_a_comparer; x_ieme_chiffre_a_comparer++){
		do{
			var saisie_nombre = prompt("rentrer le " + (x_ieme_chiffre_a_comparer+1) +" ième chiffre à comparer");
			isNaN(saisie_nombre) ? alert("Il faut rentrer un chiffre") : tableau_des_chiffres_a_compare[x_ieme_chiffre_a_comparer] = saisie_nombre;
		}while(tableau_des_chiffres_a_compare[x_ieme_chiffre_a_comparer] == 0)
	}
		//Partie Tableau de Test pour éviter de devoir rentrer des valeurs
	/*
	var tableau_des_chiffres_a_compare = [159,151,91,159,19,11,91,19,3,3,3,3,11519446,         6,67,5];
	var tableau_des_chiffres_a_compare = [159,151,91,159,19,11,91,19,3,3,3,3,11519446,11519446,6,67,5];
	*/
	//-------------------------------------------------------------------------------------------------------------
	//
	do{
					//Partie Comparaison
		//1 passage de tableau	trouver le plus petit
		var plus_petit = tableau_des_chiffres_a_compare[1];
		for(var indice_tab = 0; indice_tab < tableau_des_chiffres_a_compare.length; indice_tab++){
			tableau_des_chiffres_a_compare[indice_tab] < plus_petit ? plus_petit = tableau_des_chiffres_a_compare[indice_tab] : "" ;
		}

		//1 passage de tableau voir combien de fois apparait le plus petit
		var compteur_plus_petit = 0;
		for(var indice_tab = 0; indice_tab < tableau_des_chiffres_a_compare.length; indice_tab++){
			tableau_des_chiffres_a_compare[indice_tab] == plus_petit ? compteur_plus_petit++ : "" ;
		}
				//Partie affichage Résultat 
		console.log("Le chiffre le plus petit du tableau est " + plus_petit + " et il apparait  " + compteur_plus_petit + " fois");
		console.log(tableau_des_chiffres_a_compare);
	//-------------------------------------------------------------------------------------------------------------
				//Partie Suppression
		//1 passage de tableau supprimmer
		var compteur_suppression = 0;
		do{
			for(var indice_tab = 0; indice_tab < tableau_des_chiffres_a_compare.length; indice_tab++){
				if (tableau_des_chiffres_a_compare[indice_tab] == plus_petit) {
					tableau_des_chiffres_a_compare.splice(indice_tab, 1);
					compteur_suppression ++; 
					indice_tab--; //pour retourner en arrière pour éviter de sauter une case après cette suppression	
				}
			}	
		}while(compteur_suppression < compteur_plus_petit)
	}while(tableau_des_chiffres_a_compare.length > 1)
	tableau_des_chiffres_a_compare.length == 1 ? console.log("Le chiffre le plus grand est " + tableau_des_chiffres_a_compare + " et il apparait 1 fois") : "";
	console.log("Tous les chiffres ont été triés du plus petit au plus grand");
	//penser à vider le tableau_des_chiffres_a_compare
}
