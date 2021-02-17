//evenement
window.setInterval(evenement, temps);
element.onclick = function(); //quand on clique //posible direct dans html
element.oncblclick = function(); //quand on double-clique //posible direct dans html
function nom_fonction_a_faire(){alert("Vous avez cliqué");}
element.onmouseover = function(); //comme le hover en css mais reste
element.onmouseout = function(); //arrete le hover quand on sort
element.onchange = function(); //par exemple pour le menu déroulant d'un formulaire
element.onfocus = function(); //utilisé principalement sur les formulaire //par exemple fond rouge si un probleme
element.onkeyup = function(); //utilisé principalement sur les formulaire pour dire avant la validation que ça va pas //par exemple les email qui ont besoin de *@*.*
element.onkeydown = function(); //utilisé principalement sur les formulaire //par exemple fond rouge si un probleme
element.onsubmit = function(); //utilisé principalement sur les formulaire //par exemple fond rouge si un probleme
//bien pour les form car submit bloque que ça
	//ecouteur
objet.addEventListener("keyup", function);
event.preventDefault(); //pour pas que ça recharge la page

	//toggle
window.setInterval(function(){
	mes_classes.toggle("nouvelle_classe"); //alterne entre ajouter/supprimer
},1000) //temps de changement en ms

	//L'objet Event
function show(event){//event mot clef comme this
	event.preventDefault(); //boque envoie formulaire
	console.log(event.clientX);
	console.log(event.clientY);
}

document.querySelector("body").addEventListener("mouseover",show);

function montre(e){ //e = event mais moins pratique
	var coorX = e.clientX;
	var coorY = e.clientY;

	document.querySelector("body").innerHTML = "X" + coorX + "Y" + coorY
}
document.addEventListener("mouseover", montre);

var position = document.querySelector(".test");

document.addEventListener("mousemove", function(event){
	position.innerHTML = "Position X " + event.clientX + "px <br> PositionY: " +event.clientY + "px";
} );
document.querySelector("form").addEventListener("submit", function(e){
	e.preventDefault();
	document.querySelector(".test").style.background = "red";
	var couleur = document.querySelector("#couleur");
	console.log(couleur);
	document.querySelector("form").setAttribute("style", "background: #" + couleur.value+";");
});