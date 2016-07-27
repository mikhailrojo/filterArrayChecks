module.exports = function whileWhile(suppliers, ids){
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

