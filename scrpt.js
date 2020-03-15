function getDiscriminant(a,b,c) {
    var discriminant = b * b - 4 * a * c;
    var x1;
    var x2;
    alert(discriminant);   
    if (discriminant > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    alert("x1 = " + x1 +";  " + "x2= " + x2);
    } else if (discriminant===0) {
    x1 = (-b) / (2*a);
    alert("x= " +x1);
    } else if (discriminant < 0) {
    alert("Нет действительных корней");
}
}

getDiscriminant(10, -2, 6); 