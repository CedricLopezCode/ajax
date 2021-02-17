//JS détecte tout seul quel type de variable c'est donc pas besoin de préciser int, float, string, array
/*  \ = caractère d'échappement 
 => le caractère suivant ne sera pas interprété
 => utile pour les '' et "" dans les phrases
 \n = retour à la ligne
 \t = tabulation //à éviter entre les +
 */

 $(document).ready(function(){});//permet d'attendre la fin du chargement de la page
 //nécessite jQuerry
		// Triple egal ===
var donnee_rentree = prompt("Chiffre = 2021 ?");

donnee_rentree == 2021 ? console.log("Prompt = Int avec ==") : console.log("== déjà différent");
donnee_rentree === 2021 ? console.log("Prompt = Int avec ===") : console.log("=== différent type");
// == compare juste ja valeur
/// === compare aussi le type


		//Fonctions Basiques

alert("Pop-up à valider pour continuer");//Aucune interaction possible tant qu'on valide pas// Sert surtout à débuguer
confirm("Voulez-vous vraiment supprimer ?"); //Demande une confirmation oui ou non
prompt("entrer votre nom"); //donne un champs de saisie pour rentrer = string
console.log("Console.log dans inpecter élément puis onglet console"); //comme alert mais plus discret car ne s'affiche pas sur l'écran et ne demande pas d'intéraction
