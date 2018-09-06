// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    ///////////////////////////////
    // playlist display
    ///////////////////////////////
    /*$(".test-pull button").on("click", function(event) {
        $.get("/api/songs", function(req, res) {
            // res.json(songs);
            var query = {};
            // console.log(res.json(songs));
            console.log(res);
            if (req.query.song_id) {
                query.SongId = req.query.song_id;
            };
        });
        /*$.ajax("/api/songs/" + id, {
            type: "GET",
            data: SongData
        }).then(
        function() {
            console.log("Updated id: ", id);
            // Reload the page to get the updated list
            // location.reload();
        });
    });*/
    $(".submitButton").on("click", function(event) {
        event.preventDefault();
        var userInput = {
            mood: $("#myMood").val().trim(),
            energy: $("#myEnergy").val().trim(),
            genre: $("#myGenre").val().trim()
        };
        if (userInput.mood == 1) {
            $(".modal-body p#mood").html("Mood: Angry");
        };
        if (userInput.mood == 2) {
            $(".modal-body p#mood").html("Mood: Sad");
        };
        if (userInput.mood == 3) {
            $(".modal-body p#mood").html("Mood: Meh");
        };
        if (userInput.mood == 4) {
            $(".modal-body p#mood").html("Mood: Happy");
        };
        if (userInput.mood == 5) {
            $(".modal-body p#mood").html("Mood: Ecstatic");
        };
        
        $(".modal-body p#energy").html("Energy: " + userInput.energy);
        $(".modal-body p#genre").html("Genre: " + userInput.genre).css("text-transform", "capitalize");

        /*$.post("/api/users", userInput)
          .done(function(data) {
            console.log("response = " + JSON.stringify(data));
            $(".modal-title").html(data.mood);
            $(".modal-body p").html(data.energy);
        });*/
    });

    /* close popup with escape button
    $(document).keydown(function(e) { 
        if (e.keyCode == 27) { 
            $("#myModal").fadeOut(300).modal("hide");
            //or
            window.close();
        }
    });*/

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