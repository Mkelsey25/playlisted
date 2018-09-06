// wait to attach handlers until the DOM is fully loaded
$(function() {

    /////////////////////
    // register the user
    /////////////////////
    //on click in form, change 
    $("#form-new-registration").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newUser = {
            user_name: $("#form-new-registration [name=user_name]").val().trim(),
            user_email: $("#form-new-registration [name=user_email]").val().trim(),
            user_password: $("#form-new-registration [name=user_password]").val().trim()
        };

        console.log("Ajax request: create registration");
        console.log(newUser);

        // Send the POST request.
        $.ajax("/register/user", {
            type: "POST",
            data: newUser
        }).then(
        function() {
            console.log("created new user");
            location.reload();
        });
    });

});