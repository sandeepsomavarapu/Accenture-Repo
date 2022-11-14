function add(x: string, y: string, z: string): string;
function add(x: number, y: number, z: number): number;
// implementation signature
function add(x: any, y: any, z: any): any {
let result: any;
if (typeof x == "number" && typeof y == "number" && typeof z == "number") {
result = x + y + z;
}
else {
result = x + y + " " + z;
}
return result;
}
let result1 = add(4, 3, 8); // 15
let result2 = add("welcome", "hello", "hai");

console.log(result1+" "+result2);