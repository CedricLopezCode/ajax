function exo_tableaux_2(){
	/*
	Soit le tableau suivant :
	Var fruits = [‘Banane, ‘Raisin’, ‘Pomme’]
	Afficher la liste des fruits
	Demande à l’utilisateur de saisir un nom de fruits
	S’il est présent dans la liste, on lui affiche son choix et on retire le fruit de la liste
	Sinon on affiche un message ‘Indisponible’
	On affiche à nouveau la liste.
	*/

	var fruits = ["Banane", "Raisin", "Pomme"];
	console.log(fruits.join()); //transforme en string

	var fruit_recherche = prompt("Choisir un nom de fruit");
	var fruit_dans_la_liste = false;
	console.log(fruits.length);
	console.log(fruit_recherche);
	//--------------------------------------------------------------------------------
	/*
	var parcours_tableau = 0;
	do{
		fruit_recherche == fruits[parcours_tableau] ? fruit_dans_la_liste = true : "";
		fruit_dans_la_liste == true ? fruits.splice(parcours_tableau, 1) : "";
		parcours_tableau++;
	}while(fruit_dans_la_liste == 0 && parcours_tableau < fruits.length)
	fruit_dans_la_liste == true ? alert("Vous avez choisi: " + fruit_recherche + "\n Il reste donc : \n" + fruits) : alert("Indisponible");
	*/
	//ou
	/*
	console.log(fruits.indexOf(fruit_recherche));
	fruits.indexOf(fruit_recherche) == -1 ? alert("Indisponible") : fruits.splice(fruits.indexOf(fruit_recherche), 1);
	console.log("Il reste :");
	console.log(fruits);
	*/
	//ou

	for (var parcours_tableau = 0; parcours_tableau < fruits.length; parcours_tableau++){
		if(fruit_recherche == fruits[parcours_tableau]){
			fruits.splice(parcours_tableau, 1) ;
			fruit_dans_la_liste = true;
			break;
		}
	}
	fruit_dans_la_liste == true ? alert("Vous avez choisi: " + fruit_recherche + "\n Il reste donc : \n" + fruits) : alert("Indisponible");
	console.log(fruits);
	//----------------------------------------------------------------------------------------------------
}
