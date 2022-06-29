// 1.1. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function iterationOfIntegers(){
    for(y=1; y<=100; y++){
        if(y%3===0 && y%5===0){
            console.log(`FizzBuzz`);
        }
        else if(y%3===0){
            console.log(`Fizz`);
        }
        else if(y%5===0){
            console.log(`Buzz`);
        }
        else{
            console.log(y);
        }
    }
}
iterationOfIntegers()

// 2.Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let sum = 0;
function add(){

    for(var x=0; x<1000; x++){
        if(x%3===0 && x%5===0){
            sum+=x

        }
     

    }
    console.log(sum)

}
add()
// 3.Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


function numbers(){
    for(let numbs=0; numbs<=20; numbs++){
        if(numbs%2==1){
            console.log(`${numbs} is odd`);
        }
        else{
            console.log(`${numbs} is even`);
        }
    }
}

numbers()

// 4.Write a JavaScript conditional statement to find the 
// largest of five numbers in the given array.
// Let num = [-2, 4,-5, 6,0]


function numbersOfArray(){
    let num = [-2, 4,-5, 6,0];
    let largestNumber = num[0];
    for(let x = 0; x<num.length; x++ ){
        if(largestNumber < num[x]){
            largestNumber = num[x];
        }
        
    }
    console.log(largestNumber);


}

numbersOfArray()


// 5.Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

let a = 10;
let b = 40;
if(a>b){
    console.log(`${a}  is greater than b`);
}
else{
    console.log(`${b} is greater than ${a}`)
}

// 6.Write a JavaScript program to find leap years from 2000 to 2022

let year1 = 2000;
let year2 = 2022;
for(var i = year1; i <=year2; i++){
    if(i%4===0  || i%400===0){
        console.log(`${i} is leap year `);
    }
    
    else{
        console.log(`${i} not leap year`);
    }

}
