alert("BIENVENIDO A TU LISTA DE COMPRAS");
let entrada    = prompt("INGRESA PRODUCTOS QUE NECESITES Y ESCRIBI LISTO CUANDO TERMINES ");
let ingresados = '';
while (entrada != 'listo') {
    ingresados += entrada +"\n";
    entrada     = prompt("AÑADIR PRODUCTO");
}
alert(ingresados);