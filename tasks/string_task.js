/*
1.Write a JavaScript program to print length of a string.
◦Test data : Hello world!
◦Output : the length of String = 11 */

let data = "Hello world!";
let count = 0;
for(let i = 0; data[count] !== undefined; i++){
  count++;
}
console.log(count);

//or

let count2 = data.length;
console.log(count2);


/*2.Write a JavaScript program to copy one string to another
string (using charAt() method).
*/
st1 = "hello"
st2 = ""

for(let i = 0; i < st1.length; i++){
  st2 += st1.charAt(i);
} 

/*
3.Write a JavaScript program to print the concatenation two 
strings.
◦Test data : 
▪first string : Hello
▪Second string :  world!
◦Output : Hello world!
*/

let first_string = "Hello";
let second_string = "world!";
console.log(`${first_string} ${second_string}`);

/*
4.Write a JavaScript program to convert lowercase string 
to uppercase.
◦Test data : hello world!
◦Output : HELLO WORLD!
*/
let text = "hello world!";
console.log(text.toUpperCase());
/*
5.Write a JavaScript program to convert uppercase string 
to lowercase.
◦Test data : WELCOME TO JS
◦Output : welcome to js
*/
let text5 = "WELCOME TO JS";
console.log(text5.toLowerCase());
 
/*
6.Write a JavaScript program to count total number of 
words in a string (using split() method).
◦Test data : My name is Ahmed
◦output : the total number of words = 4
*/
let text6 = "My name is Ahmed";
console.log(`the total number of words = ${text6.split(" ").length}`);
/*
7.Write a JavaScript program to find first occurrence of a 
word in a given string.                                         
◦Test data : 
▪string : I love Camp Coding.
▪Search for  :  Camp
◦output : 'Camp' is found at index 7
*/
let text7 = "I love Camp Coding";
let word = "Camp"
console.log(`'${word}' is found at index ${text7.indexOf(word)}`);
/*
8.Write a JavaScript program to find last occurrence of a 
character in a given string.
◦Test data : 
▪string : I love Camp Coding.
▪Search for  :  o
◦output : Last index of 'o' is 13.
*/
let text8 = "I love Camp Coding";
let char = "o"
console.log(`Last index of ${char} is ${text8.lastIndexOf(char)}`);
/*
9.Write a JavaScript program to remove leading(مقدمة) and
trailing(مؤخرة) white space characters from a given 
string.
◦Test data : 
▪string : ”     I love Camp Coding     
◦output :  ”I love Camp Coding”.
 ”. */

let text9 = "    I love Camp Coding"
console.log(text9.trim());
 
 /*
 10. Write a JavaScript program to split a string and 
convert it into an array of words.
◦Test data : 
▪string : I love Camp Coding.
◦output : ["I", "love", "Camp", "Coding"]
 */
let text10 = "I love Camp Coding"

console.log(`${text10.split(" ")}`);
/*

11. Write a JavaScript program to repeat a string a 
specified times.
◦Test data : 
▪string : “Camp Coding “.
▪Search for  :  3
◦output : “Camp Coding Camp Coding Camp Coding “.

 */
let text11 = "Camp Coding";
let num = 3;
console.log(`${text11.repeat(num)}`);
/*

12. Write a JavaScript program to get a part of a string 
from 0 to 8 (using 3 ways).
◦Test data : 
▪string : “Hello World!“.
◦output : “Hello wo“.

 */
let text12 = "Hello World!";
//first way
console.log(`${text12.slice(0,8)}`);

//second way
console.log(`${text12.substr(0,8)}`);

//third way

console.log(`${text12.substring(0,8)}`);
/*

13. Write a JavaScript program to get a part of a string 
from the first occurrence of ‘o’ to the last occurrence of 
‘o’ (using 3 ways).
◦Test data : 
▪string : “I love Camp Coding“.
◦output : “ove Camp C“.

 */
let text13 = "I love Camp Coding";
console.log(`${text13.slice(text13.indexOf("o"), text13.lastIndexOf("o"))}`);
/*

14. Write a JavaScript program to know if the phone 
number is Egyptian or not (Egyptian number starts with 
+20).
◦Test data : 
▪string : “+201058746932“.
▪string : “+25852147“.
◦output : 
▪true
▪false 

 */
let text14 = "+201058746932"
let text15 = "+25852147"
let num = 3;
console.log(`${text14.startsWith("+20")}`);
console.log(`${text15.startsWith("+20")}`);

/*

*/