$(document).ready(function(){

    $(".slides").css("display", "none");
    $(".slides").first().css("display", "block");

    $(".slides").on("click" , function(){
        var tl = $(this).width() + 7;       
        $(this).next().css("display","block");
        $(this).animate({
            "margin-left": "-" + tl + "px"
            },{
                duration: 500
            }
        ); 
    });
});
