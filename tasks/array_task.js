/*
1. Write a JavaScript program to sort the items of an array. 
a. Sample array​ : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; 
b. Sample Output​ : [ -4, -3, 1, 2, 3, 5, 6, 7, 8 ] 
*/
//first way bubble sort
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
for(let i = 0; i < arr1.length-1; i++){
  for(let j = 0; j < arr1.length-i-1; j++){
    if(arr1[j] > arr1[j+1]){
      [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]];
    }
  }
}
//second way sort method
arr1.sort((a,b)=>a-b);
/*
2. Write a JavaScript program to find the most frequent item of an array. 
a. Sample array​ : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
b. Sample Output​ : a ( 5 times ) 
*/
 var arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
 let values = {};
 let count = 0;
 let mostFrequent;
 for(let i = 0; i < arr2.length; i++){

  let item = arr2[i];

  if(values[item]){    
    values[item]++;
  }
  else {
    values[item] = 1;
  }
    if(values[item] > count){
      count = values[item];
      mostFrequent = item;    
    }
}
console.log(`${mostFrequent} ( ${count} times )`);
/*
3. Write a JavaScript program to add items in a blank array by using prompt and 
display the items in this format. 
a. Element 0= 25 
b. Element 1= 5 
c. Element 2= 72 
*/
let arr3 = [];
let elements = 3;
for(let i = 0; i < elements; i++){
let el = Number(prompt(`ELement ${i} = `));
arr3.push(el);
}
for(let i = 0; i < arr3.length; i++){
  console.log(`Element ${i} = ${arr3[i]}`);
}
/*
4. Write a JavaScript program to find the leap years from 2000 to 2020 and put them 
in an array and display the items in this format. 
a. The 1 leap year from 2000 to 2020 is 2000 
b. The 2 leap year from 2000 to 2020 is 2004 
c. ……….. 
*/
let leapYear = [];
for(let y = 2000; y <= 2020; y++){
  if(y % 4 === 0){
    leapYear.push(y);
  }  
}
for(let i = 0; i < leapYear.length; i++){
  console.log(`The ${i+1} year from 2000 to 2020 is ${leapYear[i]}`);
}

/*
5. There are two arrays with individual values, write a JavaScript program to compute 
the sum of each individual index value from the given arrays. 
a. Sample array : 
i.
array1 = [1,0,2,3,4]; 
ii.
array2 = [3,5,6,7,8,13]; 
b. Expected Output : 
i.
[4, 5, 8, 10, 12, 13] 
*/
let arr4 = [1,0,2,3,4];
let arr5 = [3,5,6,7,8,13];
let total = [];
let d = 0;

arr4.length < arr5.length ? d = arr5.length : d = arr4.length
for(let i = 0; i < d; i++){
   total[i] = (arr4[i] || 0) + (arr5[i] || 0);
  }
console.log(total);
/*
6. Write a JavaScript program to find the second largest element in an array. 
*/
let largestElement = 0;
let secondLargestElement = 0;
let arr6=[2, 4, 9, 5, 7];
for(let i = 0; i < arr6.length; i++){
  if(arr6[i] > largestElement){
    secondLargestElement = largestElement;
    largestElement = arr6[i];
  
  }
  else if(arr6[i] < largestElement && secondLargestElement < arr6[i]){
      secondLargestElement = arr6[i];
    }
  }
console.log(` The second largest element in the array ${secondLargestElement}`);

/*
7. Write a JavaScript program to print all unique(اﻟﻌﻨﺎﺻﺮ اﻟﻐﯿﺮ ﻣﺘﻜﺮرة) elements in the 
array.
*/
let arr7 = [4,13,5,5,6,6];
let unique_array =[];
for(let i = 0; i < arr7.length; i++){
  if(arr7.indexOf(arr7[i]) === arr7.lastIndexOf(arr7[i])){
    unique_array.push(arr7[i])
  }
}
console.log(unique_array)