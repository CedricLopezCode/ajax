$(document).ready(function(){
	$("#afficher_pagebis").click(function(){
		$.ajax({
			//url: "1002bis.html",//ca marche mais pas comme ça
			url: $(this).attr("href"),//pour etre generique
			//type: "GET", //car on reçoit depuis cette page//par défaut sur jQuery
			//type: "POST" //Si on envoie des données (formulaire par exemple)
			//data : nom_user//pour préciser des données, (utilisateur par exemple)
			//text, html, xml, array, json //pas d'autre type possible
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
	});

	$(".navbar ul li a").click(function(){
		
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
		});/*
		$.get("1002tri.html", function(data){
			console.log($("p").text());
		})
		$.post("1002tri.html", function(data){
			console.log($("p").text());
		})
*/
		/*
		CRUD
		Les Méthodes HTTP
		Get: afficher les données: R
		Post: soumettre ou envoyer les données: C
		Put: modifier les données: U
		Delete: supprimer les données: D
		*/

		return false;
		//-----------------------------------------
		

	})

	$.ajax({
		url: "stagiaire.json",
		dataType: "json",
		success: function(data){
			
			for(var i = 0; i < 1/*data.stagiaire.length*/; i++){
				
				var prenom_stagiaire = data.stagiaire[i].prenom;
				var nom_stagiaire = data.stagiaire[i].nom;
				var email_stagiaire = data.stagiaire[i].email;
			
				var style = "<ul class='test'>";
				style += "<li>" + prenom_stagiaire ;
				style += " " + nom_stagiaire ;
				style += " " + email_stagiaire ;
				style +="</li> </ul>";

				$(".container").append(style);

			}
		},
		error: function(status){
			console.log(status);
		}
	})
	//-------------------------------------------------------------------
	$("form").submit(function(){
		var ville = $("form input").val();
		//console.log(ville);
		$.ajax({
			//url: "https://entreprise.data.gouv.fr/api/sirene/v1/full_text/ITGA",
			//url: "http://api.openweathermap.org/data/2.5/weather?q=paris&appid=e36c9e17b9f1529e3473ece3590f648e",
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=e36c9e17b9f1529e3473ece3590f648e",
			dataType: "json",
			success: function(data){
				//Température
				//var temp_k = $(data.main.temp)[0];
				//var temp_c = Math.round(temp_k - 273.15);
				var temp_c = Math.round(data.main.temp - 273.15);
				//Ciel
				var ciel = $(data.weather)[0].description;
				//Vent
				var vent = data.wind.speed;
				console.log(vent);
				//Affichage
				var phrase_meteo = "<center><h2>En ce moment à "+ ville + ":</h2>";
				phrase_meteo += "<h5>Le ciel est "+ciel+"</h5>"
				phrase_meteo += "<h5>Il fait "+temp_c+"°C</h5>"
				phrase_meteo += "<h5>Le vent souffle à "+temp_c+" km/h</h5>"
				phrase_meteo += "</center>"
				$("#meteo").empty();
				$("#meteo").append(phrase_meteo);
				console.log(data);
			},
			error: function(xhr){
				console.log(xhr.status);
			}
		})
		return false;
	})
	
}) //fin du document ready

function recup_temp(data){
	var temp = $(data.main.temp)[0];
	console.log(temp);
}
