// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // TODO
    //document.getElementById("TBD").focus();

    // update the song
    $(".change-song").on("click", function(event) {
        var id = $(this).data("id");
        var newSongTitle = $(this).data("newSongTitle");
        var newArtistName = $(this).data("newArtistName");
        var newDateReleased = $(this).data("newDateReleased");
        var newGenre = $(this).data("newGenre");

        // TODO if we are storing the password, someone will need to ad logic to encrypt it... should remove if not
        var newObjectState = {
            song_title: newSongTitle,
            artist_name: newArtistName,
            date_released: newDateReleased,
            genre: newGenre
        };

        // Send the PUT request.
        $.ajax("/api/songs/" + id, {
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

    // delete the song
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

    //////////////////////////////////////////////////////////////////////////////
    // can do this here or as form submit on the page as an alternate method ...
    //////////////////////////////////////////////////////////////////////////////
    
    // create the song
    $(".create-song-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("on post submit");

        var newSong = {
            song_title: 'TEST', //$("#TBD").val().trim(),            TODO
            artist_name: 'TEST', //$("#TBD").val().trim(),            TODO
            date_released: 'TEST', //$("#TBD").val().trim(),            TODO
            genre: 'TEST' //$("#TBD").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/songs", {
            type: "POST",
            data: newSong
        }).then(
        function() {
            console.log("created new song");
            // Reload the page to get the updated user list
            location.reload();
        }
        );
    });

});