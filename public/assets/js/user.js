// wait to attach handlers until the DOM is fully loaded
$(function() {

    ///////////////////////////////
    // Make AJAX requests
    ///////////////////////////////

    /////////////////////
    // create the user
    /////////////////////
    //on click in form, change 
    $("#form-new-user").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newUser = {
            user_name: $("#form-new-user [name=user_name]").val().trim(),
            user_email: $("#form-new-user [name=user_email]").val().trim(),
            user_password: $("#form-new-user [name=user_password]").val().trim()
        };

        console.log("Ajax request: create user");
        console.log(newUser);

        // Send the POST request.
        $.ajax("/api/users", {
            type: "POST",
            data: newUser
        }).then(
        function() {
            console.log("created new user");
            location.reload();
        });
    });

    /////////////////////
    // update the user
    /////////////////////
    $("#form-update-user").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $("[name=user_id]").val().trim();

        // TODO if we are storing the password, someone will need to add logic to encrypt it... should remove if not

        var UserData = {
            user_name: $("#form-update-user [name=user_name]").val().trim(),
            user_email: $("#form-update-user [name=user_email]").val().trim(),
            user_password: $("#form-update-user [name=user_password]").val().trim()
        };

        console.log("Ajax request: update user");
        console.log(UserData);

        // Send the PUT request.
        $.ajax("/api/users/" + id, {
            type: "PUT",
            data: UserData
        }).then(
        function() {
            console.log("Updated id: ", id);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    /////////////////////
    // delete the user
    /////////////////////
    $(".delete-user").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/users/" + id, {
            type: "DELETE"
        }).then(
        function() {
            console.log("deleted user", id);
            
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

});