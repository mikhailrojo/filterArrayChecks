module.exports = function forFor(suppliers, ids){
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

