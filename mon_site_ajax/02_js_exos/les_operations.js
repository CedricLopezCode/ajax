function les_operations(){
	
	function addition(x, y){
		console.log(x+y);
	}

	function soustraction(x, y){
		return x-y;
	}
	function multiplication(x, y){
		return x*y;
	}
	function division(x, y){
		return x/y;
	}
	function modulo(x, y){
		return x%y;
	}
	function les_5_opérations(a, b){
		addition(a,b);
		console.log(soustraction(a,b));
		console.log(multiplication(a,b));
		console.log(division(a,b));
		console.log(modulo(a,b));
	}

	les_5_opérations(7,8);
}

