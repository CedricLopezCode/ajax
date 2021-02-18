function tables_de_multiplication(){

			//afficher toutes les tables de multiplication
	for (table_de = 1; table_de <= 10; table_de++){
	    console.log("\t\t\t Table de " + table_de)
	    for(fois = 1; fois <= 10; fois++){
	        console.log(table_de + "x" + fois + " = " + table_de*fois)
	    }
	}
	//-------------------------------------------------------------------------------------------------------
		//tableau table de multiplication
	//creation tableau en 2D de taille connue
	var table_de_multiplication = Array(10);
	for (var i = 0; i < 10; i++)
	{
	 	table_de_multiplication[i] = Array(10);
	}

	console.log(table_de_multiplication);
	//apparait dejà rempli parce que ce sont des conditions basique qu'il anticipe

	//Remplissage du tableau
	for (table_de = 1; table_de <= 10; table_de++){ 
		console.log("\t\t\t Table de " + table_de + " en cours");
		for(fois = 1; fois <= 10; fois++){
			table_de_multiplication[table_de-1][fois-1] = table_de * fois;
		}
	}
	console.log(table_de_multiplication);
	//------------------------------------------------------------------------------------------------
	/*				//echec

	//creation tableau en 2D de taille inconnue
	var table_de_multiplication = [[]];
	console.log("creation");
	console.log(table_de_multiplication);
	console.log("Dejà rempli ?!");
	console.log(table_de_multiplication);

	//Remplissage du tableau
	for (table_de = 1; table_de <= 10; table_de++){ 
		console.log("\t\t\t Table de " + table_de + " en cours");
		for(fois = 1; fois <= 10; fois++){
			table_de_multiplication[table_de-1].splice(fois-1,0, table_de * fois);
		}
	}
	*/
	//-------------------------------------------------------------------------------------------------


	//Affichage du tableau
	for (table_de = 1; table_de <= 10; table_de++){
		console.log("\t\t\t Table de " + table_de)
		for(fois = 1; fois <= 10; fois++){
			console.log(table_de + " x " + fois + " = " + table_de_multiplication[table_de-1][fois-1]);
		}
	}
}


						//Correction


	//résultat += nombre + " * " + multiplication + " = " + (nombre * multiplication);
	//console.log(resultat);


