		//Fonctions Basiques

alert("Pop-up à valider pour continuer");//Aucune interaction possible tant qu'on valide pas// Sert surtout à débuguer
confirm("Voulez-vous vraiment supprimer ?"); //Demande une confirmation oui ou non
prompt("entrer votre nom"); //donne un champs de saisie pour rentrer = string
console.log("Console.log dans inpecter élément puis onglet console"); //comme alert mais plus discret car ne s'affiche pas sur l'écran et ne demande pas d'intéraction

	// ecrit direct dans le html //pas besoin de s'embeter à ouvrir la console
document.open();
document.write(XXXXX);
document.writeln(XXXXX); //ecrit avec un saut de ligne apres
document.write("<div>" + XXXXX + "</div>");// permet de faire comme dans le html
document.close();

// ===
var donnee_rentree = prompt("Chiffre = 2021 ?");

donnee_rentree == 2021 ? console.log("Prompt = Int avec ==") : console.log("== déjà différent");
donnee_rentree === 2021 ? console.log("Prompt = Int avec ===") : console.log("=== différent type");
// == compare juste ja valeur
/// === compare aussi le type

break; //sort de la boucle // tue le process 
//permet de sortir d'une boucle quand on a trouvé ce qu'on cherche
continue; //reprend le process (donc pour sauter une partie)

//Mathématique