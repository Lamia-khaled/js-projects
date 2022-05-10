function person(_name, _age)
{
    var name = _name;
     var age = _age;
     if(this instanceof person)
     {
         throw "abstracted";
     }

    this.setName = function(_name)
    {
        this.name = _name;
    }

     this.getName = function()
    {

        return name;
    }

    this.setAge = function(_age)
    {
      this.age = _age;
    }

    this.getAge = function()
    {
         return  age;
    }
    this.tostring = function()
    {
        console.log("the name is "+ this.name +" the age is "+ this.age);

    }

}

 var p = new person();
// p.setName("ali");
// p.setAge(22);
// p.tostring();

 Employee.prototype = person.prototype;

function Employee(_id,_name, _age)
{
  person.call(this,_name,_age)
  this.id = _id;
  this.name = _name;
  this.age = _age;

  // if(this instanceof Employee.Count > 5)
  // {
  //     throw "cant make anymore objects"
  // }


  Employee.count = ++Employee.count || 1;
  Employee.getEmpCount = function()
  {
      return Employee.count;
  }

  this.tostring = function()
  {
    console.log( "the id is " +this.id + "the name is "+ this.name +" the age is "+ this.age );

  }
  Employee.displayHTRules = function()
  {
      console.log("i print rules");
  }
}


 var emp = new Employee(1,"hasan", 40);
 emp.tostring();

console.log(Employee.displayHTRules());
 

 Student.prototype = person.prototype;

 function Student(_id,_name,_age)
 {
    this.id = _id;
    this.name = _name;
    this.age = _age;
   
    this.tostring = function()
  {
    console.log("the id is " +this.id + "the name is "+ this.name +" the age is "+ this.age );

  }
  this.Student = [];

 }

 var s1 = new Student(1,"sherif",25);
 s1.tostring();

course.prototype = Student.prototype;
 //2
 function course(_name)
 {
   this.name = _name;

   this.tostring = function()
   {
     console.log("the course name is "+ this.name);
   }
 }

 var c1 = new course("English");
 var c2 = new course("french");
 var c3 = new course("deutch");
 var c4 = new course("kurdish");
 this.Student.push(c1,c2);


 //literal object
 var ScientificDepart = 
 {
   name: "hala",
   location: "aswan",
   Address: {
     city: "aswan",
     street: "aaa",
     zipCode : 123,

   },
     display : function()
   {
      console.log("my name is "+ this.name + "the location is "+ this.location +" and the address is "+this.city + this.street+ this.zipCode);
   }

 }


 


