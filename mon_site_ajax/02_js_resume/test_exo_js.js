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

