$(document).ready(function(){


creer_boutons_exos_generique($("#generique"),"liste_notion_exo.json","notion");
creer_boutons_exos_generique($("#jspur"),"liste_notion_exo.json","exo_js_pur");
creer_boutons_exos_generique($("#js_html"),"liste_notion_exo.json","exo_js_html");
creer_boutons_exos_generique($("#js_jquery"),"liste_notion_exo.json","exo_jquery");
creer_boutons_exos_generique($("#js_tp"),"liste_notion_exo.json","tp");

})//Fin Document Ready


function creer_boutons_exos_generique(id_div, json, tableau){
	$.get(json, function(data){
		//console.log(data);
		//console.log(data[tableau]);
		for(var index = 0; index < data[tableau].length; index++){
			var bouton = '<button class="btn btn-warning m-2 fs-3 src="';
			bouton += data[tableau][index].fichier +'"></button>'
			$(id_div).append(bouton);
			$(id_div).children().last().html(data[tableau][index].nom);
		}
		$(id_div).children().bind("click", lancer_fichier_associe(data));
	})
}
function lancer_fichier_associe(data){
	console.log(5)
	/*$.ajax({
		url: $(this).attr("src"),
		dataType: "html",
		success: function(data){
			var position = $(this).parent().children().index(this);
			var fichier = data.tableau[position].fichier;
			$("#texte_a_remplacer").empty(); 
			$("#texte_a_remplacer").append(fichier);
		},
		error:function(status, text){
			console.log(status);
			console.log(text);
		}
	});*/
}
function lancer_js_pur(){
	var jspur = $(".jspur span");
	console.log(jspur);
	$.get("liste_notion_exo.json", function(data){
		for(var index = 0; index < data.exo_js_pur.length; index++){
			console.log($(this).html());
			if($(this).text()){}
		}
	})
}
function ouvrir_html(data){
	var position = $(this).parent().children().index(this);
	$("#texte_a_remplacer").empty(); 
	$("#texte_a_remplacer").append(data.tableau[position].fichier);
}

//--------------------------------------------------------------------------------------
function lancer_js_exo(script_a_lancer){
	changement_src(script_a_lancer);
	console.log(script_sans_src);
	var nom_exo = trouver_nom_function(script_a_lancer);
	console.log(nom_exo);
	nom_exo;
	document.onload = nom_exo;
}
function changement_src(script_a_lancer){
	var script_a_lancer = script_a_lancer.getAttribute("src");
	script_sans_src = document.querySelector("#script_sans_src");
	script_sans_src.setAttribute("src", script_a_lancer);
}
function trouver_nom_function(script_a_lancer){
	var script_a_lancer = script_a_lancer.getAttribute("src");
	var regex = /[0-9a-z_]+.js/ 
	nom_function_avec_extension = (script_a_lancer.match(regex)).toString();
	nom_function_sans_extension = nom_function_avec_extension.slice(0,-3);
	return nom_function_sans_extension;
}

function lancer_js_html_exo(html_a_afficher){
	//var affichage_html = document.querySelector("#texte_a_remplacer").innerHTML;
	//var html_associe = html_a_afficher.getAttribute("src");
	//affichage_html = 
}

