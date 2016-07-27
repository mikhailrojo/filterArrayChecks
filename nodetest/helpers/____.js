"use strict";
var a = [1,2,3,4,5,1,5,5,5];
var b = [{id: 1},{id: 5},{id: 122},{id: 12121},{id: 4}]

function filter(suppliers, ids){
	var result = [];
	suppliers.filter(function(s){
		var t = ids.some(function(e){
			return s.id === e;
		});
		if(t) result.push(s);
	});
	return result;
}
console.log(filter(b,a));
