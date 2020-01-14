
$("input").on("keypress",function (event) {
    var key = event.which;
    if(key === 13)  // the enter key code
     {
        var todoText = $(this).val();
        $(this).val("");
        $("#to").append("<li class='todo'><span class='del'><i class='fas fa-trash-alt'></i> </span>"+todoText+"</li>");
     }
});  

$("ul").on("click",".todo",function(){

    $(this).toggleClass("selected");

});

$("ul").on("click",".del",function(event){

    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });

    event.stopPropagation();

});

$(".fa-plus").click(function(){
    $("input").fadeToggle(100);
});


