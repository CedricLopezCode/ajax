//Attention aux indices qui commencent à 0
var tableau vide = [];
var notes = [1, 2, 3, 4, 5]; 
//indices  	[0, 1, 2, 3, 4]
//Attention notes.length = 5 mais le dernier est notes[4]
var fruits = ["orange", "melon", "banane", "framboise", "fraise"];
//indices  	 [0,           1,       2,          3,          4]
var tableau = Array(10); //crée un tableau de 10
//mais en réalité tableau dynamique donc facile à modifier post
console.log(fruits[0]); // => orange
fruits.length //donne la longueur du tableau ==> 5
console.log(notes.length); //longueur du tableau ==> 5
console.log(notes[3]); // notes à lindice 3 ==> 4
console.log(notes.join()); // transforme en string
table.rows.length //compte le nombre de ligne
	//Parcourir un tableau en entier

for (ligne = 0; ligne < fruits.length; ligne++){
	console.log("for ligne " + (ligne+1));
	console.log(fruits[ligne]);
}
	//Ajouter supprimer et insérer

	//Supprimer le 1er ou dernier élément
tableau.pop(); //pour supprimer le dernier element du tableau
tableau.shift(); //si on veut supprimer la 1ère valeur du tableau
console.log(tableau.pop()); //a faire pour voir quel élément a été supprimé
//Attention ça répète le pop


//Ajouter au début ou à la fin du tableau
tableau.push("Dimanche") //ajouter un élément à la fin du tableau
tableau.unshift("Lundi") //Rajouter une valeur au début du tableau


// ecrit direct dans le html
document.open();
document.write(semaine.toString());
document.close();
	

	//splice
//Forme générique
//tableau.splice(indice, nombre_d_elements_a_sup, ajout1, ajout2); //ajout facultatif

//Supprimer des éléments
notes.splice(2, 3); console.log(notes); var notes = [1, 2, 3, 4, 5]; 
//Se place à l'indice 2 et supprime 3 valeurs
//supprime les indices 2, 3 et 4 == supprime les valeurs 3, 4, 5
// => [1, 2, 3, 4, 5]; 

//Ajouter des éléments
notes.splice(2, 0, 45,45,56,80);  console.log(notes); var notes = [1, 2, 3, 4, 5]; 
//Se place à l'indice 2, supprime 0 valeurs et ajoute les 4 valeurs AVANT
//ancienne valeur de l'indice 2 => nouvel indice = 2 + le nombre d'ajouts 
//                                        6      = 2 +    4
// => [1, 2, 45, 45, 56, 80, 3, 4, 5]; 

//Remplacer des éléments
notes.splice(2, 4, 45,45,56,80);  console.log(notes); var notes = [1, 2, 3, 4, 5]; 
//Se place à l'indice 2, supprime 4 valeurs et ajoute les 4 valeurs
// => [1, 2, 45,45,56,80]; 


	//Recherche d'un mot dans un tableau
var ligne = -1;
do{
	ligne ++;
} while(fruits[ligne] != "banane")

tableau.indexOf("mot recherché");//renvoie l'indice auquel il trouve l'élément recherché

	
		//Tableau en 2D
var table_de_multiplication = Array(10);
for (var i = 0; i < 10; i++)
{
 	table_de_multiplication[i] = Array(10);
}
		//tableau d'objet
var tableau_de_questions_reponses = [
	{
		question: "Est-ce que tu sais ce qu'est le JS ?",
		reponse: "javascript"
	},
	{
		question: "Est-ce que tu aimes le JS ?",
		reponse: "oui"
	},
	{
		question: "Le JavaScript est une évolution du Java ?",
		reponse: "non"
	},
	{
		question: "Le JavaScript est proche du Java ?",
		reponse: "non"
	},
	{
		question: "Le JS est un langage d'objet par prototypage ?",
		reponse: "oui"
	},
	{
		question: "Le JavaScript est souvent utilisé coté client ?",
		reponse: "oui"
	},
	{
		question: "Le JavaScript peut être utilisé coté client et serveur ?",
		reponse: "oui"
	},
	{
		question: "Quel est le nom du JavaScript utilisé coté serveur ?",
		reponse: "nodejs"
	}
]