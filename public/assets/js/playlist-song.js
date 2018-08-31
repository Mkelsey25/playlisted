// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    ///////////////////////////////
    // Make AJAX requests
    ///////////////////////////////


    ///////////////////////////////
    // create the playlist song
    ///////////////////////////////
    $("#form-new-playlist-song").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newPlaylistSong = {
            playlist_id: $("#form-new-playlist-song [name=playlist_id]").val().trim(),
            user_id: $("#form-new-playlist-song [name=user_id]").val().trim(),
            song_id: $("#form-new-playlist-song [name=song_id]").val().trim()
        };

        console.log("Ajax request: create playlist song");
        console.log(newPlaylistSong);

        // Send the POST request.
        $.ajax("/api/playlists/" + newPlaylistSong.playlist_id + "/songs", {
            type: "POST",
            data: newPlaylistSong
        }).then(
        function() {
            console.log("created new playlist song");
            // Reload the page to get the updated playlist song
            location.reload();
        });
    });

    ///////////////////////////////
    // update the playlist song
    ///////////////////////////////
    $("#form-update-playlist-song").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $("[name=id]").val().trim();

        var PlaylistSongData = {
            playlist_id: $("#form-update-playlist-song [name=playlist_id]").val().trim(),
            user_id: $("#form-update-playlist-song [name=user_id]").val().trim(),
            song_id: $("#form-update-playlist-song [name=song_id]").val().trim()
        };

        console.log("Ajax request: update playlist song");
        console.log(PlaylistSongData);

        // Send the PUT request.
        $.ajax("/api/playlists/" + PlaylistSongData.playlist_id + "/songs/" + id, {
            type: "PUT",
            data: PlaylistSongData
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
    $(".delete-playlist-song").on("click", function(event) {
        var id = $(this).data("id");
        var playlist_id = $("[name=playlist_id]").val().trim();

        // Send the DELETE request.
        $.ajax("/api/playlists/" + playlist_id + "/songs/" + id, {
            type: "DELETE"
        }).then(
        function() {
            console.log("deleted playlist song", id);
            
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

});