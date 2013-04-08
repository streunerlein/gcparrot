
$(function() {
    $("#recordbutton").click(function() {
        alert("click");
        if (started) {
            $("span", this).text("Record");
            stopAudio();
        }
        else {
            $("span", this).text("Stop Recording");
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
    });
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

