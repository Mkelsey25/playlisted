// wait to attach handlers until the DOM is fully loaded
$(function() {

    ///////////////////////////////
    // Make AJAX requests
    ///////////////////////////////

    /////////////////////
    // create the song
    /////////////////////
    $("#form-new-song").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newSong = {
            song_title: $("#form-new-song [name=song_title]").val().trim(),
            artist_name: $("#form-new-song [name=artist_name]").val().trim(),
            date_released: $("#form-new-song [name=date_released]").val().trim(),
            genre: $("#form-new-song [name=genre]").val().trim()
        };

        console.log("Ajax request: create song");
        console.log(newSong);

        // Send the POST request.
        $.ajax("/api/songs", {
            type: "POST",
            data: newSong
        }).then(
        function() {
            console.log("created new song");
            // Reload the page to get the updated song list
            location.reload();
        }
        );
    });

    /////////////////////
    // update the song
    /////////////////////
    $("#form-update-song").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $("[name=song_id]").val().trim();

        var SongData = {
            song_title: $("#form-update-song [name=song_title]").val().trim(),
            artist_name: $("#form-update-song [name=artist_name]").val().trim(),
            date_released: $("#form-update-song [name=date_released]").val().trim(),
            genre: $("#form-update-song [name=genre]").val().trim()
        };

        console.log("Ajax request: update song");
        console.log(SongData);

        // Send the PUT request.
        $.ajax("/api/songs/" + id, {
            type: "PUT",
            data: SongData
        }).then(
        function() {
            console.log("Updated id: ", id);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    /////////////////////
    // delete the song
    /////////////////////
    $(".delete-song").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/songs/" + id, {
            type: "DELETE"
        }).then(
        function() {
            console.log("deleted song", id);
            
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

});