function des(a,b,c) {
var D = b * b - 4 * a * c;
var x1;
var x2;
alert(D);    // функцию на JS вычисляющая дискриминант
if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    alert('x1 = ' + x1 +";  " + 'x2= ' + x2);
} else if (D==0) {
    x1 = (-b) / (2*a);
    alert('x= '+x1);
} else if (D < 0) {
    alert("Нет действительных корней");
}
}
des(10, -2, 6);  //корни квадратного уравнения