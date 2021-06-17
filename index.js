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

    $("span#nextitem").on("click" , function(){
        console.log("clicked");
    });

    $("span#preitem").on("click" , function(){
        console.log("clicked");
    });

});
