let balance = 1000;
let withdrawal = 500;

if (withdrawal <= 0) {
  console.log("Invalid amount");
}
else if (balance < withdrawal)
  {
    console.log("Insufficient Balance");
  }

else{
  withdrawal = Math.floor(withdrawal / 100) * 100
  if (withdrawal <= 0) {
    console.log("Invalid amount");
  }
 else{
      let notes200 = Math.floor(withdrawal / 200);
      let remainder = withdrawal % 200;
      let notes100 = 0;

      if(remainder > 0){
        notes100 = remainder / 100;
      }
      balance-=withdrawal;

    console.log(`200 Notes: ${notes200} 100 Notes: ${notes100}`);
    console.log(`Remaining Balance: ${balance}`)
 }
}

