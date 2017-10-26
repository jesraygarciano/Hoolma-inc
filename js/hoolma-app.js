/**
 * Created by ADALID on 2/19/2017.
 */
$.validator.setDefaults( {
    submitHandler: function (data) {
        alert("submitted");/*$("#form-con").html("<div class='alert alert-success' role='alert'><h4 class='alert-heading'>Well done!</h4><p>Aww yeah, you have successfully <span class='red'>"+$('#username').val()+"</span>.</p></div>");*/
    }
} );

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 60000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$( document ).ready( function () {

    $( "#signupForm" ).validate( {
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            email: "Please enter a valid email address"
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Add the `help-block` class to the error element
            error.addClass( "help-block" );

            // Add `has-feedback` class to the parent div.form-group
            // in order to add icons to inputs
            element.parents( ".col-sm-12" ).addClass( "has-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }


        },
        success: function ( label, element ) {
            $("#username").addClass("form-control-danger");
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-12" ).addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-12" ).addClass( "has-success" ).removeClass( "has-error" );
        }
    } );

    $( "#consultForm" ).validate( {
        rules: {
            firstname: {
                required: true,
                minlength: 3
            },
            lastname: {
                required: true,
                minlength: 3
            },
            mfullname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phonenumber: {
                required: true,
                minlength: 11
            },
            appointment: {
                required: true
            }
        },
        messages: {
            firstname: {
                required: "First Name required",
                minlength: "Your username must consist of at least 3 characters"
            },
            lastname: {
                required: "Last Name Required",
                minlength: "Your last must consist of at least 3 characters"
            },
            mfullname: {
                required: "Please enter your full name",
                minlength: "Your last must consist of at least 3 characters"
            },
            email: {
                required: "Email required",
                email: "Please enter a valid email address"
            },
            phonenumber: {
                required: "Please input valid mobile number",
                minlength: 11
            },
            appointment: {
                required: "This is required"
            }
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Add the `help-block` class to the error element
            error.addClass( "help-block" );

            // Add `has-feedback` class to the parent div.form-group
            // in order to add icons to inputs
            element.parents( ".col-sm-12" ).addClass( "has-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }


        },
        success: function ( label, element ) {
            $("#username").addClass("form-control-danger");
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-12" ).addClass( "has-error" ).removeClass( "has-success" );
            $( element ).parents( ".name" ).addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-12" ).addClass( "has-success" ).removeClass( "has-error" );
            $( element ).parents( ".name" ).addClass( "has-success" ).removeClass( "has-error" );
        }
    } );
} );