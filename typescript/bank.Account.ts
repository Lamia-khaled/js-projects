

    export class bankAccount 
    {
      static accountNumber : number = 1;
      name : string;
      balance : number;
      
      constructor(_n,_b)
      {
          this.name = _n;
          this.balance = _b;
      }
   
       getAccountNum():number
      {
         return bankAccount.accountNumber;
         bankAccount.accountNumber ++;
      }
   
       display()
      {
          console.log(this.name , this.balance)
      }
   
    }


 