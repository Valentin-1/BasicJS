let styles = ['Джаз', 'Блюз'];
//1) Afisarea initiala
console.log(styles);

//2)Adaugarea elementului, 2 este pozitia
styles[2] = 'Рок-н-рол'
console.log(styles);

//3)Adugarea si inlacuirea 
let arraySplice = styles
n = prompt('Indicati pozitia elemetului care trebuie schimbat')
m = prompt('Indicati cate elemente vor fi schimbate')
//w = prompt('Indicati cuvantul')
styles.splice(n, m, 'Классика');
console.log(arraySplice);

//4)Stergerea unui element
let elemDelete = arraySplice;
elemDelete.splice(0, 1);
console.log(elemDelete);

console.log('Afisarea elementului sters, dupa idee trebuie sa lucreze metoda asta, dar mie imi afisazea primul element');
let remove = arraySplice.splice(0, 1);
console.log(remove);

//5)Adaugarea elementelor la inceputul sirului
elemDelete.unshift('Рэп', 'Регги');
console.log(elemDelete);



