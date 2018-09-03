// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    
    ///////////////////////////////
    // Make AJAX requests
    ///////////////////////////////


    /////////////////////////
    // create the playlist
    /////////////////////////
    $("#form-new-playlist").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newPlaylist = {
            playlist_name: $("#form-new-playlist [name=playlist_name]").val().trim(),
            user_id: $("#form-new-playlist [name=user_id]").val().trim()
        };

        console.log("Ajax request: create playlist");
        console.log(newPlaylist);

        // Send the POST request.
        $.ajax("/api/playlists", {
            type: "POST",
            data: newPlaylist
        }).then(
        function() {
            console.log("created new playlist");
            // Reload the page to get the updated play list
            location.reload();
        });
    });

    /////////////////////
    // update the playlist
    /////////////////////
    $("#form-update-playlist").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $("#form-update-playlist [name=id]").val().trim();

        var PlaylistData = {
            playlist_name: $("#form-update-playlist [name=playlist_name]").val().trim(),
            user_id: $("#form-update-playlist [name=user_id]").val().trim()
        };

        console.log("Ajax request: update playlist");
        console.log(PlaylistData);

        // Send the PUT request.
        $.ajax("/api/playlists/" + id, {
            type: "PUT",
            data: PlaylistData
        }).then(
        function() {
            console.log("Updated id: ", id);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    /////////////////////////
    // delete the playlist
    /////////////////////////
    $(".delete-playlist").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/playlists/" + id, {
            type: "DELETE"
        }).then(
        function() {
            console.log("deleted playlist", id);
            
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

});