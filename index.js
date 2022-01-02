// form validation
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
