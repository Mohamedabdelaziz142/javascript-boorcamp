let balance = 1000;
let withdrawal = 500;

if (balance < withdrawal)
  {
    console.log("Insufficient Balance");
  }
else if(withdrawal % 100 !== 0){
    console.log("ATM only despenses 100 and 200 notes")
  }
else{
  let notes200 = Math.floor(withdrawal / 200);
  let remainder = withdrawal % 200;
  let note100 = 0;

  if(remainder > 0){
    note100 = remainder / 100;
  }
  balance-=withdrawal;

console.log(`200 Notes: ${notes200} 100 Notes: ${notes100}`);
console.log(`Remaining Balance: ${balance}`)
}

