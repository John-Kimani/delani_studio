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
$(document).ready(function(){
    $(".design").on("click", function(){
        $(".pointer").toggle();
        $(".designtext").toggle();
    });
});

$(document).ready(function(){
    $(".development").on("click", function(){
        $(".devicon").toggle();
        $(".developmenttext").toggle();
    });
});
