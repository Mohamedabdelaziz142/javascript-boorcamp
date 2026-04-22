
// challange this to aternary condition

/*if(a < 10){
  console.log(10);
}else if(a >= 10 && a <= 40){
  console.log("10 to 40");
}else if(a >= 10 && a <= 40){
  console.log("10 to 40");
}else {
  console.log("unknown");
}*/
let a = 10;

a < 10 ? console.log(10):
a >= 10 && a <= 40 ? console.log("10 to 40"):
a >= 10 && a <= 40 ? console.log("10 to 40"):
console.log("unknown")



//challange  2 make the condition true

let st = "Elzero Web School";

if ((st.length*2).toString() === "34"){
  console.log("good");
}

if (st.charAt(8).toLowerCase() === "w"){
  console.log("good");
}

if ( st !== "string")    
  {
    console.log("good");
  }

if ( typeof st === typeof "number"){
  console.log("good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero"){
  console.log("good");
}