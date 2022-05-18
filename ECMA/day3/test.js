//1 a


 let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

 function isString(element)
 {
     if(typeof element === 'string')
     {
         return true;
     }
     else{
         return false
     }
 }

console.log(fruits.every(isString));


 //1 b
function StartWithS(element)
{
    if(element.startsWith("a"))
    {
        return true;
    }
    else{
        return false;
    }
}

 console.log(fruits.every(StartWithS));

 //1 c

 let arrFilter = fruits.filter(function(item,index)
{
    if(item.startsWith("a") || item.startsWith("b"))
    {
        return item
    }
    
})
console.log(arrFilter);

//1 d
function addString(value)
{
   return "i like "+ value;
   
}

let newArr = fruits.map(addString);
console.log(newArr);

//1 e

function print(value)
{
  console.log(value);
}
let forArr = newArr.forEach(print);


//2

function track()
{
    let ID = document.getElementById("id").value; 
    //console.log(ID);

 fetch("https://jsonplaceholder.typicode.com/posts?id="+ ID).then(function(data)
{
    data.json().then(function(x)
    {
        //console.log(x)
        document.write(JSON.stringify(x) )
        //console.log(JSON.stringify(x))
    })
}).catch(function(err)
{
    console.log(err)
})

}


//3
let img = document.getElementById("img")
let h2 = document.getElementById("h2")
let h3 = document.getElementById("h3")

async function get()
{
    let response=await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
    let data= await response.json()
    console.log(data)
    for(let i=0;i<data.length;i++)
    {
       //console.log(data[i]);
       // console.log(data[i].name)
     h2.innerHTML = data[i].name;
     h3.innerHTML = data[i].price;
     img.src = data[i].image;
    // document.write(data[i].name)
    // document.write("<br>")
    

    
    }

}

get()








