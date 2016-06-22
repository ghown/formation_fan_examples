(function() {
	/* jshint -W003, -W038 */
	'use strict';

	console.log('Hello World!');

	var Animal = function() {
		this.eat = function() {
			console.log('miam miam slurp slurp...');
		};
	};

	Animal.prototype.sleep = function() {
		console.log('rzzzzzzzzz...');
	};

	var Cat = function() {
		this.speak = function() {
			console.log('miaou');
		};
	};
	Cat.prototype = new Animal();

	var garfield = new Cat();
	console.log('garfield',garfield);
	garfield.speak();
	garfield.sleep();
	garfield.eat();

	function myTest() {
		x = 25;  // Variable locale car d�claration plus bas.
		console.log('x=' + x);

		if (true) {
			var x; // Le hoisting va lever la variable x avant le "x = 25". Le warning d�sactiv� en d�but permet de pr�venir
			console.log('x=' + x); // Le dev qu'il ne doit pas utiliser une variable avant de l'avoir d�clar�e.
			x = 32;
			console.log('x=' + x);
		}
		console.log('x=' + x);
		x += 1;
		console.log('x=' + x);
	}

	myTest();

	for (var i = 0; i < 3; i++) {
		console.log(i);
	}

	function myTest2(a, b, c) {
		console.log('start');
		console.log(a, b, c);
		console.log(arguments); // => Mot cl� qui pointe sur tous les arguments pass�s � la fonction.
		console.log(arguments[3]); // Affiche 14 pour la 3eme execution de myTest2.
		console.log(typeof arguments); // Ressemble � un tableau. Poss�de une propri�t� length. /!\ Son prototype n'est pas celui de Array. /!
		Array.prototype.forEach.call(arguments, function(n, i) { console.log(n, i); });
	}

	myTest2(1);
	myTest2(1, 3, 12);
	myTest2(1, 3, 12, 14);    // Le 14 sera attribu� dans arguments, c'est tout. 
	var x = [1, 12, 3];
	console.log(x);
	x.forEach(function(n, i) { console.log(n, i); }); //console log pour chaque �l�ment de x.

	/* jshint +W003, +W038 */

})();



