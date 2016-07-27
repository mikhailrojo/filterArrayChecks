module.exports = function shiftFor(suppliers, ids){
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
