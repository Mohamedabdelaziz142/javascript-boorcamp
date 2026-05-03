let zero = 0;
let counter = 3;

let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
//arrays  Challenge without numbers

//["Osama", "Elham","Mazero","Ahmed"]
console.log(my.slice(zero,my.indexOf("Gamal")).reverse()); 

//["Elham", "Mazero"]
console.log(my.slice(my.indexOf("Mazero"),counter).reverse()); 

 //"Elzero"
console.log(my[my.indexOf("Elham")].
slice(zero,my.indexOf("Elham"))+my[my.indexOf("Mazero")].slice(my.indexOf("Elham")));

 //"rO"
console.log(my[my.indexOf("Mazero")].slice(my.indexOf("Gamal"), my.indexOf("Osama")+counter).slice(zero,my.indexOf("Mazero"))
+ my[my.indexOf("Mazero")].slice(my.indexOf("Gamal"), my.indexOf("Osama")+counter)
.slice(my.indexOf("Mazero")).toUpperCase());