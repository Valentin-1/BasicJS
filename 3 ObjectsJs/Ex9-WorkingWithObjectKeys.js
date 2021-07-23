const weekDays = {
	'Luni': 'Mo',
	'Marti': 'Tu',
	'Miercuri': 'We',
	'Joi': 'Th',
	'Vineri': 'Fr',
	'Simbata': 'Sa',
	'Duminica': 'Su'
};

function revers(obj){
	let dayRo;
	let dayEn;
	for(let key in obj){
		dayEn = key;
		dayRo = obj[key];
		delete obj[key];
		key = dayRo;
		obj[key] = dayEn;
	}
}

revers(weekDays);
console.log(weekDays);