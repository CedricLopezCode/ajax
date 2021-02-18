//Penser à vider après utilisation
//Penser à vider après utilisation
//     A Tester
var num = document.querySelector("#num");
var submit = document.querySelector("#submit");
console.log(num);
console.log(num.value);

//submit.onclick = console.log(verifier_numero_de_telephone_valide_juste_true(num));
submit.onclick = console.log(verifier_numero_de_telephone_valide_juste_true(num.value.toString()));


function verifier_numero(){
	var tel_regex = /^(06|01)[0-9]{8}$/;
	//tel_regex.test(le_tel.value) ? le_tel.style.background = "lime" : le_tel.style.background = "red" ;
	if(tel_regex.test(le_tel.value)){
		le_tel.style.background = "lime";
	}else{
		le_tel.style.background = "yellow";
		le_tel.innerHTML="<p style=\"color:red\">Invalide </p>"; 
		return false;
	} 
	event.preventDefault();
}
function verifier_numero_de_telephone_valide_juste_background(id_input_telephone){

		var tel_regex = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;
		tel_regex.test(tel_regex) ? id_input_telephone.style.background = "lime" : id_input_telephone.style.background = "yellow";
		console.log("0123456789")
		return tel_regex.test(tel_regex);
		console.log("0123456789")
		event.preventDefault();
}
function verifier_numero_de_telephone_valide_juste_true(numero){
	console.log(numero)
	console.log(numero.value)
	var tel_regex = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;
	return tel_regex.test(numero) ? true : false;
	event.preventDefault();
}


//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
/*
//------------------------------------------------------------------------------------
function verif_numero_en_direct(id_input_telephone){ 
	var le_tel = document.querySelector("#id_input_telephone");
	le_tel.addEventListener("keyup", verifier_nombre);
	le_tel.addEventListener("keyup", verifier_numero_valide);
	function verifier_nombre(){
		if(isNaN(le_tel.value)){
			le_tel.style.background = "red";
			alert("Il ne faut que des chiffres");
		}
	}

	function verifier_numero_de_telephone_valide_juste_background(){
		var tel_regex = /^(01|02|03|04|05|06|07|08|09|)[0-9]{8}$/;
		tel_regex.test(le_tel.value) ? le_tel.style.background = "lime" : le_tel.style.background = "yellow";
	}
	function verifier_numero_de_telephone_valide_juste_true(){
		var tel_regex = /^(01|02|03|04|05|06|07|08|09|)[0-9]{8}$/;
		return tel_regex.test(le_tel.value) ? le_tel.style.background = "lime" : le_tel.style.background = "yellow";
	}
}
*/
//Penser à vider après utilisation
//Penser à vider après utilisation