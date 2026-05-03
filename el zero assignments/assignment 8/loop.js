// loop challenge

let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar"];

let adminCount = 0
for(let x=0; x < myAdmins.length; x++){
  if(myAdmins[x] === "Stop")
  {
    break;
  }
  adminCount++;
}
document.write(`<div>We Have ${adminCount} Admins</div>`);

for(let i=0; i < myAdmins.length; i++){
    if(myAdmins[i] === "Stop"){
      break;
    }
    document.write(`<hr>`);
    document.write(`<div>The Admin For Team ${i+1} Is ${myAdmins[i]}</div>`);
    document.write(`<h3>Team Members:</h3>`);
    let teamCount=1
    for(let j=0; j < myEmployees.length; j++){
      if(myEmployees[j][0] === myAdmins[i][0])
      {
        document.write(`<p>- ${teamCount} ${myEmployees[j]}</p>`);
        teamCount++;
      }
    }
    
}