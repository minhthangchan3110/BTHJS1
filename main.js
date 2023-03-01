var val1 = "one"
var val2 = "two"
console.log('ori1:',val1);
console.log('ori2:',val2);
var tempt = val1;
val1 = val2;
val2 = tempt
console.log("swap:",val1);
console.log("swap:",val2)