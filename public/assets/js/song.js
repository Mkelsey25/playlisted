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

        // allow for default values when not provided
        var mood = $("#form-new-song [name=mood]").val().trim();
        var genre = $("#form-new-song [name=genre]").val().trim();
        var energy = $("#form-new-song [name=energy]").val().trim();
        // handle a value without the leading 0
        energy = (energy[0] === '.') ? ('0' + energy) : energy;
        var date_released = $("#form-new-song [name=date_released]").val().trim();

        var newSong = {
            song_title: $("#form-new-song [name=song_title]").val().trim(),
            artist_name: $("#form-new-song [name=artist_name]").val().trim(),
            date_released: (date_released === '') ? undefined: date_released,
            mood: (mood === '') ? undefined: mood,
            energy: energy,
            genre: (genre === '') ? undefined: genre
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
    // $(document).on("click", ".update-song", function(event) {

        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        
        ////////////////////////////////////////////////////////////////////////
        //  UPDATE issue with the below.  remove if can't resolve... TODO

        // var self = this;

        // var id = $(self).data("id").toString();
        // console.log("id: " + id);
        // // var id = $("[name=song_id]").val().trim();
        // var title = $(self).find("[id=song-title-" + id + "]").val().trim();
        // var artist_name = $("[id=artist_name-" + id + "]").val().trim();

        // // allow for default values when not provided
        // var mood = $("[id=mood-" + id + "]").val().trim();
        // var genre = $("[id=genre-" + id + "]").val().trim();
        // var energy = $("[id=energy-" + id + "]").val().trim();
        // // handle a value without the leading 0
        // energy = (energy[0] === '.') ? ('0' + energy) : energy;
        // var date_released = $("[id=date_released-" + id + "]").val().trim();

        // var SongData = {
        //     song_title: title,
        //     artist_name: artist_name,
        //     date_released: (date_released === '') ? undefined: date_released,
        //     mood: (mood === '') ? undefined: mood,
        //     energy: energy,
        //     genre: (genre === '') ? undefined: genre
        // };
        
        /////////////////////////////////////////////////// ORIG
        // allow for default values when not provided

        var id = $(this).data("id");
        var id = $("#form-update-song [name=song_id]").val().trim();
        console.log("id: " + id);

        var mood = $("#form-update-song [name=mood]").val().trim();
        var genre = $("#form-update-song [name=genre]").val().trim();
        var energy = $("#form-update-song [name=energy]").val().trim();
        // handle a value without the leading 0
        energy = (energy[0] === '.') ? ('0' + energy) : energy;
        var date_released = $("#form-update-song [name=date_released]").val().trim();

        var SongData = {
            song_title: $("#form-update-song [name=song_title]").val().trim(),
            artist_name: $("#form-update-song [name=artist_name]").val().trim(),
            date_released: (date_released === '') ? undefined: date_released,
            mood: (mood === '') ? undefined: mood,
            energy: energy,
            genre: (genre === '') ? undefined: genre
        };
        // //////////////////////////////////////////////////////////// END ORIG


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

        console.log("Ajax request: delete song");
        console.log(id);

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