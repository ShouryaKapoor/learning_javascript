function func1()
{
    console.log("Good morning");
    console.log("Good Night");
}

func1();
func1();

function func2(msg)
{
    console.log(msg);
}
func2("Goode evening");
function sum(x,y)
{
    s = x + y;
    return s;
}
let val = sum (3,4);
console.log(val); 

//arrow functoins
const arrowSum = (a,b) => {
    console.log(a+b); // or return a + b;
}
arrowSum(4,5);

// function that takes string as an argument and returns the no. of vowels in the string

function retvowel(string)
{
    let vol = 0;
    for(let i = 0; i <= string.length; i++)
    {
        if (string[i]== 'A'||string[i]== 'a'|| string[i]== 'e' || string[i]== 'i' || string[i]== 'o' || string[i]== 'u')
        {
            vol++;
        }
        else{
            continue;
        }
    }
    console.log("No. of vowels = ");
    return vol;
}
console.log("Function to count vowels");
