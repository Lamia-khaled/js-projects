function submit() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    var date = new Date();
    date.setDate(date.getDate() + 17)

    document.cookie = "username=" + name + "password " + pass; expires = "+date.toDateString()+";
    //localStorage
    localStorage.setItem('username', name);

}

//retriving data using AJAX
var conn = new XMLHttpRequest();
conn.open("GET","https://www.googleapis.com/books/v1/volumes?q=${bookName}");
conn.onreadystatechange = function () {
    if(conn.readyState==4&&conn.status==200)
    {
        var books = JSON.parse(conn.responseText)
    console.log(books);
    for (var i = 0; i < books.length; i++) 
        console.log(books.items[i]);
  

    }
    
}
conn.send();

//retriving data using AjAx
// var todos = new XMLHttpRequest();
// todos.open("GET", "https://jsonplaceholder.typicode.com/todos");
// todos.onreadystatechange = function () {
//     if(todos.readyState==4&&todos.status==200)
// {
//     var retToDo = JSON.parse(todos.responseText)
//     for (var i = 0; i < retToDo.length; i++)
//         if (retToDo[i].completed == true)
//             console.log(retToDo[i]);

// }
    
// }

// todos.send();


//JSON file

var studentinfo ={students:[
    {id:1,name:"ali",age:22,address:"aswan",skills:["swimming","diving"]},
    {id:2,name:"ahmed",age:20,address:"cairo",skills:["reading","writing"]},
    {id:1,name:"hanaa",age:24,address:"alex",skills:["english"]}


]}

//console.log(studentinfo.students[0]);
//var str = JSON.stringify(studentinfo);


//question2

var sasa=new XMLHttpRequest();
sasa.open("GET","https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")

sasa.onreadystatechange=function()
{
    if(sasa.readyState==4&&sasa.status==200)
    {
        var products=JSON.parse(sasa.responseText)
        //console.log(products);
        for(var i=0;i<products.length;i++)
        {
            var newdiv=document.createElement("div");
            var newtitle=document.createElement("h4");
            var newprice=document.createElement("h3");
            var newimg=document.createElement("img");
            newimg.style.width="170px";
            newimg.style.height="150px";
            newprice.style.color ="red";
            newtitle.style.color = "blue";
            newdiv.style.border = "solid";
            newdiv.style.textAlign = "center"
             //newdiv.style.border = "red";
            newtitle.textContent=products[i].name;
            newprice.textContent=products[i].price;

            newimg.src=products[i].image;
            newdiv.appendChild(newimg);
            newdiv.appendChild(newtitle);
            newdiv.appendChild(newprice);
            document.body.appendChild(newdiv)
        }
    }
}


sasa.send()

