$(document).ready(function(){
$(".classe").css("background", "red");

//Parents-enfants-freres
$(".classe").parent().addClass("afpa");
$(".classe").parents().addClass("afpa");//A tous les parents
$(".afpa").child().addClass("cda");//Que si 1 seul enfant
$(".item:nth-child(2)").addClass("itembis");//Le n_ieme enfant
$(".afpa").children().addClass("cda");//A tous les enfants
$(".item").siblings().addClass("itembis");//Les frères mais pas lui-même
$(".item").siblings().first().addClass("itembis");//Que le 1er de la fratrie
$(".item").siblings().last().addClass("itembis");//Les frères mais pas lui-même


























})