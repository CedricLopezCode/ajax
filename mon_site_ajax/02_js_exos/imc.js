$(document).ready(function(){

//$("#bouton_imc").on("click", calcul_et_affichage_imc);
//$("#bouton_imc").click(calcul_et_affichage_imc);
$("form").submit(calcul_et_affichage_imc);//correction
//bien pour les form car submit bloque que ça
$("#zone_resultat").hide();


function calcul_et_affichage_imc(){
//recup données
var taille_m = $("#taille").val();
var poids_kg = $("#poids").val();
var imc;

//Vérif unités ett Calcul IMC
taille_m > 50 ? taille_m /= 100 : "";
//imc = poids_kg / Math.pow(taille_m, 2);
//imc = imc.toFixed(1);//Limite le nombre de chiffre après la virgule
imc = (poids_kg/(Math.pow(taille_m, 2))).toFixed(1);//raccourci

//Comparaison
var corpulence;
if(imc < 18.5){
	corpulence = "IMC < 18,5 kg/m² : insuffisance pondérale";
}else if(imc < 24.9){
	corpulence = "18,5 < IMC < 24,9 : poids normal";
}else if(imc < 29.9){
	corpulence = "25 < IMC < 29,9 : surpoids";
}else{
	corpulence = "IMC > 30 : obésité";
}
console.log("taille: ");
console.log("poids: ");
console.log("imc: ");
//Affichage
var zone_resultat = $("#zone_resultat");
zone_resultat.show();
$("#affichage_imc").text(imc);
$("#phrase_imc_concerne").text(corpulence);

console.log("taille: "+taille_m);
console.log("poids: "+poids_kg);
console.log("imc: "+imc);
event.preventDefault();
}//fin fonction calcul_et_affichage_imc



//---------------------------------------------------------------------------

$("#infos_imc").click(function(){
	var blabla_infos_imc = "Un IMC normal est compris entre 18,5 et 25. En dessous de 18,5, l'individu est considéré comme trop maigre. Au-dessus de 25, c'est du surpoids. A partir de 30, on parle d'obésité. IMC < 18,5 kg/m² : insuffisance pondérale	 18,5 < IMC < 24,9 : poids normal	 25 < IMC < 29,9 : surpoids IMC > 30 : obésité";
	$("#infos_imc").text(blabla_infos_imc);
});
var tableau_infos = [
	{	imc_min: 0,		imc_max: 18.5, 	corpulence: "insuffisance pondérale"},
	{	imc_min: 18.51,	imc_max: 24.9, 	corpulence: "poids normal"},
	{	imc_min: 25, 	imc_max: 29.9,	corpulence: "surpoids"},
	{	imc_min: 30, 	imc_max: 100, 	corpulence: "obésité"}
];




})

//$(function anonymes())