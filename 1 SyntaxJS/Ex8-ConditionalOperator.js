let username  = prompt('Introduceti login');
let password = prompt('Introduceti parola');

let checkLogin = (username == 'Operator' & password == 'csef41') /*? ('Validation Error') : (username != undefined  & password == undefined)*/ ?
alert('Salut') : 
(username != 'Operator' & password == 'csef41')  ? alert('Login-ul a fost introdus incorect') : 
alert('Parola a fost introdusa incorect');