var videoIDs = [];

function searchYoutubeSource(target) {
    var searchTerm = $("#tubeSearch").val().trim();
    console.log(searchTerm);

    var queryURL =
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerm + "&key=AIzaSyCiofi6n_Cz7LalBpaa87aEV_PTQWKtNHo";
    console.log(queryURL);

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var videoResults = response.items;
        var length = response.items.length;

        if (length > 13) {
            length = 13;
        }

        for (var i = 0; i < response.items.length; i++) {
            var videoSource = "https://www.youtube.com/embed/" + response.items[i].id.videoId;
            var video = $("<iframe>");

            video.attr("id", response.items[i].id.videoId);
            video.attr("width", "420");
            video.attr("height", "315");
            video.attr("frameborder", "0");
            video.attr("allowfullscreen");
            video.attr("src", videoSource);
            video.addClass("player");
            $("#music-show").append(video);
        }

        videoIDs.forEach(function (id) {
        })
    });



    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

$("button").on("click", function(){
    $(".container1").hide(1000);
})

$("#back").on("click", function(){
    $(".container1").show(1000);
    $(".container2").hide(1000);
    
})