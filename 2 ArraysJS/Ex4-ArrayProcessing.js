let myArray = [];
console.log(myArray);

//todo read about function declaration
function sumInputNumbers(){
	let sum = 0;
	do{
		n = prompt('Introduceti numarul');
		//todo use if
		let check = (n == "") ? n = null : n == n;
	myArray.push(Number(n));
	}while(n != null);
	sum = myArray.reduce((item, index) => item + index);
	console.log(sum);
}

sumInputNumbers();

