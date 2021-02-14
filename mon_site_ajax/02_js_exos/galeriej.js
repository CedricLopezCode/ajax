//$(document).ready(function(){
	//Exo 4: Affichage Galerie 

var les_miniatures = document.querySelectorAll(".miniatures");
var grande_image = document.querySelector("#article_grande_image").innerHTML;
var la_miniature = document.querySelector(".miniatures").innerHTML;

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
//});