$(document).ready(function(){
	$("#afficher_pagebis").click(function(){
		$.ajax({
			//url: "1002bis.html",//ca marche mais pas comme ça
			url: $(this).attr("href"),//pour etre generique
			type: "GET", //car on reçoit depuis cette page//par défaut sur jQuery
			//type: "POST" //Si on envoie des données (formulaire par exemple)
			//data : nom_user//pour préciser des données, (utilisateur par exemple)
			dataType: "html",//Le type de données qu'on reçoit
			success: function(data){
				console.log(data);
			},
			error:function(status, text){
				console.log(status);
				console.log(text);
			}
		});
	});

	$(".navbar ul li a").click(function(){
		console.log($(this).attr("href"));


	})



	
});