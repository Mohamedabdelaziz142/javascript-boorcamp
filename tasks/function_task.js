/*Function Tasks 
1) Write a JavaScript function that checks whether a 
passed string is palindrome or not? A palindrome is 
word, phrase, or sequence that reads the same 
backward as forward, e.g., madam or nurses run. 
 */

function palindrome(word){
  let clean_word = word.replaceAll(" ","").toLowerCase();
  let reversed_word = clean_word.split('').reverse().join('');
  if(clean_word === reversed_word){
    console.log("The word is a Palindrome");
  }
  else{
    console.log("This word is not a Palindrome");
  }
}
/*
2) Write a JavaScript function that accepts a number as a 
parameter and check the number is prime or not. 
*/
function prime_num(num){
  if(num < 2){
    return console.log(`${num} is not a prime number`);
   }
  for(let i = 2; i < num; i++){
    if(num % i === 0){
    return console.log(`${num} is not a prime number`);
   }
  }
  console.log(`${num} is a prime number`);
}
/*
3) Write a JavaScript function that accepts a number as a 
parameter and compute the factorial. 
a. Factorial of 5 =5*4*3*2*1 
*/
function factorial(num){
  let fact = 1;

  for(let i = 1; i <= num; i++){
     fact = fact * i;
  }

  return fact;
}

/*f
4) Write a JavaScript function that accepts two arguments, 
a string and a letter and the function will count the 
number of occurrences of the specified letter within the 
string.  
a. Sample parameters: 'w3resource.com', 'o' 
b. Expected output: 2 
*/

function count_char(text, char){
  let count = 0;
  for(let i = 0; i < text.length; i++){
    if(text[i] === char){
      count++;
    }
  }
  return count;
}

/*
5) Write a JavaScript function that accept a list of country 
names as input and returns the longest country name as 
output. 
a. Sample function: Longest_Country_Name(["Australia", 
"Germany", "United States of America"]) 
b. Expected output: "United States of America"   */

function longest_country_name(data){
  let longest = "";
  for(let i = 0; i < data.length; i++){
    if (data[i].length > longest.length){
      longest = data[i];
  }
}
  return longest;
}