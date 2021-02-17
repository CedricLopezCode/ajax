var tableau_html = $("#tableau_liste_etudiant tbody");
var compteur_admis = 0;
var compteur_refuse = 0;
$(document).ready(function(){

/*var tableau_des_etudiants = [
	{ prenom: "Moussa", 	nom: "Camara", 	moyenne: 15 },
	{ prenom: "Jean", 		nom: "Dupont", 	moyenne: 10 },
	{ prenom: "Francois", 	nom: "Paul", 	moyenne: 15 },
	{ prenom: "CDA", 		nom: "Test", 	moyenne: 13 },
	{ prenom: "Emmanuel",	nom: "Macron",	moyenne: 5  },
	{ prenom: "Cédric",		nom: "Lopez",	moyenne: 20 }
];*/

//Affichage tableau
$.get("data_etudiants.json",function(data){
	if(data.etudiants.length == 0){
		$("#liste_etudiant").html("Pas d’étudiants inscrits pour le moment");	
	}else{
		tableau_html = $("#tableau_liste_etudiant tbody");
		for(var index = 0; index < data.etudiants.length; index++){
			$(tableau_html).append("<tr></tr>");
			var td_prenom = '<td class="prenom">' + data.etudiants[index].prenom + '</td>';
			var td_nom = '<td class="nom">' + data.etudiants[index].nom + '</td>';
			$(tableau_html).children().last().append(td_nom, td_prenom);
			data.etudiants[index].moyenne >= 10 ? compteur_admis++ : compteur_refuse++ ;
			$("#nombre_admis").html(compteur_admis);
			$("#nombre_refuse").html(compteur_refuse);
		}
	}
})

$("#bouton_admis").click(function(){
	$.ajax({
		url: "data_etudiants.json",
		dataType: "json",
		success: function(data){
			affichage_liste_admis_ou_pas(data, "admis");
		},
		error: function(status){
			console.log(status);
		}
	})
})
$("#bouton_refuse").click(function(){
	$.ajax({
		url: "data_etudiants.json",
		dataType: "json",
		success: function(data){
			affichage_liste_admis_ou_pas(data, "refuse");
		},
		error: function(status){
			console.log(status);
		}
	})
})

})// Fin document ready
function affichage_ligne(index, data){
	$(tableau_html).append();
	var td_prenom = '<td class="prenom">' + data.etudiants[index].prenom + '</td>';
	var td_nom = '<td class="nom">' + data.etudiants[index].nom + '</td>';
	$(tableau_html).append("<tr>",td_nom,td_prenom,"</tr>");
}

function affichage_tableau(data){
	for(var index = 0; index < data.etudiants.length; index++){
		$(tableau_html).append("<tr></tr>");
		var td_prenom = '<td class="prenom">' + data.etudiants[index].prenom + '</td>';
		var td_nom = '<td class="nom">' + data.etudiants[index].nom + '</td>';
		$(tableau_html).append("<tr>",td_nom,td_prenom,"</tr>");
	}
}
function affichage_liste_admis_ou_pas(data, admis_ou_pas){//admis ouo refuse
	$("#liste_a_afficher ul").empty();
	var condition = "data.etudiants[index].moyenne < 10";
	if(admis_ou_pas == "admis"){
		for(var index = 0; index < data.etudiants.length; index++){
			if(data.etudiants[index].moyenne >= 10){
				affichage_liste(data, index);
				$("#liste_a_afficher").css("background", "lime");
			}
		}
	}else{
		for(var index = 0; index < data.etudiants.length; index++){
			if(data.etudiants[index].moyenne < 10){
				affichage_liste(data, index);
				$("#liste_a_afficher").css("background", "red");
			}
		}
	}
}
function affichage_liste(data, index){//admis ou refuse
	var phrase_avec_la_moyenne = "<li>";
	phrase_avec_la_moyenne += data.etudiants[index].prenom +" ";
	phrase_avec_la_moyenne += data.etudiants[index].nom +" avec ";
	phrase_avec_la_moyenne += data.etudiants[index].moyenne +" de moyenne";
	phrase_avec_la_moyenne += "</li>";
	$("#liste_a_afficher ul").append(phrase_avec_la_moyenne);
}

//------------------------------------------------------------------
		
