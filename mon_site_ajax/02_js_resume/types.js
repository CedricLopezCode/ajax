		//Concaténation = mise à la suite

var chaine1 = "Salut";		var chaine2 = "Ca va ?";
chaine1.concat(chaine2); //au moins spécifique aux strings //console.log => SalutCa va?
var chiffre1 = 15;			var chiffre2 = 20;
//var concat_chiffre1 = chiffre1.concat(chiffre2); //pas possible car chiffre pas string
var chiffre1 = "15"; 		var chiffre2 = "20";
chiffre1.concat(chiffre2); //ok car intéprété comme string //console.log => 1520
var chiffre1 = 20; 		var chiffre2 = "20"; //console.log(chiffre1+chiffre2); => 2020

---------------------------------------------------------------------------------------------
		//Spécifique aux types

Texte_à_ecrire.toLowerCase() // pour mettre en minuscule
"Texte_à_ecrire".toLowerCase() // pour mettre en minuscule
Texte_à_ecrire.toUpperCase() // POUR METTRE EN MAJUSCULE
"Texte_à_ecrire".toUpperCase() // POUR METTRE EN MAJUSCULE
chaine1.concat(chaine2); //string  //console.log => SalutCa va?
chaine1.concat(chaine2).substring(2,8); //pour prendre les lettres de la 3ème à la 8eme //console.log => lutCa 
tableau.length	//return la longueur du tableau //Attention aux indice qui commence à 0
isNaN(valeur_entree) //isNan = is Not a Number  //Booléen donc soit true soit false

----------------------------------------------------------------------------------------------
	//Changement de type

parseInt(1527.4457)//tronque pour prendre seulement la partie entière
//parseFloat(5273.7558) //existe aussi mais en pratique très rare
//objet.toString() //pour convertir un objet en string ????????????????????????????

-----------------------------------------------------------------------------------------------------		
			//Utilisation fonction typique

	//Numéro de Téléphone

var numero = prompt("numéro à appeler");
//Attention le 0 au début des nombres est suppprimé entre la saisie et la comparaison de nombres donc:
	//Soit on passe par des string 
switch (numero){
	case "0606060606":
		console.log(numero);
		console.log("Par les string");
	break;
}

	//Vérifier qu'une saisie est bien un int

isNaN(valeur_entree) //isNan = is Not a Number  //Booléen donc soit true soit false
//true si c'est autre chose , false si c'est un nombre
//permet de vérifier que c'est bien un chiffre qui a été saisi

var on_veut_un_nombre = 0; //Attention à mettre une valeur impossible
do{
	var valeur_entree = prompt("Entrez la valeur de départ");
	isNaN(valeur_entree) ? alert("Ce n'est pas un nombre") : on_veut_un_nombre=parseInt(valeur_entree);
	//parseInt(valeur_entree)%1 != 0 ? alert("Ce n'est pas un nombre") : on_veut_un_nombre=parseInt(valeur_entree);
	//equivalente à la ligne au dessus pour vérifier que c'est bien un nombre
}while(on_veut_un_nombre == 0) //bien mettre la valeur initiale
