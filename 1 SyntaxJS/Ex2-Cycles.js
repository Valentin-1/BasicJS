
a = prompt('Introduceti primul numar din interval');
b = prompt('Introduceti al doilea numar din interval');

let sum = 0;

for (let i = a; i <=b; ++i) {
	//todo use ===
	if(i % 2 == 0){
		sum = i + sum;
	}
}

//todo use ``
console.log('Suma este = ' + sum);