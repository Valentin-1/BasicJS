//-----Varianta cu For--->

n = prompt('Introduceti cate elemente va avea matricea');
let myArray = [n];
console.log('1) Prima metoda for: ');
for(let i = 0; i <= n; i++){
	myArray[i] = i; //initializam sirul de numere
	console.log(myArray[i]);
}


//----Varianta cu While--->

/*let i = 0;
let myArray = [n];
console.log('2) Metoda While: ');
while( i <= n){
	myArray[i] = i;
	console.log(i);
	i++;
}*/


//----Varianta cu Do-While--->

/*let i = 0;
var myArray = [n];
console.log('3) Metoda Do-While: ');
do{
	myArray[i] = i;
	console.log(i);
	i++;
}
while(i <= n);*/


//----Varianta cu For-In--->

/*var myArray = [n];
console.log('4) Metoda For...In: ');
for(var i = 0; i <= n; i++)
	myArray[i] = i;
	for(var i in myArray){
		console.log(myArray[i]);
}*/


//----Varianta cu For-Of--->

/*var myArray = [n];
console.log('5) Metoda For...Of: ');
for(var i = 0; i <= n; i++)
	myArray[i] = i; 
		for(let i of myArray){
			console.log(i);
}*/


//----Varianta cu ForEach--->

/*var myArray = [n];
console.log('6) Metoda ForEach: ');
for(var i = 0; i <= n; i++){
	myArray[i] = i; 
}
	myArray.forEach(i => console.log(_, i) => i);*/


//----Varianta cu Map--->
/*console.log('7) Metoda Map: ');
let myArray = Array(10).fill().map((_, i) => i);
console.log(myArray);*/


//----Varianta cu ES6--->

/*console.log('8) Metoda ES6: ');
let myArray = Array.from(Array(n).keys());
console.log(myArray);*/

//Dupa opinia mea cea mai buna metoda este Map, necesita mai putin cod, insa cea mai rapida este For