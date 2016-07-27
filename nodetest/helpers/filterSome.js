module.exports = function filterSome(suppliers, ids){
	var result = [];
	suppliers.filter(function(s){
		var t = ids.some(function(e){
			return s.id === e;
		});
		if(t) result.push(s);
	});
	return result;
}
