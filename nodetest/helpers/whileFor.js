module.exports = function whileFor(suppliers, ids){
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