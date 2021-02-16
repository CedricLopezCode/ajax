$(document).ready(function(){
	/* Appelle de la Navbar depuis un autre fichier
	$.get("html/navbar.html", function(data){
		console.log(data);
		$("header").append(data);
	});*/

	$("nav a").click(changer_contenu);

}) //FIN du document ready

function changer_contenu(){
	$(this).siblings().removeClass("page_active");
	$(this).addClass("page_active");
	$.ajax({
		url: $(this).attr("href"),
		dataType: "html",
		success: function(data){
			//console.log(data);
			$(".container").empty();
			$(".container").append(data);
		},
		error:function(xhr){
			console.log(xhr.status);
		}
	});
	return false;
}

function XXXXXXXXX(){
	console.log("test");
}