let arr = [1,2,3,4,5]

arr.forEach(function retval(val)
{
    console.log((val)*(val));
})
//foreach used for only array -- higher order function -- use another function as a prameter
//more array methods 
// 1st method - Map - creates a new array 

let result = arr.map(
    function retal(i)
{
    return i;
});
console.log(result);

//2nd method - Filter - creates a new array that give true for a condition/filter

let qarr = [1,2,3,4,5];

let rsult2 = qarr.filter((val) => 
{
    return val % 2 == 0;
})
console.log(rsult2);

//3rd method
//reduce - reduce the array to a single value
//reduce is a higher order function that takes a function as a parameter and returns a value

let n = prompt("Enter a number");
let newarr=[];
for(let  i = 1 ; i<=n;i++)
{
    newarr.push(i);
}
console.log(newarr);
//sum of ALL NUMBERS IN ARRAY
let sum = newarr.reduce((acc,cur) =>
    {
        return acc+cur;
        });
        console.log(sum);
// product of all numbers in array
let prod = newarr.reduce((prev,curr) =>
{
    return prev*curr;
}
)
console.log(prod);