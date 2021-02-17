function navbar_generale(){
	document.open("sommaire_total_cda.html");
	var contenu_nav_generale = document.querySelector("#nav_generale").innerHTML;
	document.close();
	return contenu_nav_generale;
}
function contenu_les_navbars_par_section(nav_partie_en_cours){
	var contenu_nav_section = document.querySelector('"#'+id+'"').innerHTML;
	return contenu_nav_generale;
}

console.log(navbar_generale());
console.log(navbar_generale());