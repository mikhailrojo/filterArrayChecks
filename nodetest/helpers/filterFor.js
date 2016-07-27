module.exports = function filterFor(suppliers, ids){

	return suppliers.filter(function(s){
		for(var i = 0, len = ids.length; i < len; i++){
			if (s.id === ids[i]) return true;
		}

	});
}
