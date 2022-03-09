const currency = {
    'ONE HUNDRED': 10000,
    'TWENTY': 2000,
    'TEN': 1000,
    'FIVE': 500,
    'ONE': 100,
    'QUARTER': 25,
    'DIME': 10,
    'NICKEL': 5,
    'PENNY': 1,
  }
  
  function checkCashRegister(price, cash, cid) {
  
    //Calculate change due.  
    let changeDue = (cash - price) * 100;
    let change = changeDue;
    //Initialize transaction object.
    let transaction = { 
      status: '',
      change: []
      };
    //Get the total cash-in-drawer
    let registerCash = cid.reduce( ( acc, elem ) => acc + elem[1], 0 ) * 100;
    //console.log( registerCash, changeDue );
    // If we have more cash than what's due
    if( registerCash > changeDue ) {
      //Change checker to check if we could give exact change.
      let enoughChange = 0;
      // Let's start at the highest denomination, removing empty denominations.
      cid = cid.filter( elem => elem[1] !== 0).reverse();
      //Loop through the cash-in-drawer (cid) for exact change.
      cid.forEach( cashInDrawer => {
        let denom = cashInDrawer[0];
        let curr = cashInDrawer[1] * 100;
        //Accumulator for the change given to the customer.
        let changeGiven = 0;
        //While our change is more than each denomination and our register currency is more than each denomination, give change.
        while( change >= currency[denom] && curr >= currency[denom] ) {
          changeGiven += currency[denom]; //Add the current denomination to changeGiven.
          change -= currency[denom]; //Reduce the amount of change due by denomination.
          registerCash -= currency[denom]; //Reduce the amount of total cash remaining in the register.
          curr -= currency[denom]; //Reduce the current denomination by the currency unit.
        }
        //console.log( change, currency[denom], changeGiven );
        //If changeGiven is not 0, return OPEN as status and push the change to the transaction object. Also, set enough change equal to the change given.
        if( changeGiven !== 0 ) { 
          transaction.status = 'OPEN';
          transaction.change.push( [ denom, changeGiven / 100 ]);
          enoughChange += changeGiven;     
        }
      });
      console.log( enoughChange );
      //Otherwise, we could not give exact change. Return INSUFFICIENT FUNDS.
      if( enoughChange !== changeDue ) {
        transaction.status = 'INSUFFICIENT_FUNDS';
        transaction.change = [];
      }   
    //If registerCash is equal to exact change due, return CLOSED as status and the change given.
    } else if( registerCash === changeDue ) {
      transaction.status = 'CLOSED';
      transaction.change = cid;
    //If we do not have exact change, return INSUFFICIENT_FUNDS as status and change as an empty array.
    } else {
      transaction.status = 'INSUFFICIENT_FUNDS';
      transaction.change = [];
    }
    console.log( transaction );
    return transaction;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);