(function() {																	//IIFE
	'use strict';																//Interdire certains type de constructeurs
	console.log('Hello World!');												//Affiche hello world dans la console

	for (var i = 0; i < 10; i++) {												//Boucle for pour i = 0 � i = 10.
		setTimeout(function() { console.log('i=' + i); }, 1000);				//Callback. setTimeout(callback, entier). 1000 = Dur�e en millisecondes. Execution du callback 1 sec apr�s.
	}																			//Callback execut� seulement quand la grande fonction => Affiche 10 fois 10 car � la fin i = 10. 
																				//Emp�che le garbage collecting. i vie jusqu'� la fin du code ici.

	for (var i = 0; i < 10; i++) {												//IIFE qui duplique i dans j. Ensuite on trace j.
		(function(j) {
			setTimeout(function() { console.log('i=' + j); }, 1000);
		})(i);
	}
})();


