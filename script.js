$(document).ready(function(){
    $("#form-validate").validate({
        rules:{
            femail:{
                required:true,
                email:true,
                Number:true
            },
            pass:{
                required:true,
                minlength:4,
                maxlength:10
            }

        },
        messages:{
            femail:{
                required:"Hey man, don't leave this field empty!",
                email:'Enter valid email address'
            },
            pass:{
                required:'hey,enter password',
                minlength:'enter minimum 4 length',
                maxlength:"password should be less than 10 characters"



            }
        }
        

    })

})