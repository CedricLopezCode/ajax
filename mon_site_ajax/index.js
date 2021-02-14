$(document).ready(function(){
$.ajax({
	url: $(this).attr("href"),//pour etre generique
	dataType: "html",//Le type de données qu'on reçoit
	success: function(data){
		//console.log(data);
		$(".container").empty();
		$(".container").append(data);
	},
	error:function(status, text){
		console.log(status);
		console.log(text);
	}
});
$.get(json, function(data){
	console.log("get");
	if (data.produits[index].article == nom_article){
		console.log("if");
		return position;
	}
})



})//Fin du document ready
