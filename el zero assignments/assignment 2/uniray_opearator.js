/* Challenge 1 */
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);

/*
[++a]
value: 11
explaination: pre-increement opeareator

[+]
addition implementation

[+b++]
value: 20
explaination: uniray opereator turns it the string to number and post-increament chanegs the value to 21 but after the operation

[+]
addition implementation

[+c++]
value: 80
explaination: uniray but its already a number the post-increement opeareator which means its 81 after the opearation

[-]
subtraction opereator

[+a++]
value: 11
explaination: uniray opearator post-increement opeareator changes value to 12 after print

total = 11 + 20 + 80 - 11 = 100

*/

// a = 12 b = 21 c = 81
console.log(++a + -b + +c++ - -a++ + +a);

/*
[++a]
value: 13
explaination: pre-increement opeareator changes value to 13 

[+]
 addition opearator 

[-b]
value: -21
explaination: uniray opearator turns 21 to -21

[+]
addition opearator 

[+c++]
value: 81
explaination: uniray opearator has no effect its already a number post-increament 81 to 82


[-]
subtraction  opearator 

[-a++]
value: -13
explaination: post-increament opearator turns -13 to 14

[+]
addition opearator 

[+a] 
value: 14
explaination: uniray opearator has no effect since its already a number

total = 13 + -21 + 81 - -13 + 14 = 
        73 + 13 + 14 = 100

*/
// a = 14 b = 21 c = 82
console.log(--c + +b + --a * +b++ - + b * a++ + --a - +true );

/*
[--c]
value: 81
explaination: pre decrement opearator changes the value from 82 to 81 

[+]
addition implementation

[+b]
value: 21
explaination: uniray has no effect its already a number not a string 

[+]
addition implementation

[--a]
value: 13
explaination: pre decrement opearator changes the value from 14 to 13 


[*]
multiplication operator

[+b++]
value: 21 
explaination: uniray opearator has no effect its already a number post-increament 21 to 22

[-]
subtraction operator

[+b]
value: 22
explaination: uniray opearator has no effect its already a number but post increment effect is there now

[*]
multiplication operator

[a++]
value: 13
explaination: post-increment value changes from 13 to 14 

[+]
addition operator

[--a]
value: 13
explaination: pre decrement changes value from 14 to 13 
[-]
subtraction operator

[+true]
value: 1
explaination: uniray turns the boolean value to a number  

total = 81 + 21 + (13 * 21) - (22 * 13) + 13 - 1
*/

//Challenge 2

let d = "-100";
let e = "20";
let g = true;
let f = 30;

console.log(-d * +e); // 2000
console.log(-d + +e*2 + f + +g*3); //173
