var generator = require('./generator.js');

module.exports = function (times, quantityOfSuppliers, quantityOfIds, fn){
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