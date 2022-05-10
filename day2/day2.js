//1- picking a random countr from array
var country = ["america", "southKorea", "malasia", "england", "spain", "southAfrica" ,"saudiArabia"];
var pickCountry = country[Math.floor(Math.random() * country.length)]; 
document.write("your next destination is " + pickCountry);
document.write("<br>");

//2- Display the date and time in local format
const d = new Date();
document.write(d);
document.write("<br>");

//3-checking the name and mail
// var userName = prompt("please Enter you full Name")
// var regName = /^[a-zA-Z ]{3,30}$/;
// if(regName.test(userName.value))
// alert("valid name given");
// else
// alert("invalid name given");

// var email = prompt("please Enter your Email");
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(mailformat.test(email.value))
// {
//     alert("valid email address!");
//     document.form1.text1.focus();
// }
// else
// {
//     alert("inValid email address!");
//     document.form1.text1.focus();

// }

// 4-getting the age 
// var year_born = prompt("please Enter your date of birth");
// var d1 = new Date();
// var n = d1.getFullYear();
// function getAge(birthYear)
// {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     age = currentYear - birthYear;
//     return age;
// }
// calculatedAge = getAge(year_born);
// alert("you are "+ calculatedAge + "years old");

//5-array of objects
// const studentInfo = [{Sname:"ali",degree:80},{Sname:"sarah", degree:90},{Sname:"mona",degree:95},{Sname:"selim", degree:97}];
// console.log(studentInfo);
// studentInfo.push({Sname:"hany",degree:77});
// console.log(studentInfo);

// studentInfo.pop({Sname:"hany",degree:77});

// for ( var i = 0 ; i <= studentInfo.length ; i++)
// if(studentInfo[i].degree >= 90 && studentInfo[i].degree <= 100)
// document.write(studentInfo[i].Sname + "<br>");

//6- array to return day name
// const weekDay = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// const d2 = new Date();
// var day = weekDay[d2.getDay()];
// console.log(day);


//7-sorted array
// var studentDegree = [60,100,10,15,85];
// studentDegree.sort(function(a,b){
//     return b-a
// });
// //console.log(studentDegree);
// var highstDegree = studentDegree[0];
// //console.log(highstDegree);
// for(var i = 1; i <= studentDegree.length ; i++)
//  if(studentDegree[i]< 60)
//  console.log(studentDegree[i]);

//8- rey and catch
// var num = 3;
// try{
//     num.toUpperCase();
// }
// catch(e){
//     console.log("invalid!")
// }






