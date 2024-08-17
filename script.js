/*let sum = 0;
for(let i = 1; i <= 5; i++) {
    sum = sum+i;
}
console.log("sum=",sum);*/
/*let x = 10;
let y = 20;
if(x>y)
{
    console.log("Hello World!!")
}
else
{
    console.log("*********");
}*/
/*let n = 54;
if(n%2==0)
{
    console.log("number is even");
}
else
{
    console.log("number is odd");
}*/
/*for(i=1; i<=5; i++)
{
    console.log("Asmi Baby")
}*/
/*let cities = ["delhi", "pune", "mumbai", "hyderbad", "guragaon"];
for(let city of cities) {
    console.log(city.toUpperCase());
}*/
/*let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let val of marks) {
    console.log(val);
    sum +=val;
}
let avg = sum/marks.length;
console.log("average marks of the class = ${avg}");
*/
/*let items = [250, 645, 300, 900, 50];
let index = 0;
for(let val of items) {
    console.log('value at index ${index} = ${val}');
    let offer = val/10;
    items[index] = items[index] - offer;
    console.log('value after offer = ${items[index]');
    index++; 
}*/
/*let items = [250, 645, 300, 900, 50];

for (let i = 0; i<items.length; i++) {
    let offer = items[i] /10;
    items[i] -= offer;
}
console.log(items);*/
/*function myFunction(msg) {
    console.log(msg);
}
myFunction("I Love JS");*/
// function to calculate sum
function sum(x,y){
    s = x+y;
    return s;
}
let val = sum(3,4);
console.log(val);
