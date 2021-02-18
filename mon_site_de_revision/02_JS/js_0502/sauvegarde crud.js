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
var formulaire_ajout = $("#formulaire_ajout");
$(formulaire_ajout).hide();
r_de_crud();

	//Create
$("#bouton_apparition_formulaire").on("click", function(){formulaire_ajout.show();});
formulaire_ajout.submit(c_de_crud);

	//Read
r_de_crud();

	//Update
//les_les_boutons_modif_suppr();


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
	var nouvel_eleve = {prenom : "", nom : "",email : "" };
	if(verif_formulaire()){
		nouvel_eleve.prenom = $("input").first().val();
		nouvel_eleve.nom = $("#nom_ajout").val();
		nouvel_eleve.email = $("input").last().val();
		liste_des_etudiants.push(nouvel_eleve);
		$("form").hide();
		ajout_1_ligne();
	}
}
function verif_formulaire(){
	//preventDefault();
	event.preventDefault();
	error = 0;
	var les_inputs = $("input");
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
	toggle_table_form();
	affichage_lignes();
}
function toggle_table_form(){
	if(liste_des_etudiants[0] === undefined){
		$(affichage_liste_etudiants).hide();
		$("#titre").append("<h2 id='promo_vide'>Pas d'étudiants inscrits </h2>");
		$(formulaire_ajout).show();
	}
	else{
		$(affichage_liste_etudiants).show();
		$("#promo_vide").remove();
	}
}
function ajout_1_ligne(){
	var index_max = liste_des_etudiants.length - 1;
	$(tableau_liste).append("<tr></tr>");
	var place = '<th scope="row">' + (index_max+1) + '</th>';
	var td_prenom = '<td class="prenom">' + ($(liste_des_etudiants)[index_max]).prenom + '</td>';
	var td_nom = '<td class="nom">' + ($(liste_des_etudiants)[index_max]).nom + '</td>';
	var td_email = '<td class="email">' + ($(liste_des_etudiants)[index_max]).email + '</td>';
	var td_update = '<td class="btn bouton_modif w-50 btn-warning"><img src="../Ressources_Test/Icones/Text_Editor.ico" width="20px"></td>';
	var td_delete = '<td class="btn bouton_sup w-50 btn-danger"><img src="../Ressources_Test/Icones/xScope.ico" width="20px"></td>';//xScope tete_de_mort
	$(tableau_liste).children().last().append(place);
	$(tableau_liste).children().last().append(td_prenom);
	$(tableau_liste).children().last().append(td_nom);
	$(tableau_liste).children().last().append(td_email);
	$(tableau_liste).children().last().append(td_update);
	$(tableau_liste).children().last().append(td_delete);
	le_boutons_modif_suppr(index_max);
	toggle_table_form();
}
function affichage_ligne(index){
	$(tableau_liste).append("<tr></tr>");
	var place = '<th scope="row">' + (index+1) + '</th>';
	var td_prenom = '<td class="prenom">' + ($(liste_des_etudiants)[index]).prenom + '</td>';
	var td_nom = '<td class="nom">' + ($(liste_des_etudiants)[index]).nom + '</td>';
	var td_email = '<td class="email">' + ($(liste_des_etudiants)[index]).email + '</td>';
	var td_update = '<td class="btn bouton_modif w-50 btn-warning"><img src="../Ressources_Test/Icones/Text_Editor.ico" width="20px"></td>';
	var td_delete = '<td class="btn bouton_sup w-50 btn-danger"><img src="../Ressources_Test/Icones/xScope.ico" width="20px"></td>';//xScope tete_de_mort
	$(tableau_liste).children().last().append(place);
	$(tableau_liste).children().last().append(td_prenom);
	$(tableau_liste).children().last().append(td_nom);
	$(tableau_liste).children().last().append(td_email);
	$(tableau_liste).children().last().append(td_update);
	$(tableau_liste).children().last().append(td_delete);
	le_boutons_modif_suppr(index);
}
function affichage_lignes(){
	$(liste_des_etudiants).each(function(index){
		affichage_ligne(index);
	})
}

//Update
function u_de_crud(){
	//console.log("U de CRUD");
	//recupindex element.inArray(valeur, tableau)
	//var position = $.inArray(this, liste_des_etudiants);
	//var position = liste_des_etudiants.indexOf(this);
	position=2;
	//recup data tableau[index].val x3
	var prenom_avant = liste_des_etudiants[position].prenom;
	var nom_avant = liste_des_etudiants[position].nom;
	var email_avant = liste_des_etudiants[position].email;

	//input.placeholder = data
	var formulaire_modif = $("#formulaire_ajout");
	$("#submit").html("Modifier");
	$(formulaire_modif).removeClass("bg-info");
	$(formulaire_modif).addClass("bg-warning");
	$("#prenom_ajout").val(prenom_avant);
	$("#nom_ajout").val(nom_avant);
	$("#email_ajout").val(email_avant);
	//form.show
	$(formulaire_modif).show();


	//verif formulaire
	var nouvel_eleve = {prenom : prenom_avant, nom : nom_avant,email : email_avant };
	liste_des_etudiants.splice(position,1);
	if(verif_formulaire()){
		nouvel_eleve.prenom = $("input").first().val();
		nouvel_eleve.nom = $("#nom_ajout").val();
		nouvel_eleve.email = $("input").last().val();
		liste_des_etudiants.push(nouvel_eleve);
		$("form").hide();
		ajout_1_ligne();
		//remettre form
		$("#submit").html("Ajouter");
		$(formulaire_modif).addClass("bg-info");
		$(formulaire_modif).removeClass("bg-warning");
		$("form").hide();
	}
	r_de_crud();
	/* Obsolete
	if(verif_formulaire_update(position)){
			console.log([position].prenom);
			console.log(liste_des_etudiants[position].nom) ;
			console.log( liste_des_etudiants[position].email);
			console.log(prenom_avant);
			console.log(nom_avant) ;
			console.log( email_avant);
		prenom_avant == $("input").first().val() ? "": liste_des_etudiants[position].prenom = $("input").first().val();
		nom_avant == $("input").first().val() ? "": liste_des_etudiants[position].nom = $("#nom_ajout").val();
		email_avant == $("input").first().val() ? "": liste_des_etudiants[position].email = $("input").last().val();

		//remettre form
		$("#submit").html("Ajouter");
		$(formulaire_modif).addClass("bg-info");
		$(formulaire_modif).removeClass("bg-warning");
		$("form").hide();
		toggle_table_form();
	}*/
}//fin de U de CRUD

function verif_formulaire_update(position){ //Obsolète
	//preventDefault();
	event.preventDefault();
	error = 0;
	var les_inputs = $("input");
	les_inputs.each(function(index){
		if($(les_inputs[index]).val() == ""){
			$(les_inputs[index]).css("background", "red");
			error++;
		}else{
			$(les_inputs[index]).css("background", "lime");
		}	
	});
	verif_email_pas_deja_resent_update(position) ? error++ : "";
	
	console.log("error " + error)
	return error == 0 ? true : false;
}
function verif_email_pas_deja_resent_update(position){ //Obsolète
	var doublon_email = false;
	$(liste_des_etudiants).each(function(index){
	console.log("index" + index)
		if ((index != position) && ($(liste_des_etudiants)[index]).email == $("input").last().val()){
		console.log("position email:" + position)
			console.log("if index " + index);
			$("input").last().css("background", "orange");
			alert("email dejà présent dans la liste");
			console.log("if index " + index);
			doublon_email = true;
		}
	});
	return doublon_email;
}
function le_boutons_modif_suppr(index){
	var le_boutons_modif = $(".bouton_modif");
	$(le_boutons_modif[index]).bind("click", u_de_crud);
	var le_boutons_sup = $(".bouton_sup");
	$(le_boutons_sup[index]).bind("click", d_de_crud);
}	
function les_les_boutons_modif_suppr(){
	var les_boutons_modif = $(".bouton_modif");
	$(les_boutons_modif).each(function(index){
		$(les_boutons_modif[index]).bind("click", u_de_crud);
	})
	var les_boutons_sup = $(".bouton_sup");
	$(les_boutons_sup).each(function(index){
		$(les_boutons_sup[index]).bind("click", d_de_crud);
	})//Obsolète
}
//Delete
function d_de_crud(){
	console.log("D de CRUD");
	if (confirm("Voulez-vous vraiment supprimer ?")){
		//recupindex element.inArray(valeur, tableau)
		//var position = $("tr").index(this.parents());
		console.log($(this));
		console.log($(this).html());
		console.log($(this).parent());
		console.log($(this).parent().html());
		console.log($(this).parent());
		console.log($(this).parent().html());
		//console.log($("tr").index(this).parents());
		var position= 10;
		console.log(position);
		//var position = liste_des_etudiants.indexOf(this);
		//position=2;
		liste_des_etudiants.splice(position,1);
	}
	r_de_crud();
}
function creer_formulaire(utilisation){
	var nouveau_formulaire = '<form id="formulaire_ajout" class="d-flex flex-column align-items-center w-auto p-4 bg-info">			<div class="mb-3 d-flex align-self-end">				<label class="form-label fs-5 me-3">Prénom:</label>				<input type="text" class="form-control w-auto" id="prenom_ajout" placeholder="Prénom">			</div>			<div class="mb-3 d-flex align-self-end ">				<label class="form-label fs-5 me-3">Nom de Famille:</label>				<input type="text" class="form-control w-auto" id="nom_ajout" placeholder="Nom de Famille">			</div>			<div class="mb-3 d-flex align-self-end ">				<label class="form-label fs-5 me-3">E-mail:</label>				<input type="email" class="form-control w-auto" id="email_ajout" placeholder="E-mail">			</div>			<button type="submit" class="btn btn-success w-25 mt-3" id="submit">Ajouter</button>		</form>';
($("table")[0]).after()

}

