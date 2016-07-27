// generates the array of supplier ids
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
//console.log(generateSuppliers(3));
module.exports = {
	suppliers: generateSuppliers,
	ids: generateArrayOfInt
}