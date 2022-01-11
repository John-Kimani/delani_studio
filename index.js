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
            alert ("Please enter your name and email!");
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
    $(".black").mouseenter(function(){
        $(".dark").show();
        $(".black").css("opacity", "3")
    });
    $(".black").mouseleave(function(){
        $(".dark").hide();
        $(".black").css("opacity", "3")
    });
});

$(document).ready(function(){
    $(".mighty").mouseenter(function(){
        $(".ontario").show();
        $(".mighty").css("opacity","3")
    });
    $(".mighty").mouseleave(function(){
        $(".ontario").hide();
        $(".mighty").css("opacity", "3")
    });
});

$(document).ready(function(){
    $(".color-orange").mouseenter(function(){
        $(".orange").show();
        $(".color-orange").css("opacity","3")
    });
    $(".color-orange").mouseleave(function(){
        $(".orange").hide();
        $(".color-orange").css("opacity", "3")
    });
});

$(document).ready(function(){
    $(".jim").mouseenter(function(){
        $(".movies").show();
        $(".jim").css("opacity","3")
    });
    $(".jim").mouseleave(function(){
        $(".movies").hide();
        $(".jim").css("opacity", "3")
    });
});

$(document).ready(function(){
    $(".good").mouseenter(function(){
        $(".elena").show();
        $(".good").css("opacity","3")
    });
    $(".good").mouseleave(function(){
        $(".elena").hide();
        $(".good").css("opacity", "3")
    });
});

$(document).ready(function(){
    $(".calc").mouseenter(function(){
        $(".cssbtns").show();
        $(".calc").css("opacity","3")
    });
    $(".calc").mouseleave(function(){
        $(".cssbtns").hide();
        $(".calc").css("opacity", "3")
    });
});

$(document).ready(function(){
    $(".burned").mouseenter(function(){
        $(".logo").show();
        $(".burned").css("opacity","3")
    });
    $(".burned").mouseleave(function(){
        $(".logo").hide();
        $(".burned").css("opacity", "3")
    });
});
$(document).ready(function(){
    $(".giraffe").mouseenter(function(){
        $(".restaurant").show();
        $(".giraffe").css("opacity","3")
    });
    $(".giraffe").mouseleave(function(){
        $(".restaurant").hide();
        $(".giraffe").css("opacity", "3")
    });
});
