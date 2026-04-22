let a = "Elzero web school";

//zero with slice and charAt

console.log(a.charAt(2).toUpperCase()+ a.slice(3,6));


//"HHHHHHHH"

console.log(a.charAt(-4).toUpperCase().repeat());


//array [Elzero]

console.log([a.slice(0,6)]);



//Elzero school with substr and template literals

console.log(`${a.substr(0, 6)} ${a.substr(-6)}`);


//eLZERO WEB SCHOOl 

console.log(`${a.charAt(0).toLowerCase()}${a.slice(1,-1).toUpperCase()}${a.slice(-1).toLowerCase()}`);