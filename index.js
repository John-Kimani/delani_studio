// form validation start
$(document).ready(function(){
    $("form#form").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        if(name && email){
            alert (name + ",we have received your message. Thank you for considering us. We shall respond as soon as possible. Cheers!");
        }
        else{
            alert ("Please enter you name and email!");
        }
    });
});

//form validation end

// what we do functionality start

//design toggle effect
$(document).ready(function(){
    $(".design").on("click", function(){
        $(".pointer").toggle();
        $(".designtext").toggle();
    });
});

//development toggle effect
$(document).ready(function(){
    $(".development").on("click", function(){
        $(".devicon").toggle();
        $(".developmenttext").toggle();
    });
});

//product management toggle effect
$(document).ready(function(){
    $(".product-management").on("click", function(){
        $(".checklist").toggle();
        $(".product-management-txt").toggle();
    });
});

// what we do functionality end

// portfolio functionality start
$(document).ready(function(){
    $(".dark").mouseenter(function(){
        $(".black").hide();
        $(".dark").css("opacity", "3")
    });
    $(".dark").mouseleave(function(){
        $(".black").hide();
        $(".dark").css("opacity", "3")
    });
})
