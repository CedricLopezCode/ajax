	//Exo Numéro de tel

var saisie_utilisateur_numero_a_appeler = prompt("entrer le nuléro que vous voulez appeler");
switch (saisie_utilisateur_numero_a_appeler){
	case "17":
		confirm("Vous voulez appeler la police ?");
	break;
	case "18":
		confirm("Vous voulez appeler les pompiers ?");
	break;
	case "0800":
		alert("Vous voulez appeler numéro vert");
	break;
	default: 
		alert("Ce n'est pas un numéro publique");
	break;
}

if(saisie_utilisateur_numero_a_appeler.substring(0,2) == "06" ){//pour prendre les lettres du début à la 2eme
	alert("Vous voulez appeler un portable");
}
else if(saisie_utilisateur_numero_a_appeler == "07"){
	alert("Vous voulez appeler un membre de votre famille");
}
else {
	alert("Vous voulez appeler quelqu'un");
}
saisie_utilisateur_numero_a_appeler == "123"? alert("Vous voulez appeler Cédric"):alert("Vous ne voulez pas appeler Cédric");
saisie_utilisateur_numero_a_appeler == "007"? console.log("Bond...\n\nJames Bond"): console.log("Ce n'est pas  James Bond");


	//Exo boucle

var index_while = 0;

while(index_while < 3){
	console.log(index_while);
	index_while ++;
	console.log("J'aime les boucles while")
}
var index_while = 0;

for (index_for = 0; index_for < 3; index_for++){
	console.log(index_for);
	console.log("J'aime les boucles for")
}
var index_do_while =0;
do{
	console.log(index_do_while);
	index_do_while ++;
	console.log("J'aime les boucles do while")
} while(index_do_while < 3)

//Tableaux
/*
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
*/