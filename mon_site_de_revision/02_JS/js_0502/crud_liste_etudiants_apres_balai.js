	//Flux normal Données Générale
var liste_des_etudiants = [
	{prenom : "a", nom : "aaaaa",email : "aaa@aaa" },
	{prenom : "b", nom : "bbbbb",email : "bbb@bbb" },
	{prenom : "c", nom : "ccccc",email : "ccc@ccc" },
	{prenom : "d", nom : "ddddd",email : "ddd@ddd" },
	{prenom : "e", nom : "eeeee",email : "eee@eee" },
	{prenom : "f", nom : "fffff",email : "fff@fff" },
	{prenom : "g", nom : "ggggg",email : "ggg@ggg" },
	{prenom : "h", nom : "hhhhh",email : "hhh@hhh" },
	{prenom : "i", nom : "iiiii",email : "iii@iii" },
	{prenom : "j", nom : "jjjjj",email : "jjj@jjj" },
	{prenom : "k", nom : "kkkkk",email : "kkk@kkk" },
	{prenom : "l", nom : "lllll",email : "lll@lll" },
	{prenom : "m", nom : "mmmmm",email : "mmm@mmm" },
	{prenom : "n", nom : "nnnnn",email : "nnn@nnn" },
	{prenom : "o", nom : "ooooo",email : "ooo@ooo" },
	{prenom : "p", nom : "ppppp",email : "ppp@ppp" },
	{prenom : "q", nom : "qqqqq",email : "qqq@qqq" },
	{prenom : "r", nom : "rrrrr",email : "rrr@rrr" },
	{prenom : "s", nom : "sssss",email : "sss@sss" },
	{prenom : "t", nom : "ttttt",email : "ttt@ttt" },
	{prenom : "u", nom : "uuuuu",email : "uuu@uuu" },
	{prenom : "v", nom : "vvvvv",email : "vvv@vvv" },
	{prenom : "w", nom : "wwwww",email : "www@www" },
	{prenom : "x", nom : "xxxxx",email : "xxx@xxx" },
	{prenom : "y", nom : "yyyyy",email : "yyy@yyy" },
	{prenom : "z", nom : "zzzzz",email : "zzz@zzz" }
];
var error = 0;
var tableau_liste;

//***************************************************************
		//Flux document ready
$(document).ready(function(){

tableau_liste = $("tbody")[0];
	//Affichage initial
var affichage_liste_etudiants = $("#affichage_liste_etudiants");
toggle_table_form();
r_de_crud();

	//Create
$("#bouton_apparition_formulaire").on("click", c_de_crud);
//$("#bouton_apparition_formulaire").click(c_de_crud);

	//Read
r_de_crud();

	//Update
//u_de_crud();

	//Delete
//d_de_crud();

}) //Fin document ready
//***************************************************************
$(function(){ //pas ready = anonyme

}) //Fin anonyme
//***************************************************************
		//Functions
//Create
function c_de_crud(){
	//console.log("C de CRUD");
	creer_formulaire("ajout");
	var nouvel_eleve = {prenom : "", nom : "", email : "" };
	$("#formulaire_ajout").click(function(){
		if(verif_formulaire()){
			nouvel_eleve.prenom = $("input").first().val();
			nouvel_eleve.nom = $("#nom_ajout").val();
			nouvel_eleve.email = $("input").last().val();
			liste_des_etudiants.push(nouvel_eleve);
			$("#les_formulaires").html("");
			ajout_1_ligne();
		}
	});
}
function creer_formulaire(utilisation){ //modif ou ajout
	$("#les_formulaires").html("");
	var bg;
	var mot_bouton;
	var id = "formulaire_" + utilisation;
	switch(utilisation){
		case "ajout":
			bg = "bg-info";
			mot_bouton = "Ajouter";
		break;
		case "modif":
			bg = "bg-warning";
			console.log("bg-warning ok");
			mot_bouton = "Modifier";
		break;
		default:
			console.log("modif ou ajout, pas autre chose");
		break;
	}
	var nouveau_formulaire = '<form id="'+ id +'" class="d-flex flex-column align-items-center w-auto p-4 ' + bg + '">			<div class="mb-3 d-flex align-self-end">				<label class="form-label fs-5 me-3">Prénom:</label>				<input type="text" class="form-control w-auto" id="prenom_ajout" placeholder="Prénom">			</div>			<div class="mb-3 d-flex align-self-end ">				<label class="form-label fs-5 me-3">Nom de Famille:</label>				<input type="text" class="form-control w-auto" id="nom_ajout" placeholder="Nom de Famille">			</div>			<div class="mb-3 d-flex align-self-end ">				<label class="form-label fs-5 me-3">E-mail:</label>				<input type="email" class="form-control w-auto" id="email_ajout" placeholder="E-mail">			</div>			<button type="submit" class="btn btn-success w-25 mt-3" id="submit">' + mot_bouton + '</button>		</form>';
	$("#les_formulaires").append(nouveau_formulaire);
	$("#les_formulaires").scroll();
}
function verif_formulaire(){
	event.preventDefault();
	error = 0;
	var les_inputs = $("input");
		/*Correction
	if(prenom === "" ||nom === ""||email === ""){}*/
	les_inputs.each(function(index){
		if($(les_inputs[index]).val() == ""){
			$(les_inputs[index]).css("background", "red");
			error++;
		}else{
			$(les_inputs[index]).css("background", "lime");
		}	
	});
	if(liste_des_etudiants.length > 0){
		verif_email_pas_deja_resent() ? error++ : "";
	}
	return error == 0 ? true : false;
}
function verif_email_pas_deja_resent(){
	var doublon_email = false;
	$(liste_des_etudiants).each(function(index){
		if (($(liste_des_etudiants)[index]).email == $("input").last().val()){
			$("input").last().css("background", "orange");
			alert("email dejà présent dans la liste");
			doublon_email = true;
		}
	});
	return doublon_email;
}
//Read
function r_de_crud(){
	//console.log("R de CRUD");
	$(tableau_liste).html("");
	affichage_lignes();
}
function toggle_table_form(){
	if(liste_des_etudiants[0] === undefined){
		$(affichage_liste_etudiants).hide();
		$("#titre").append("<h2 id='promo_vide'>Pas d'étudiants inscrits </h2>");
		c_de_crud();
	}
	else{
		$(affichage_liste_etudiants).show();
		$("#promo_vide").remove();
		r_de_crud();
	}
}
function ajout_1_ligne(){
	var index_max = liste_des_etudiants.length - 1;
	$(tableau_liste).append("<tr></tr>");
	var place = '<th scope="row">' + (index_max+1) + '</th>';
	var td_prenom = '<td class="prenom">' + ($(liste_des_etudiants)[index_max]).prenom + '</td>';
	var td_nom = '<td class="nom">' + ($(liste_des_etudiants)[index_max]).nom + '</td>';
	var td_email = '<td class="email">' + ($(liste_des_etudiants)[index_max]).email + '</td>';
	var td_update = '<td class="btn bouton_modif w-50 btn-warning"><a 		href="#les_formulaires">		<img src="../Ressources_Test/Icones/Text_Editor.ico" width="20px">	</a><img src="../Ressources_Test/Icones/Text_Editor.ico" width="20px"></td>';
	var td_delete = '<td class="btn bouton_sup w-50 btn-danger"><img src="../Ressources_Test/Icones/xScope.ico" width="20px"></td>';//xScope tete_de_mort
	$(tableau_liste).children().last().append(place,td_prenom,td_nom,td_email,td_update,td_delete);
	le_boutons_modif_suppr(index_max);
	toggle_table_form();
}
function affichage_ligne(index){
	$(tableau_liste).append("<tr></tr>");
	var place = '<th scope="row">' + (index+1) + '</th>';
	var td_prenom = '<td class="prenom">' + ($(liste_des_etudiants)[index]).prenom + '</td>';
	var td_nom = '<td class="nom">' + ($(liste_des_etudiants)[index]).nom + '</td>';
	var td_email = '<td class="email">' + ($(liste_des_etudiants)[index]).email + '</td>';
	var td_update = '<td class="btn bouton_modif w-50 btn-warning"><a 		href="#les_formulaires">		<img src="../Ressources_Test/Icones/Text_Editor.ico" width="20px">	</a></td>';
	var td_delete = '<td class="btn bouton_sup w-50 btn-danger"><img src="../Ressources_Test/Icones/xScope.ico" width="20px"></td>';//xScope tete_de_mort
	$(tableau_liste).children().last().append(place,td_prenom,td_nom,td_email,td_update,td_delete);
	le_boutons_modif_suppr(index);
}
function le_boutons_modif_suppr(index){
	var le_boutons_modif = $(".bouton_modif");
	$(le_boutons_modif[index]).bind("click", u_de_crud);
	var le_boutons_sup = $(".bouton_sup");
	$(le_boutons_sup[index]).bind("click", d_de_crud);
}
function affichage_lignes(){
	$(liste_des_etudiants).each(function(index){
		affichage_ligne(index);
	})
}

//Update
function u_de_crud(){
	var tr_parent = $(this).parents("tr");
	var position = $(tableau_liste).children().index(tr_parent);
	//recup data tableau[index].val x3
	var prenom_avant = liste_des_etudiants[position].prenom;
	var nom_avant = liste_des_etudiants[position].nom;
	var email_avant = liste_des_etudiants[position].email;
	//input.placeholder = data
	creer_formulaire("modif");
	var formulaire_modif = $("#formulaire_modif");
	$("#prenom_ajout").val(prenom_avant);
	$("#nom_ajout").val(nom_avant);
	$("#email_ajout").val(email_avant);
	//verif formulaire
	var nouvel_eleve = {prenom : prenom_avant, nom : nom_avant,email : email_avant };
	$(formulaire_modif).on("submit", function(){
		liste_des_etudiants.splice(position,1);
		if(verif_formulaire()){
			nouvel_eleve.prenom = $("input").first().val();
			nouvel_eleve.nom = $("#nom_ajout").val();
			nouvel_eleve.email = $("input").last().val();
			liste_des_etudiants.push(nouvel_eleve);
			$("#les_formulaires").html("");
			ajout_1_ligne();
		}
		r_de_crud();
	});	
}//fin de U de CRUD
//Delete
function d_de_crud(){
	console.log("D de CRUD");
	if (confirm("Voulez-vous vraiment supprimer ?")){
		var tr_parent = $(this).parents("tr");
		var position = $(tableau_liste).children().index(tr_parent);
		liste_des_etudiants.splice(position,1);
	}
	toggle_table_form();
	r_de_crud();
}




