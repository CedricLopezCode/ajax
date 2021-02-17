$(document).ready(function(){
	$("form").submit(function(){
		var ville = $("form input").val();
		//console.log(ville);
		$.ajax({
			//url: "https://entreprise.data.gouv.fr/api/sirene/v1/full_text/afpa",
			//url: "http://api.openweathermap.org/data/2.5/weather?q=paris&appid=e36c9e17b9f1529e3473ece3590f648e",
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=e36c9e17b9f1529e3473ece3590f648e",
			dataType: "json",
			success: function (data, ville){
				recup_meteo(data, ville);
			},
			error: function(xhr){
				console.log(xhr.status);
			}
		})
		return false;
	})
	$.ajax({
		url: "https://entreprise.data.gouv.fr/api/sirene/v1/full_text/afpa",
		//url: "http://api.openweathermap.org/data/2.5/weather?q=paris&appid=e36c9e17b9f1529e3473ece3590f648e",
		//url: "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=e36c9e17b9f1529e3473ece3590f648e",
		dataType: "json",
		success: function (data){
			recup_infos_entreprise(data);
			//maps
			var latitude = data.etablissement[0].latitude;
			var longitude = data.etablissement[0].longitude;
			affichage_maps(latitude,longitude);
		},
		error: function(xhr){
			console.log(xhr.status);
		}
	})
}) //fin du document ready
function recup_infos_entreprise(data){
	console.log(data);
	//recup data
	var siren = data.etablissement[0].siren;
	var siret = data.etablissement[0].siret;
	var nom = data.etablissement[0].nom_raison_sociale;
	var geo_adresse = data.etablissement[0].geo_adresse;
	var latitude = data.etablissement[0].latitude;
	var longitude = data.etablissement[0].longitude;
	//affichage data
	var infos_entreprise = "<center><h2>Nom: "+ nom + "</h2>";
	infos_entreprise += "<h5>SIREN: "+siren+"</h5>"
	infos_entreprise += "<h5>SIRET: "+siret+"</h5>"
	infos_entreprise += "<h5>Adresse: "+geo_adresse+"</h5>"
	infos_entreprise += "<h5>latitude: "+latitude+"</h5>"
	infos_entreprise += "<h5>longitude: "+longitude+"</h5>"
	infos_entreprise += "</center>"
	$("#entreprise").empty();
	$("#entreprise").append(infos_entreprise);
}
function affichage_maps(latitude,longitude){
	var iframe='<iframe src="https://maps.google.com/maps?q=';
	iframe += latitude+","+longitude;
	iframe += '&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>';
	$("#entreprise").append(iframe);
}
function recup_meteo(data, ville){
	//Température
	//var temp_k = $(data.main.temp)[0];
	//var temp_c = Math.round(temp_k - 273.15);
	var temp_c = Math.round(data.main.temp - 273.15);
	//Ciel
	var ciel = $(data.weather)[0].description;
	//Vent
	var vent = data.wind.speed;
	//Affichage
	var phrase_meteo = "<center><h2>En ce moment à "+ ville + ":</h2>";
	phrase_meteo += "<h5>Le ciel est "+ciel+"</h5>"
	phrase_meteo += "<h5>Il fait "+temp_c+"°C</h5>"
	phrase_meteo += "<h5>Le vent souffle à "+vent+" km/h</h5>"
	phrase_meteo += "</center>"
	$("#meteo").empty();
	$("#meteo").append(phrase_meteo);
	//console.log(data);
	return false;
}
//<iframe src="https://maps.google.com/maps?q="+latitude+","longitude"&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
//<iframe src="https://maps.google.com/maps?q=48.84,2.288489&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>