function addition(a,b)
{
return a+b;
}
var a=10;
var sum=addition(100,200);

var sum1=addition('true',200);

console.log(sum);
console.log(sum1);

var x: number;
//x='welcome';
function addition1(a :number,b :number)
{
return a+b;
}
var sum4 = addition1(100,200);
//var addition12 = addition1("welcome",200);

function add2(a :number,b :number,c?):number
{return a+b+c;}

var sum2 = add2(100,200);//'',"",``

var sum3:number= add2(12,200,"230");

console.log(sum2);
console.log(sum3);

function add3(a, b, c,d? : number) {
    return a + b + c+d;}
var hel=add3(1,2,3,4);
var hel=add3(1,2,3);
//var hel=add3(1,2,'y','x');
//here,argument d is a number and is optional,so it doesn't need to be passed but if it passed should be number type.

function add4(a, b, c,d? : number):number {
    return a + b + c+d;
}//above syntax means add4 method always returns number type as output.....
var b1=add3(1,2,3,4);
var a=add4(1,2,3,4);