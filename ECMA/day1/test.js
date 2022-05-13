
// let a = 5;
// let b = 3;

// [a , b] = [b , a];
// console.log(a);
// console.log(b);

function twoValues()
{ 
    
     let max = Math.max(...arguments)
     let min = Math.min(...arguments)
     //console.log(max , min)
     return[max , min]

}

//console.log(twoValues(1,2,3,4,5));

//3
let student ={
    name : "omar",
    university :"Ain shams",
    faculty :"Alsun",
    finalGrade : 100
}

//console.log(`the name is ${student.name}, the university is ${student.universit} , the facult is ${student.faculty}, and the final grade is ${student.finalGrade}`)

//4

 let repeated = ["palestine", "yemen", "syria","iraq","iraq"];
 //console.log(repeated.length)
 let s = new Set(repeated);
 //console.log(s.size);
 if (repeated.length != s.size)
 {
     var result = repeated.length - s.size;
 }

 let countdepulicatedItems = result;
 console.log(countdepulicatedItems);

 //using for of and spread operator

  let transform = [...s];
  //console.log(transform);
  for(let i of transform)
  {
      console.log(i)
  }

 //make union in another way 
 let s1 = new Set([1,2,3,4,5]);
 //console.log(s1);
 function union(SetA , SetB)
 {
     const union = new Set(SetA);
     for( const val of SetB)
     {
         union.add(val)
     }
     return union
 }

 console.log(union(s,s1));

 //map

 let std = new Map();

 std.set("mena", {
     Grades: [{ Coursename: "JavaScript", Grade: "Excellent" },
     { Coursename: "Jquery", Grade: "Good" },
     { Coursename: "React", Grade: "V.Good" },
     { Coursename: "ESNext", Grade: "Good" },
     { Coursename: "NodeJS", Grade: "V.Good" }]
 })
 
 std.set("sarah", {
     Grades: [{ Coursename: "JavaScript", Grade: "Excellent" },
     { Coursename: "Jquery", Grade: "Good" },
     { Coursename: "React", Grade: "V.Good" },
     { Coursename: "ESNext", Grade: "Good" },
     { Coursename: "NodeJS", Grade: "V.Good" }]
 })
 
 
 std.set("hend", {
     Grades: [{ Coursename: "JavaScript", Grade: "Excellent" },
     { Coursename: "Jquery", Grade: "Good" },
     { Coursename: "React", Grade: "V.Good" },
     { Coursename: "ESNext", Grade: "Good" },
     { Coursename: "NodeJS", Grade: "V.Good" }]
 })
 
 
 for (let i of std) 
  {

         console.log(i)    
    
 }


 
     


