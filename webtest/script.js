var generator = {
	suppliers: generateSuppliers,
	ids: generateArrayOfInt
}

function whileWhile(suppliers, ids){
	var i = suppliers.length;

	var result = [];

	while(i--){
		var j = ids.length;
		while(j--){
			if ( suppliers[i].id === ids[j]){
				result.push(suppliers[i])
				break;
			}
		}

	}
	return result;
}
function whileFor(suppliers, ids){
	var i = suppliers.length;
	var j = ids.length;
	var result = [];

	while(i--){
		for (var k =0; k < j; k++){
			if ( suppliers[i].id === ids[k]){
				result.push(suppliers[i])
				break;
			}
		}

	}
	return result;
}
function shiftFor(suppliers, ids){
	var result=[];
	var x;

	while(x = suppliers.shift()){

		for(var i=0, len = ids.length; i< len; i++){
			if(x.id === ids[i]){
				result.push(x);
				break;
			}
		}
	}
	return result;
}
function forFor(suppliers, ids){
	var supLen = suppliers.length;
	var k = 0;
	var idLen = ids.length;
	var result = [];

	for(;k<supLen;k++){
		var l = 0;
		for(;l<idLen;l++){

			if ( suppliers[k].id === ids[l]){
				result.push(suppliers[k])
				break;
			}
		}
	}
	return result;
}
function forEach(suppliers, ids){
	var result = [];
	suppliers.forEach(function(x){
		for(var i =0; i < ids.length; i++){
			if(x.id === ids[i]){
				result.push(x);
			}
		}
	});
	return result;
}



function iterator(times, quantityOfSuppliers, quantityOfIds, fn){
	var now = new Date();

	for(var i = 0; i < times; i++){
		var suppliersList = generator.suppliers(quantityOfSuppliers);
		var idsList = generator.ids(quantityOfIds);
		fn(suppliersList,idsList);
	}

	var after = new Date();
	var between = (after-now)/times;
	var fnName = functionName(fn);
	console.log(fnName + " function took in average: "+ (between)+ "ms to make "+times+" iterations");

}

function functionName(fun) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}
function generateArrayOfInt(quantity){
	var result = [];
	for(var i =0; i< quantity; i++){
		result.push(parseInt((Math.random()*10000),10))
	}
	return result;
}
//console.log(generateArrayOfInt(10));

// generate objects
function generateSuppliers(quantity){
	var result = [];
	for(var i =0; i < quantity; i++){
		var object = {
			id : parseInt((Math.random()*10000),10)
		}
		result.push(object);
	}
	return result;
}


function filterFor(suppliers, ids){

	return suppliers.filter(function(s){
		for(var i = 0, len = ids.length; i < len; i++){
			if (s.id === ids[i]) return true;
		}

	});
}
function filterSome(suppliers, ids){
	var result = [];
	suppliers.filter(function(s){
		var t = ids.some(function(e){
			return s.id === e;
		});
		if(t) result.push(s);
	});
	return result;
}
function forInLoop(suppliers, ids){
	var result = [];
	for(var prop in suppliers){
		for(var i =0, len = ids.length; i < len; i++){
			if(suppliers[prop].id === ids[i]){
				result.push(suppliers[prop]);
				break;
			}
		}
	}
	return result;
}
