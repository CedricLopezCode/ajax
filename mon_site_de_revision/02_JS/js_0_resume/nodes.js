// Les nodes
var nouvel_element = document.createElement("li");//parent
var contenu_li = document.createTextNode("Salut");
nouvel_element.appendChild(contenu_li);//ajoute un enfant
document.querySelector("ul").append(nouvel_element);//append mis à ma suite
document.querySelector("ul").append("nouvel_element");
document.querySelector("ul").prepend("nouvel_element avant");//prepend mis avant
nouvel_element.removeChild(contenu_li);//supprime un enfant

var para = document.createElement("div");//cree la div
var content = document.createTextNode("je suis la div");//cree du texte
para.appendChild(content);//met le text dans la div
document.querySelector(".lorem").append(para);//place la div dans le html


