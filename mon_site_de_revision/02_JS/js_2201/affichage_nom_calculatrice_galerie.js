				//Exo en autonomie
	//Exo 1; nom utilisateur à afficher
var pseudo = "";
verifier_pseudo();

function verifier_pseudo(){
	var nom_utilisateur = document.getElementById("nom_utilisateur");
	while(pseudo == ""){
		pseudo = prompt("Saisir votre nom");
	}
	nom_utilisateur.innerHTML = pseudo;
}

	//Exo 2: Affichage Calculatrice

//Partie Affichage et calcul
var bouton_calcul = document.querySelector("#calculer");
bouton_calcul.onclick = calculatrice;

function calculatrice(){
	recuperer_calculer_et_afficher();
	/*------------------------------------------------------------------
	//partie evenement
	var submit = document.getElementById("submit");
	submits.onclick = recuperer_calculer_et_afficher();
	//submit.onclick = recuperer_calculer_et_afficher;
	------------------------------------------------------*/
	function recuperer_calculer_et_afficher(){
		console.log(document.querySelector("#premier_nombre"));
		var premier_nombre = document.querySelector("#premier_nombre").value;
		var deuxieme_nombre = document.querySelector("#deuxieme_nombre").value;
		var signe_operation = document.querySelector("#signe_operation").value;
		afficher_resultat(premier_nombre, deuxieme_nombre, signe_operation);
	}
	function faire_le_calcul(premier_nombre, deuxieme_nombre, signe_operation){
		var resultat;
		switch(signe_operation){
			case "+":
				resultat = parseInt(premier_nombre) + parseInt(deuxieme_nombre);
			break;
			case "-":
				resultat = premier_nombre - deuxieme_nombre;
			break;
			case "*":
				resultat = premier_nombre * deuxieme_nombre;
			break;
			case "/":
				resultat = premier_nombre / deuxieme_nombre;
			break;
			case "%":
				resultat = premier_nombre % deuxieme_nombre;
			break;
			default:
				alert("erreur");
			break;
		}

		return resultat;
	}
	//console.log(faire_le_calcul(3,5,"*"));

	function afficher_resultat(premier_nombre, deuxieme_nombre, signe_operation){
		alert(premier_nombre + " " + signe_operation + " " + deuxieme_nombre + " = " + faire_le_calcul(premier_nombre, deuxieme_nombre, signe_operation))
	}
	document.querySelector("#premier_nombre").value = ""; //pour effacer
	document.querySelector("#deuxieme_nombre").value = ""; //pour effacer
	//return false;//pour pas que ça recharge la page  //mais à éviter car on s'attend à une fonction plus haut
	event.preventDefault(); //pour pas que ça recharge la page
}

//Partie Apparition/Disparition
var apparition = document.querySelector("#apparition_calculatrice");
var disparition = document.querySelector("#disparition_calculatrice");
var affichage_calc = document.querySelector("#calculatrice");

apparition.onclick = apparition_calc;
disparition.onclick = disparition_calc;
apparition_calc();
disparition_calc();

function apparition_calc(){
	affichage_calc.style.display = "block";
	affichage_calc.style.background = "blue";
	affichage_calc.style.height = "200px";
	affichage_calc.style.padding = "20px";
}
function disparition_calc(){
	affichage_calc.style.display = "none";
	
}

//----------------------------------------------------------------------------------------
	//Exo 3 Message Calculatrice

var premier_nombre = document.querySelector("#premier_nombre");
var deuxieme_nombre = document.querySelector("#deuxieme_nombre");
var signe_operation = document.querySelector("#signe_operation");
var message_over = document.querySelector("#message_over");

//************************  Choix à Faire  ******************************************
/*
//Evenements Version JS pur
 premier_nombre.addEventListener("mouseover", message_calculatrice_nombre);
deuxieme_nombre.addEventListener("mouseover", message_calculatrice_nombre);
signe_operation.addEventListener("mouseover", message_calculatrice_signe);
 premier_nombre.addEventListener("mouseout", message_calculatrice_out);
deuxieme_nombre.addEventListener("mouseout", message_calculatrice_out);
signe_operation.addEventListener("mouseout", message_calculatrice_out);
*/
//Evenements Version Boostrap
 premier_nombre.addEventListener("mouseover", message_calculatrice_nombre_bootstrap);
deuxieme_nombre.addEventListener("mouseover", message_calculatrice_nombre_bootstrap);
signe_operation.addEventListener("mouseover", message_calculatrice_signe_bootstrap);
 premier_nombre.addEventListener("mouseout", message_calculatrice_out_bootstrap);
deuxieme_nombre.addEventListener("mouseout", message_calculatrice_out_bootstrap);
signe_operation.addEventListener("mouseout", message_calculatrice_out_bootstrap);

//*************************************************************************************

//Functions Version JS pur
function message_calculatrice_nombre(){
	message_over.innerHTML = "Saisir un nombre";
	message_over.style.background = "yellow";
	message_over.style.color = "blue";
	message_over.style.padding = "5px";
	message_over.style.height = "40px";
}
function message_calculatrice_signe(){
	message_over.innerHTML = "Saisir une Opération  + - * / % ";
	message_over.style.background = "yellow";
	message_over.style.color = "blue";
	message_over.style.display = "flex";
	message_over.style.padding = "5px";
	message_over.style.height = "40px";
}
function message_calculatrice_out(){
	message_over.innerHTML = "";
	//message_over.style.background = "none";
	//message_over.style.color = "none";
	//message_over.style.padding = "none";
	//message_over.style.height = "none";
	message_over.style = "default";
}

//Functions Version Boostrap
function message_calculatrice_nombre_bootstrap(){
	message_over.innerHTML = "Saisir un nombre";
	message_over.classList.toggle("d-none");
}
function message_calculatrice_signe_bootstrap(){
	message_over.innerHTML = "Saisir une Opération  + - * / % ";
	message_over.classList.toggle("d-none");
}
function message_calculatrice_out_bootstrap(){
	message_over.classList.toggle("d-none");
}

//-----------------------------------------------------------------------
	//Exo 4: Affichage Galerie 

var les_miniatures = document.querySelectorAll(".miniatures");
var grande_image = document.querySelector("#article_grande_image").innerHTML;
var la_miniature = document.querySelector(".miniatures").innerHTML;
/*
les_miniatures.onclick = document.querySelector(".miniatures");
les_miniatures.onmouseover = document.querySelector(".miniatures");

console.log(les_miniatures);
console.log(les_miniatures[3]);
console.log(les_miniatures[3].innerHTML);
console.log(grande_image);
console.log(grande_image.outerHTML);
function recup_id(){

}
function agrandir(){

	//grande_image = les_miniatures[]
	grande_image.classList.remove("miniatures");
}
*/
//les attributs
var grande_image = document.querySelector(".grande_image");//console.log(grande_image);
var src_grande_image = grande_image.getAttribute("src");//console.log(src_grande_image);
//les_miniatures.onclick = echange_src(this); //ne marche pas car this que depuis html
function echange_src(miniature_selectionnee){
	var src_miniature = miniature_selectionnee.getAttribute("src");//console.log(src_miniature);
	grande_image.setAttribute("src", src_miniature);//console.log(grande_image);
}
function echange_src_js(){
	var src_miniature = this.getAttribute("src");//console.log(src_miniature);
	grande_image.setAttribute("src", src_miniature);//console.log(grande_image);
}
//--------------------------------------------------------------------------------
//Correction
var tableau_toutes_les_images = document.querySelectorAll(".miniatures");

function clique(){
	var getSrc = this.getAttribute("src");
	grande_image = '<img src="' + getSrc+'">';	

}
for(var index = 0; index < tableau_toutes_les_images.length; index++){
	tableau_toutes_les_images[index].addEventListener("click", clique);
}
