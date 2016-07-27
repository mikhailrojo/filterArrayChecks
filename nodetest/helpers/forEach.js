module.exports = function forEach(suppliers, ids){
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

