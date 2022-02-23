/* $(document).ready(() =>{
    $("#container").fadeIn(1000);

}); */

const checkPhone = function(){
    const phoneInput = $("#phone").val();
    const regex = /^[0-9]*$/g;
    const isPhone = regex.test(phoneInput);
        if(!isPhone) {
            $("[id=phone-error]").html("This is not a phone number");
            $("[id=phone").addClass("is-invalid");
            return;
        }
        $("[id=phone-error]").html("");
        $("[id=phone").removeClass("is-invalid");
    
    };

    var checkEmail = function(){
        var emailInput = $("#email").val();
        var regex = /(^.+@.+\..+$)|(^$)/g;
        var isEmail = regex.test(emailInput);
    
        if(!isEmail){
            $("[id = email-error]").html("This is not a email address");
            $("[id = email]").addClass("is-invalid");
            return;
        }
        $("[id = email-error]").html("");
        $("[id = email]").removeClass("is-invalid");
    }
    
    