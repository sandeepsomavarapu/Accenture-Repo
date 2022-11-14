let num=12;//num='qwerty';
//creating normal array
let a1=[1,2,3,'a',true];
// in a variable we can take different types also....
//but in ts we can restrict the variable to take number,string ....
//array creation in ts
var x :number[];
x=[1,2,3,4];
for(let i in x)
{
    console.log(i);
}//x=['a','b'];
x.push(10);
//x.push('y');
num=x.pop();//shift
//it will remove last element from array and returns.
let numberList: number[] = [1, 2, 3];
let numList: Array<number> = [1, 2, 3];