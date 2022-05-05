// parent window opens child one.
var button;
function go()
{
    button = window.open("","","width=100px , height=100px");
   // button.document.write("hello");
   move();
   

}

function move()
{
   console.log("hi");
    var l = 5;
     l = setInterval(function()
{
       button.moveBy(l,l);
       l+=100;

          },1000)
}

function moveoff()
{
   clearInterval(l);
}

//





    
