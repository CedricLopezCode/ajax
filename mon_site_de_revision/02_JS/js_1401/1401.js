

		//afficher toutes les tables de multiplication
for (table_de = 1; table_de <= 10; table_de++){
    console.log("\t\t\t Table de " + table_de)
    for(fois = 1; fois <= 10; fois++){
        console.log(table_de + "x" + fois + " = " + table_de*fois)
    }
}

	//tableau table de multiplication
var table_de_multiplication[10][10];
for (table_de = 1; table_de <= 10; table_de++){ 
	console.log("\t\t\t Table de " + table_de + " en cours");
	for(fois = 1; fois <= 10; fois++){
		console.log("\t\t\t Table de " + table_de + " en cours");
		table_de_multiplication[table_de][fois] = table_de * fois;
	}
}
for (table_de = 1; table_de <= 10; table_de++){
	console.log("\t\t\t Table de " + table_de)
	for(fois = 1; fois <= 10; fois++){
		console.log(table_de + "x" + fois + " = " + table_de_multiplication[table_de][fois]);
	}
}


						//Correction


	//résultat += nombre + " * " + multiplication + " = " + (nombre * multiplication);
	//console.log(resultat);


//----------------------------------------------------------------------------------------------

	 //Exo decrementation de 20 à 0 par pas de 2

//initialisation
var depart_compte_a_rebours = 0;
var decrementation = 0;
var comptage = 0;

//rentrée des valeurs
do{
	var valeur_entree = prompt("Entrez la valeur de départ du compte à rebours");
	parseInt(valeur_entree)%1 != 0 ? alert("Ce n'est pas un nombre") : depart_compte_a_rebours=parseInt(valeur_entree);
	//isNaN(valeur_entree) ? alert("Ce n'est pas un nombre") : depart_compte_a_rebours=parseInt(valeur_entree);
}while(depart_compte_a_rebours == 0)

do{
	var valeur_entree = prompt("Entrez la décrémentation voulue");
	parseInt(valeur_entree)%1 != 0 ? alert("Ce n'est pas un nombre") : decrementation=parseInt(valeur_entree);
	//isNaN(valeur_entree) ? alert("Ce n'est pas un nombre") : decrementation=parseInt(valeur_entree);
}while(decrementation == 0)

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

//-------------------------------------------------------------------------------------------
	//Essai Tableau raté
var tous_les_prenoms = ["cedric",			"nadia",			"sonia"]
var toutes_les_notes = [[20, 20, 20, 20], [10, 10, 10, 10], [2, 2, 2, 2]];
				
//var tous_les_eleves_avec_notes = [cedric,nadia,sonia];

for (eleve_numero = 0; eleve_numero < tous_les_prenoms.length; eleve_numero++){
	tous_les_eleves_avec_notes[tous_les_prenoms[eleve_numero]][toutes_les_notes[eleve_numero]];
	console.log(tous_les_eleves_avec_notes[eleve_numero]);
}