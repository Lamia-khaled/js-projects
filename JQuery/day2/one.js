$(document).ready(function()
{

//     $("#div1").dialog({
//      modal:true,
//      autoOpen:true,
//      buttons:{
//        save:function()
//        {
       
//             var name=$("#name").val()
//             var pass=$("#pass").val()
//            $("#div2").text(name + pass);
//            $("#div1").dialog("close")

 
//        },
//        close:function()
//        {
//          $("#div1").dialog("close")
//        }

//     }

// })

//2
// $("#div3").css({width:100,height:100,border:"solid 2px",backgroundcolor:"blue"});
// $(".drag").draggable({
//     revert:"invalid"
//      });

//  $("#div3").droppable({
//      accept:"#one",
     
//  });

//3
$.getJSON("https://reqres.in/api/users/",function(items)
{
    console.log(items);
    $("#myTable").dataTable(
        {
            data:items.data,
            columns:[
            { data: 'id' },
         { data: 'first_name' },
        { data: 'last_name' },
        { data: 'email' },
        { data: 'avatar' },
        { render: function(data){
          return '<img src=" '+ data + ' " class="avatar">'
        } },
       
        
        

            ]
         }
    )



})












})
