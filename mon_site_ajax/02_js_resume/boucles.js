
				//Boucles for 
		//pour un nombre "connu" de passages
	for (index_for = 0; index_for < 3; index_for++) { //(Début, Fin, changement entre 2 passage)
		console.log(index_for);
	}

				//Boucles while 
	var index_while = 0;//Attention à initialiser avant car sinon il ne rentrera même pas dedans
	while(index_while < 3){ //Condition d'arret 
		console.log(index_while);
		index_while ++; //Attention à bien incrémenter dans la boucle sinon boucle infini
	}

				//Boucles do while 
		//si on veut qu'elle s'exécute au moins 1 fois 
		//car la vérification est faite après le 1er passage
	var index_do_while = 0;//Attention à pas initialiser dans la boucle 
	//sinon boucle infini car elle reprend sa valeur initiale à chaque passage
	do{
		console.log(index_do_while);
		index_do_while ++; //Attention à bien incrémenter dans la boucle sinon boucle infini
	} while(index_do_while < 3)//Condition d'arret




	break; //sort de la boucle // tue le process 
	//permet de sortir d'une boucle quand on a trouvé ce qu'on cherche
	continue; //reprend le process ?????????????????????????????????????

