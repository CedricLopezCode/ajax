$(document).ready(function(){});//permet d'attendre la fin du chargement de la page
function test_sans_argument(){
	console.log("test");
}
//meme si on voit pas en fait elle return true par defaut
function test_avec_argument(arg_1){
	console.log(arg_1);
}
function test_avec_argument_par_defaut(arg_1, arg_2 = 2){
	console.log(arg_1);
	console.log(arg_2);
}
test_sans_argument();
test_avec_argument("1");
test_avec_argument_par_defaut(3, 4);
test_avec_argument_par_defaut(5); //si pas précisé le arg_2 prend la valeur par défaut

function test_avec_return(arg_1, arg_2 = 2){
	return arg_1 + arg_2;
}
console.log(test_avec_return(15,3));

	//return false;//pour pas que ça recharge la page  //mais à éviter car on s'attend à une fonction plus haut
	event.preventDefault(); //pour pas que ça recharge la page

	

		//Portée des variables

function portee_des_variables() {var test = 7;	return test;}
console.log(portee_des_variables()); //marche car le return dans la fonction
//console.log(test); //ne marche pas car la variable n'existe pas en dehors de la fonction = variable locale

	//Courante
Math.round(X);//arrondi
Math.random(); //Aléatoire entre 0 et 1 (1 exclu)

replace("a enlever", "à mettre");

style="animation-duration: 1s; animation-delay: 300ms";// changer les delay et la vitesse d'animation
setTimeout(function(){}, 6000); //met un delay avant de lancer