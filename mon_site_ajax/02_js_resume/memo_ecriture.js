
//JS détecte tout seul quel type de variable c'est donc pas besoin de préciser int, float, string, array
/*  \ = caractère d'échappement 
 => le caractère suivant ne sera pas interprété
 => utile pour les '' et "" dans les phrases
 \n = retour à la ligne
 \t = tabulation //à éviter entre les +
 */
 ----------------------------------------------------------------------------------------------------
--------------Pas fonctionnel sans mise en commentaire, ajout de var et de console.log()----------------
-----------------------------------------------------------------------------------------------------

				//Généralités
		//Fonctions-type

alert("Pop-up à valider pour continuer");//Aucune interaction possible tant qu'on valide pas// Sert surtout à débuguer
confirm("Voulez-vous vraiment supprimer ?"); //Demande une confirmation oui ou non
prompt("entrer votre nom"); //donne un champs de saisie pour rentrer = string
console.log("Console.log dans inpecter élément puis onglet console"); //comme alert mais plus discret car ne s'affiche pas sur l'écran et ne demande pas d'intéraction

	

		//Portée des variables

function portee_des_variables() {var test = 7;	return test;}
console.log(portee_des_variables()); //marche car le return dans la fonction
//console.log(test); //ne marche pas car la variable n'existe pas en dehors de la fonction = variable locale

------------------------------------------------------------------------------------------------
		//Conditions

if(nombre > 5){
	console.log("Ton chiffre est supérieur à 5");
}
else if(nombre < 5){
	console.log("Ton chiffre est inférieur à 5");
}
else{
	console.log("Ton chiffre est égal à 5");
}

	//Ternaires = Conditions simple en 1 lignes

var nombre = 8;
nombre > 5 ? console.log("Vrai") : console.log("Faux"); //Vrai donc prend le 1er après le ? (avant les :)
nombre = 2;
nombre > 5 ? console.log("Vrai") : console.log("Faux"); //Faux donc prend le 2eme après le ?(Après les :)

	//Switch case = comparaison valeur exacte

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
switch (numéro_du_jour){ //si on met 1 il va sortir tous les jours de la semaine + le default.....
	case 1: //valeurs exactes que peut prendre cette variable
		console.log("Lundi");
	case 2:
		console.log("Mardi");
	case 7:
		console.log("Dimanche");
	default: 
		console.log("Ce n'est pas un jour de la semaine");
	break;
}
switch (numéro_du_jour){ //....Mais ça peut être volontaire
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
--------------------------------------------------------------------------------------------------
		//Les boucles

	//Boucles for //pour un nombre "connu" de passages
for (index_for = 0; index_for < 3; index_for++) { //(Début, Fin, changement entre 2 passage)
	console.log(index_for);
}

	//Boucles while //90% du temps
var index_while = 0;//Attention à pas initialisé dans la boucle sinon boucle infini
while(index_while < 3){ //Condition d'arret 
	console.log(index_while);
	index_while ++; //Attention à bien incrémenter dans la boucle sinon boucle infini
}

	//Boucles do while //si on veut qu'elle s'exécute au moins 1 fois car vérification faite après
var index_do_while = 0;//Attention à pas initialisé dans la boucle sinon boucle infini
do{
	console.log(index_do_while);
	index_do_while ++; //Attention à bien incrémenter dans la boucle sinon boucle infini
} while(index_do_while < 3)//Condition d'arret
--------------------------------------------------------------------------------------------------
		//Tableaux 
		//Attention aux indices qui commencent à 0

var notes = [1, 2, 3, 4, 5]; //Attention notes.length = 5 mais le dernier est notes[4]
//indices  	[0, 1, 2, 3, 4]
var fruits = ["orange", "melon", "banane", "framboise", "fraise"];
//indices  	 [0,           1,       2,          3,          4]
var tableau = Array(10); //crée un tableau de 10, mais posibilité de changer sa taille ensuite
console.log(fruits[0]); // => orange
fruits.length //donne la longueur du tableau ==> 5
console.log(notes.length); //longueur du tableau ==> 5
console.log(notes[3]); // notes à lindice 3 ==> 4

	//Parcourir un tableau en entier

for (ligne = 0; ligne < fruits.length; ligne++){
	console.log("for ligne " + (ligne+1));
	console.log(fruits[ligne]);
}
	//Ajouter supprimer et insérer

	//Forme générique
//tableau.splice(indice, nombre_d_elements_a_sup, ajout1, ajout2); //ajout facultatif
	//Supprimer des éléments
notes.splice(2, 3); //Se place à l'indice 2 et supprime 3 valeurs

	//Ajouter des éléments
notes.splice(2, 0, 45,45,56,80); //Se place à l'indice 2, supprimme 0 valeurs et ajoute les 4 valeurs AVANT

	//Remplacer des éléments
notes.splice(2, 4, 45,45,56,80); //Se place à l'indice 2, supprimme 4 valeurs et ajoute les 4 valeurs

	//Recherche d'un mot dans un tableau
var ligne = -1;
do{
	ligne ++;
} while(fruits[ligne] != "banane")

-----------------------------------------------------------------------------------------------
	//Concaténation = mise à la suite

var chaine1 = "Salut";		var chaine2 = "Ca va ?";
chaine1.concat(chaine2); //au moins spécifique aux strings //console.log => SalutCa va?
var chiffre1 = 15;			var chiffre2 = 20;
//var concat_chiffre1 = chiffre1.concat(chiffre2); //pas possible car chiffre pas string
var chiffre1 = "15"; 		var chiffre2 = "20";
chiffre1.concat(chiffre2); //ok car intéprété comme string //console.log => 1520
var chiffre1 = 20; 		var chiffre2 = "20"; //console.log(chiffre1+chiffre2); => 2020


		//Spécifique aux types

chaine1.concat(chaine2); //string  //console.log => SalutCa va?
chaine1.concat(chaine2).substring(2,8); //pour prendre les lettres de la 3ème à la 8eme //console.log => lutCa 
tableau.length	//return la longueur du tableau //Attention aux indice qui commence à 0
isNaN(valeur_entree) //isNan = is Not a Number  //Booléen donc soit true soit false

	//Changement de type

parseInt(1527.4457)//tronque pour prendre seulement la partie entière
//parseFloat(5273.7558) //existe aussi mais en pratique très rare
//objet.toString() //pour convertir un objet en string ????????????????????????????
Texte_à_ecrire.toLowerCase() // pour mettre en minuscule
"Texte_à_ecrire".toLowerCase() // pour mettre en minuscule
Texte_à_ecrire.toUpperCase() // POUR METTRE EN MAJUSCULE
"Texte_à_ecrire".toUpperCase() // POUR METTRE EN MAJUSCULE

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

//---------------------------------------------------------------------------------//
		//Zone de test


//---------------------------------------------------------------------------------//
	//Test pour memo
 var test = //à mettre devant la fonction à tester
	console.log(test);// vérifier à la sortie
