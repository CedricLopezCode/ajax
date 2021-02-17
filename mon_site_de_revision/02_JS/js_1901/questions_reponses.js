
/*Résultat attendu :
Dans console.log
Bonne réponse pour la question Est-ce que tu aimes le JavaScript ?
Faux! La bonne réponse à la question Le JavaScript est une évolution du Java ? était Non*/
// création du tableau
/*
var question_reponse_1 = {
	question: "Est-ce que tu sais ce qu'est le JS ?",
	reponse: "javascript"
}
var question_reponse_2 = {
	question: "Est-ce que tu aimes le JS ?",
	reponse: "oui"
}
var question_reponse_3 = {
	question: "Le JavaScript est une évolution du Java ?",
	reponse: "non"
}
var question_reponse_4 = {
	question: "Le JavaScript est proche du Java ?",
	reponse: "non"
}
var question_reponse_5 = {
	question: "Le JS est un langage d'objet par prototypage ?",
	reponse: "oui"
}
var question_reponse_6 = {
	question: "Le JavaScript est souvent utilisé coté client ?",
	reponse: "oui"
}
var question_reponse_7 = {
	question: "Le JavaScript peut être utilisé coté client et serveur ?",
	reponse: "oui"
}
var question_reponse_8 = {
	question: "Quel est le nom du JavaScript utilisé coté serveur ?",
	reponse: "nodejs"
}
var tableau_de_questions_reponses = [question_reponse_1, question_reponse_2, question_reponse_3, question_reponse_4, question_reponse_5, question_reponse_6, question_reponse_7, question_reponse_8];
*/
//version plus simple et évite de nommer plein de questions
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
console.log(tableau_de_questions_reponses);
//Recherche de l'indice de la question j'aime
var index_aime_js;
//tableau_de_questions_reponses.indexOf("Est-ce que tu aimes le JS ?"); //impossible car question n'a pas d'indice
for(var index = 0; index < tableau_de_questions_reponses.length; index++){
	if(tableau_de_questions_reponses[index].question == "Est-ce que tu aimes le JS ?" ){
		index_aime_js = index;
		break;
	} 
}
console.log(index_aime_js);


//Affichage du  questionnaire
var reponses_donnees = Array(tableau_de_questions_reponses.length);
for(var index = 0; index < tableau_de_questions_reponses.length; index++){
	var saisie_utilisateur = prompt(tableau_de_questions_reponses[index].question);
	reponses_donnees[index] = saisie_utilisateur.toLowerCase();
	console.log(tableau_de_questions_reponses.question);
	if(index == index_aime_js  && reponses_donnees[index] != "oui"){
		alert("Quoi ??!! Qu'est-ce que tu me dis !!!!");
	} 
}
console.log(reponses_donnees);

//Comparaison et Affichage
var compteur_bonne_reponse = 0;
for(var index = 0; index < tableau_de_questions_reponses.length; index++){
	if(reponses_donnees[index] == tableau_de_questions_reponses[index].reponse){
		document.write("<h1>Bonne réponse pour la question:</h1> <h2>" + tableau_de_questions_reponses[index].question + "</h2>");
		compteur_bonne_reponse++;
	}
	else{
		document.write("<h1>Faux !!!</h1> <h2> A la question: " + tableau_de_questions_reponses[index].question + "</h2>");
		document.write("<h2>La réponse était: " + tableau_de_questions_reponses[index].reponse + "</h2>");
	}
}

//Score Total
document.writeln("<h1>Vous avez un score de: " + compteur_bonne_reponse +" / " + tableau_de_questions_reponses.length + "</h1>");

