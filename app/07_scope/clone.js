(function() {
	'use strict';

	var clone = function(o) {
		var result = {};
		for (var p in o){
			if( ((typeof o[p]==="object") && (o[p]) !== null)){
				result[p] = clone(o[p]);						//Clone profond
			}else{
				result[p] = o[p];								//Clone peu profond
			}
		}
		return result;
	};
	
	var a = {
		s:45,
		t:{ y : 12}
	};
	
	var b = clone(a);
	console.log('a = ',a);
	console.log('b = ',b);
	b.s = 55;
	console.log('a = ',a);
	console.log('b = ',b);
})();
