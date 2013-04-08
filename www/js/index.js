
$(function() {
    $("#recordbutton").click(function() {
        if (started) {
            $("span", this).text("Record");
            $(this).removeClass("recording");
            $("#playbutton").addClass("showing");
            stopAudio();
        }
        else {
            $("span", this).text("Stop Recording");
            $(this).addClass("recording");
            $("#playbutton").removeClass("showing");
            recordAudio();
        }

        started = !started;
    }).on("touchstart", function() { 
        $(this).addClass("pressed");
    }).on("touchend", function() { 
        $(this).removeClass("pressed");
    });

    $("#playbutton").click(function() {
        playback();
    }).on("touchstart", function() { 
        $(this).addClass("pressed");
    }).on("touchend", function() { 
        $(this).removeClass("pressed");
    });;
}
);
var mediaRec, started = false;
    var src = "myrecording.wav";
// Record audio
// 
function recordAudio() {
    mediaRec = new Media(src,
        // success callback
        function() {
            alert("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            alert("recordAudio():Audio Error: "+ err.message);
        });

    // Record audio
    mediaRec.startRecord();
}

function playback() {
    mediaRec.play();
}

function stopAudio() {
    mediaRec.stopRecord();
}

