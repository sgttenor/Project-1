function searchYoutubeSource(target) {
    var searchTerm = $("#search-term").val().trim();
    console.log(searchTerm);

    var queryURL =
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerm + "&key=AIzaSyCiofi6n_Cz7LalBpaa87aEV_PTQWKtNHo";
    console.log(queryURL);

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {
            console.log(response);
            console.log(response.items);
            var videoResults = response.items;
            console.log("Video Results:", videoResults);
            console.log(response.items[0].id.videoId);

            for (var i = 0; i < videoResults.length; i++) {
                var title = videoResults[i].snippet.title;
                var videoId = videoResults[i].id.videoId
                console.log("Title: " + title);
                console.log("Video Id: " + videoId);
                var videoSource = "https://www.youtube.com/embed?v=" + videoId;
                console.log(videoSource);
                var video = $("<iframe>");
                video.attr("id", video);
                video.attr("width", "420");
                video.attr("height", "315");
                video.attr("frameborder", "0");
                video.attr("allowfullscreen");
                video.attr("src", videoSource);
                video.addClass("player");
                $("#videos-appear-here").append(video);
            }
        });
}

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