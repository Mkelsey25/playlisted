// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // TODO
    //document.getElementById("TBD").focus();

    $(".change-user").on("click", function(event) {
        var id = $(this).data("id");
        var newName = $(this).data("newUser");
        var newPassword = $(this).data("newPassword");

        // TODO if we are storing the password, someone will need to ad logic to encrypt it... should remove if not
        var newObjectState = {
            user_name: newName,
            user_password: newPassword
        };

        // Send the PUT request.
        $.ajax("/api/users/" + id, {
            type: "PUT",
            data: newObjectState
        }).then(
        function() {
            console.log("changed state to", newObjectState);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    //delete the user
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

    //////////////////////////////////////////////////////////////////////////////
    // can do this here or as form submit on the page as an alternate method ...
    //////////////////////////////////////////////////////////////////////////////
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("on post submit");

        var newUser = {
            user_name: 'TEST', //$("#TBD").val().trim(),            TODO
            user_password: 'TEST' //$("#TBD").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/playlists", {
            type: "POST",
            data: newUser
        }).then(
        function() {
            console.log("created new user");
            // Reload the page to get the updated user list
            location.reload();
        }
        );
    });

});