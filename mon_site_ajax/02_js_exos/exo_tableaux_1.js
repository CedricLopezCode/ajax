function exo_tableaux_1(){
	/*Soit le tableau suivant : Var semaine = [‘lundi’, ‘mar’, ‘mercredi’, ‘jeudi’, ‘vendredi’, ‘samedi’, ‘dimanc’] ;
	- Retirer la dernière valeur du tableau
	- Afficher les valeurs du tableau en utilisant la méthode document.write
	- Ajouter la valeur la valeur ‘dimanche’ à la fin du tableau
	- Remplacer le mar par mardi
	- Afficher le nombre de valeurs du tableau
	- Afficher la 5éme valeur
	Aide :
	https://developer.mozilla.org/en-US/docs/Web/API/Document/write
	https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/tableaux*/

	var semaine = ["lundi", "mar", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"] ;
	//tableau.pop() pour supprimer le dernier element du tableau
	//tableau.shift() si on veut supprimer la 1ère valeur du tableau
	console.log(semaine.pop()); //a faire pour voir quel élément a été supprimé
	console.log(semaine) ;

	//ajout à la fin du tableau
	semaine.push("dimanche")
	//tableau.unshift() si on veut rajouter une valeur au début du tableau
	console.log(semaine) ;

	//semaine[1] = "mardi";
	var index_mardi = semaine.indexOf("mar");
	console.log("index de mar = " + index_mardi);
	console.log("index de mar = " + index_mardi);
	//semaine[index_mardi] = "mardi";
	semaine[semaine.indexOf("mar")] = "mardi";
	console.log(semaine) ;
	console.log("Longueur du tableau: " + semaine.length) ;
	console.log("5 ème élément du tableau: " + semaine[5]) ;


	//------------------------------------------------------------------------------------
	// ecrit direct dans le html
	document.open();
	document.write(semaine);
	document.writeln(3);
	document.write(semaine);
	document.write("<div> div1" + semaine + "</div>");// permet de faire comme dans le html
	document.write("<div> div2" + semaine + "</div>");// permet de faire comme dans le html
	document.write("<div> div3" + semaine + "</div>");// permet de faire comme dans le html
	document.write("<span> span1" + semaine + "</span>");// permet de faire comme dans le html
	document.write("<span> span2" + semaine + "</span>");// permet de faire comme dans le html
	document.write("<span> span3" + semaine + "</span>");// permet de faire comme dans le html
	document.close();
	//-------------------------------------------------------------------------------
}
