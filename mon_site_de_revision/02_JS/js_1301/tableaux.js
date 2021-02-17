function tableaux(){
	//Tableaux

	var fruits = ["oranges", "melon", "oranges", "fraise", "peche"];
	for (ligne = 0; ligne < fruits.length; ligne++){
		console.log("for ligne " + (ligne+1));
		console.log(fruits[ligne]);
	}
	var ligne = -1;
	do{
		ligne ++;
		console.log("do while recherche ligne " + (ligne+1));
		console.log(fruits[ligne]);
		console.log("J'aime les " + fruits[ligne]);
	} while(fruits[ligne] != "fraise")

	ligne = -1;
	do{
		ligne ++;
		console.log("do while total ligne " + (ligne+1));
		console.log("J'aime les " + fruits[ligne]);
	} while(ligne < fruits.length-1)

	ligne = 0
	while(ligne < fruits.length){
		console.log("while total ligne " + (ligne+1));
		console.log("J'aime les " + fruits[ligne]);
		ligne++;
	}
	console.log("fin while affichage tableau");
}
