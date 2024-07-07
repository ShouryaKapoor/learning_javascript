/*
let marks_student1 = [23,2324,32,423,4233,423,4,23,42323];
console.log(marks_student1);        
console.log(marks_student1.length);

for ( i = 0 ; i<marks_student1.length; i++)
{
    console.log(marks_student1[i]);
}

let cities = ["Delhi","Hyderabad","Gurgaon","Agra"];
for (let city of cities)
{
    console.log(city.toUpperCase());
}
let marks = [85,97,44,37,76,60]

let sum =0;
for (let i = 0;i<marks.length;i++)
{
    sum = sum + marks[i];

}
let avg = 0;
avg = sum/marks.length;
console.log(avg);


let prices = [250,645,300,900,50];
console.log("Prices without discount");
for(let j = 0; j<prices.length; j++)
{
    console.log(prices[j]);
}
console.log("Prices with discount");

for (let i in prices)
{
    let offer = prices[i]/10;
    prices[i] = prices[i] - offer;
    console.log(prices[i]);
    i++;
}

//METHODS - push() -> add element at end
//          pop() -> remove element from end and return it
//          shift() -> remove element from start and return it
//          unshift() -> add element at start
//          splice(indx,remove,add/replace) -> add/remove/replace element from any position and return it
//          .toString -> makes a single string of array elements
//          .join -> makes a single string of array elements with a separator
//          .concat() -> combines two arrays and returns a new result
//          slice() --> splits the array and return the new result
let a = prices.concat(marks);

console.log(a);

console.log(marks.slice(1,3));

console.log("Before Splice:");
console.log(prices);
console.log("After Splice:");
prices.splice(2,0,2901);
console.log(prices);
*/
console.log("The Companies:")
let companies = ["Bloomerg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
console.log("Removing the first element from array:");
companies.shift();
console.log(companies);
console.log("Removing Uber and adding Ola in its place");
companies.splice(2,1,"ola");
console.log(companies);
console.log("Adding Amazon at the end");
companies.push("Amazon");
console.log(companies);
