				//Exo en autonomie

	//Exo 2: Affichage Calculatrice
/*
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
	------------------------------------------------------*//*
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
/* premier_nombre.addEventListener("mouseover", message_calculatrice_nombre_bootstrap);
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
*/
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
				//Version jQuery

	//Exo 2: Affichage Calculatrice

//Partie Affichage et calcul
var bouton_calcul = $("#calculer");
$(bouton_calcul).click(calculatrice);

function calculatrice(){
	recuperer_calculer_et_afficher();

	function recuperer_calculer_et_afficher(){

		var premier_nombre = $("#premier_nombre").val();
		var deuxieme_nombre = $("#deuxieme_nombre").val();
		var signe_operation = $("#signe_operation").val();
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


	function afficher_resultat(premier_nombre, deuxieme_nombre, signe_operation){
		alert(premier_nombre + " " + signe_operation + " " + deuxieme_nombre + " = " + faire_le_calcul(premier_nombre, deuxieme_nombre, signe_operation))
	}
	$("#premier_nombre").val(""); //pour effacer
	$("#deuxieme_nombre").val(""); //pour effacer
	event.preventDefault();
}

//Partie Apparition/Disparition
var apparition = $("#apparition_calculatrice");
var disparition = $("#disparition_calculatrice");
var affichage_calc = $("#calculatrice");

$(apparition).click(apparition_calc);
$(disparition).click(disparition_calc);
disparition_calc();
apparition_calc();
function apparition_calc(){
	$(affichage_calc).css({
		"background": "blue",
		"height": "200px",
		"padding": "20px"
		});
	$(affichage_calc).show();
	/*affichage_calc.style.display = "block";
	affichage_calc.style.background = "blue";
	affichage_calc.style.height = "200px";
	affichage_calc.style.padding = "20px";*/
}
function disparition_calc(){
	$(affichage_calc).hide();
	$(affichage_calc).css("display","none");
	//affichage_calc.style.display = "none";
	
}

//----------------------------------------------------------------------------------------
	//Exo 3 Message Calculatrice

/*var premier_nombre = document.querySelector("#premier_nombre");
var deuxieme_nombre = $("#deuxieme_nombre");
var signe_operation = $("#signe_operation");*/
var message_over = $("#message_over");
$(message_over).hide();

//************************  Choix à Faire  ******************************************
/*
//Evenements Version JS pur
premier_nombre.addEventListener("mouseover", message_calculatrice_nombre);
deuxieme_nombre.addEventListener("mouseover", message_calculatrice_nombre);
signe_operation.addEventListener("mouseover", message_calculatrice_signe);
premier_nombre.addEventListener("mouseout", message_calculatrice_out);
deuxieme_nombre.addEventListener("mouseout", message_calculatrice_out);
signe_operation.addEventListener("mouseout", message_calculatrice_out);
*//*
//Evenements Version Boostrap
 premier_nombre.addEventListener("mouseover", message_calculatrice_nombre_bootstrap);
deuxieme_nombre.addEventListener("mouseover", message_calculatrice_nombre_bootstrap);
signe_operation.addEventListener("mouseover", message_calculatrice_signe_bootstrap);
 premier_nombre.addEventListener("mouseout", message_calculatrice_out_bootstrap);
deuxieme_nombre.addEventListener("mouseout", message_calculatrice_out_bootstrap);
signe_operation.addEventListener("mouseout", message_calculatrice_out_bootstrap);
*/
//Evenements Version Boostrap + jQuerry
/*premier_nombre.addEventListener("mouseover", message_calculatrice_nombre_jquery);
premier_nombre.addEventListener("mouseover", message_calculatrice_nombre_jquery);
deuxieme_nombre.addEventListener("mouseover", message_calculatrice_nombre_jquery);
signe_operation.addEventListener("mouseover", message_calculatrice_signe_jquery);
premier_nombre.addEventListener("mouseout", message_calculatrice_out_jquery);
deuxieme_nombre.addEventListener("mouseout", message_calculatrice_out_jquery);
signe_operation.addEventListener("mouseout", message_calculatrice_out_jquery);*/
//Evenements Version Boostrap + jQuerry
premier_nombre.addEventListener("mouseover", message_calculatrice_nombre_bootstrap_jquery);
premier_nombre.addEventListener("mouseover", message_calculatrice_nombre_bootstrap_jquery);
deuxieme_nombre.addEventListener("mouseover", message_calculatrice_nombre_bootstrap_jquery);
signe_operation.addEventListener("mouseover", message_calculatrice_signe_bootstrap_jquery);
premier_nombre.addEventListener("mouseout", message_calculatrice_out_bootstrap_jquery);
deuxieme_nombre.addEventListener("mouseout", message_calculatrice_out_bootstrap_jquery);
signe_operation.addEventListener("mouseout", message_calculatrice_out_bootstrap_jquery);
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
//Functions Version jQuery sans Bootstrap
function message_calculatrice_nombre_jquery(){
	$(message_over).html("Saisir un nombre");
	$(message_over).css({
		"background":"yellow",
		"color":"blue",
		"padding":"5px",
		"height":"40px"
	});
}
function message_calculatrice_signe_jquery(){
	$(message_over).html("Saisir une Opération  + - * / % ");
	$(message_over).css({
		"background":"yellow",
		"color":"blue",
		"display":"flex",
		"padding":"5px",
		"height":"40px"
	});
}
function message_calculatrice_out_jquery(){
	$(message_over).html("");
	$(message_over).css("default");
}
//Functions Version Boostrap + jQuery
function message_calculatrice_nombre_bootstrap_jquery(){
	$(message_over).html("Saisir un nombre");
	$(message_over).show();
}
function message_calculatrice_signe_bootstrap_jquery(){
	$(message_over).html("Saisir une Opération  + - * / % ");
	$(message_over).show();
}
function message_calculatrice_out_bootstrap_jquery(){
	$(message_over).hide();
}
