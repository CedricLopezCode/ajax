
	var submit = document.getElementById("submit");
	console.log(submit);

	//submits.onclick = recuperer_calculer_et_afficher();
	submit.onclick = recuperer_calculer_et_afficher;

	function faire_le_calcul(premier_nombre, deuxieme_nombre, signe_operation){
		var resultat;
		switch(signe_operation){
			case "+":
				resultat = parseInt(premier_nombre) + parseInt(deuxieme_nombre);
			break;
			case "-":
				resultat = premier_nombre - deuxieme_nombre;
			break;
			case "*":
				resultat = premier_nombre * deuxieme_nombre;
			break;
			case "/":
				resultat = premier_nombre / deuxieme_nombre;
			break;
			case "%":
				resultat = premier_nombre % deuxieme_nombre;
			break;
			default:
				alert("erreur");
			break;
		}
		return resultat;
	}
	//console.log(faire_le_calcul(3,5,"*"));

	function afficher_resultat(premier_nombre, deuxieme_nombre, signe_operation){
		alert(premier_nombre + " " + signe_operation + " " + deuxieme_nombre + " = " + faire_le_calcul(premier_nombre, deuxieme_nombre, signe_operation))
	}
	//afficher_resultat(4, 5, "*");

	function recuperer_donnees() {
		var premier_nombre = document.getElementById("premier_nombre");
		var deuxieme_nombre = document.getElementById("deuxieme_nombre");
		var signe_operation = document.getElementById("signe_operation");
		console.log(premier_nombre).value;
		console.log(signe_operation).value;
		console.log(deuxieme_nombre).value;
	}

	function recuperer_calculer_et_afficher(){
		console.log(document.querySelector("#premier_nombre"));
		var premier_nombre = document.querySelector("#premier_nombre").value;
		var deuxieme_nombre = document.querySelector("#deuxieme_nombre").value;
		var signe_operation = document.querySelector("#signe_operation").value;
		afficher_resultat(premier_nombre, deuxieme_nombre, signe_operation);
	}

