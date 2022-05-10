$(document).ready(function()
{
    //1
    $("#but").click(function()
     {
      $("#div").css({border: "solid red 3px"});

     })

    //2
     index=0;
     $("span").each(function()
     {
        $(this).text("span num:"+ ++index)
        if(index == 5)
        $(this).text("span is empty")

     })

  //3
  $("#text").change(function()
 {
    
    var info = $("#text").val();
   // console.log(info);
    $.getJSON("https://reqres.in/api/users/"+info,function(data)
{
    console.log(data)
    $("#fname").text(data.data.first_name);
    $("#sname").text(data.data.last_name);
    $("#img").attr("src",data.data.avatar);
})
 })


//4
$("#div2").mouseover(function()
{
 $("#div2").toggleClass("styled");
})


//5
$("#marbel").mouseover(function()
{
    var op=parseInt($("#marbel").css("opacity"))

   var timer= setInterval(function()
    {
        op-=.1;
        $("#marbel").css({opacity:op})

        if(op<=0)
        {
            clearInterval(timer)
        }
    },500)
})
$("#marbel").mouseleave(function()
{
    var op=parseInt($("#marbel").css("opacity"))
   // console.log(op)
   var timer= setInterval(function()
    {
        op+=.1;
        $("#marbel").css({opacity:op})

        if(op>=1)
        {
            clearInterval(timer)
        }
    },500)
})













    
    
    
})
