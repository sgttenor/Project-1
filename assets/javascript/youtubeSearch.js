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
        // Row counting
        var colCount = -1;
        var rowCount = 0;
        var $videoRow = $("<div id='row-'" + rowCount + "' class='row'>");
 
        var videoResults = response.items;
        var length = response.items.length;
 
        if (length > 13) {
            length = 13;
        }
 
        for (var i = 0; i < response.items.length; i++) {
            var videoSource = ("https://www.youtube.com/embed/" + videoResults[i].id.videoId);
            var videoFrame = $("<iframe>");
 
            videoFrame.attr("id", videoResults[i].id.videoId);
            videoFrame.attr("width", "420");
            videoFrame.attr("height", "315");
            videoFrame.attr("frameborder", "0");
            videoFrame.attr("allowfullscreen", true);
            videoFrame.attr("src", videoSource);
            videoFrame.addClass("player");
 
            if (colCount > 3 || colCount === -1) {
                $videoRow = $("<div id='row-'" + rowCount + "' class='row'>");
 
                $videoRow.append(videoFrame);
                colCount = 0;
            }
            else {
                $videoRow.append(videoFrame);
                colCount++;
            }
 
            rowCount++;
            videoFrame.addClass("col-md-4");
            videoFrame.addClass("video-frame");
            $("#music-show").append(videoFrame);
        }
    });
 }
 
 