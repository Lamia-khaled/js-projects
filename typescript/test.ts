
//Create objects from rectangle and square and test them, and make sure the square inherited rectangle members.

class Rectangle 
{
    width : number;
    height: number;
   constructor(_w, _h)
   {
     this.width = _w;
     this.height = _h
   }

   CalcCircumference(_w,_h) 
   {
       var c = 2*(_w + _h);
       return c;
   }

   static WhoAmI() 
   {
       console.log("iam rectangle")
   }

}

let rec:Rectangle = new Rectangle(2,4);
console.log(rec.CalcCircumference(2,4));
Rectangle.WhoAmI();

class square extends Rectangle
{
    
    length: number;
    
    constructor(_l)
    {
        super(3,3)
        this.length = _l;
    }

    CalcCircumference(_l) 
    {
        let pi =3.14;
        let c = pi * _l;
        return c;
    }

    static WhoAmI() 
   {
       console.log("I am square")
   }

}

let sq : square = new square(5);
console.log(sq.CalcCircumference(5));
square.WhoAmI();
sq.height = 1; //the Rectangle fiels are accessible in square.




//Types annotation 
let uname:string = "ola";
console.log(uname);


//union types
let change:number | boolean = true; // you may add a number instead
console.log(change);



//interface

interface Ipaintable{
    size: number,
    color:string,
    print:()=> string

}

let ball : Ipaintable = {
    size:17,
    color:"blue",
    print:()=>`the size is ${this.size} $ the color is ${this.color}`


}
console.log(ball.print());

//enum

enum types {
    circle = 1,
    rectangle = 2,
    square = 3,

}

let t : types =types.square;
console.log(t);

//function

function display(name:string):string{
    var greeting = `hello ${name}`;
    return greeting;
}

console.log(display("lamia"));

//generics

function type<t>(val: t): t
{
    return val;
}

let value = type("iam string");
console.log(value);

let value2 = type(3);
console.log(value2);


//class, inheritance and function overriding

class person 
{
    fullName:string;
    age :number;

    constructor(_name,_age)
    {
      this.fullName = _name;
      this.age = _age
    }

    tostring()
    {
        console.log(this.fullName, this.age)
    }

}

let p1 : person = new person("ahmed",20);
// console.log(p1);
p1.tostring();


class Employee extends person
{
    job : string;
  constructor(_name,_age, _job)
  {
     super(_name,_age)
      this.job = _job;
     
  }
  tostring()
  {
      console.log(this.fullName, this.age, this.job);
  }


}

let emp:Employee = new Employee("ali",30,"dev");
emp.tostring();


// module
//  import { bankAccount } from "./bank.Account";

//  let A : bankAccount = new bankAccount("mohamed" , 2000);
//   console.log(A.display());
//   console.log(A.getAccountNum());

  //Namespace






  //Implement Queue or Stack using typescript and OOP.

//  import { Stack } from "./stack.class";
 
 
//  let stack = new Stack();
//    stack.push(1);
//    stack.push(2);
//    stack.push(3);
//    console.log(stack);
//    console.log(stack.pop());
  

  

//Implement linked list using typescript and OOP [create class node, and class linkedList].







//Singleton design pattern 

let instance = null;
class printer
{
    pages : number
    constructor(_pages)
    {
        this.pages = _pages;

    }

    display()
        {
            console.log(`you are connected to the printer, you want to print ${this.pages}`);
        }

       static getInstance(numOfPages)
        {
            if(!instance)
            {
                instance = new printer(numOfPages)
            }
            return instance;
        }
}


let obj = printer.getInstance(4);
obj.display();
let obj2 = printer.getInstance(3);
obj.display();

  














 




