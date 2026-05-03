/* Loops Continue Tasks..... 
1- Ask the user to enter a number then print in console if the number 
is Prime Or Not...... 
(prime numbers   هي االعداد االوليه التي تقبل القسمه علي نفسها والواحد الصحيح ) 
*/
let n = Number(prompt("Enter a number"));
let prime = true;

if (n < 2){
  prime = false;
} 
else{
        for(let i = 2; i < n; i++){
          if(n % i === 0){
            prime = false;
            break;      
          }    
        }
  }
    prime ? console.log(`${n} is a prime number`) : console.log(`${n} is not a prime number`);

/*
2- ( Count positive and negative numbers and compute the average of 
numbers )  Write a program that reads an unspecified number of 
integers, determines how many positive and negative values have 
been read, and computes the total and average of the input values 
(not counting zeros). Your program ends with the input 0 . Display the 
average as a floating-point number. 
Must Show in console: 
The number of positives is 3 
The number of negatives is 1 
The total is 5.0 
The average is 1.25 
*/ 
let positive_numbers = 0;
let negative_numbers = 0;
let total = 0.0;
let count = 0;

let nums = Number(prompt("Enter a number and zero to quit"));
while(nums !== 0){

  if (nums < 0){
    negative_numbers++;
  }
  else if(nums > 0){
    positive_numbers++;
  }
  count++;
  total += nums;
  nums = Number(prompt("Enter a number and zero to quit"));
}
let average = 0;
if(count > 0){
  average = total/count;
}
console.log(`
The number of positives is ${positive_numbers}
The number of negatives is ${negative_numbers} 
The total is ${total}
The average is ${average}`);

/*
3 - (Compute the greatest common divisor) To find the greatest 
common divisor of two integers n1 and n2 is as follows: First find d to 
be the minimum of n1 and n2 , then check whether d , d-1 , d-2 , . . . , 
2 , or 1 is a divisor for both n1 and n2 in this order. The first such 
common divisor is the greatest common divisor for n1 and n2 . Write 
a program that prompts the user to enter two positive integers and 
displays the gcd. (gcd هو العامل المشترك االكبر)  
Example if the first number was 25 and seond number was 5 then the 
gcd will be 5
*/
let n1= Number(prompt("Enter the first number"));
let n2 = Number(prompt("Enter the second number"));
let gcd = 0; 
let d = 0;
n1 > n2 ? d = n2 : d = n1;
  for(let i = d; i >= 1; i--){
      if(n1 % i === 0 && n2 % i === 0){
          gcd = i;
          break;
      }
  }
    console.log(`The gcd of ${n1} and ${n2} is ${gcd}`)