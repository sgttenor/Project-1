// Row and column counting.
// Used to generate bootstrap-grid-compliant html elements 
var colCount = 0;
var $videoRow;
var $searchBox;

function searchYoutubeSource(target) {
    // Read search term input by the user.
    // Define the URL and query to be sent through the API AJAX caller
    var searchTerm = $("#tubeSearch").val().trim();

    var queryURL =
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerm
        + "&key=AIzaSyCiofi6n_Cz7LalBpaa87aEV_PTQWKtNHo";

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Group new results
        $searchBox = $("<div class='search-group'>")

        // Reference the object sent back by AJAX
        var videoResults = response.items;
        var length = response.items.length;

        // Limit number of return items to 13 items or less
        if (length > 13) {
            length = 13;
        }

        // Prepare new html elements to show query results.
        for (var i = 0; i < response.items.length; i++) {
            var videoSource = ("https://www.youtube.com/embed/" + videoResults[i].id.videoId);
            var videoFrame = $("<iframe>");

            // element attributes
            videoFrame.attr("id", videoResults[i].id.videoId);
            videoFrame.attr("width", "420");
            videoFrame.attr("height", "315");
            videoFrame.attr("frameborder", "0");
            videoFrame.attr("allowfullscreen", true);
            videoFrame.attr("src", videoSource);
            videoFrame.addClass("player");
            videoFrame.addClass("col-md-4");
            videoFrame.addClass("video-frame");

            // Track grid layout, add rows and columns as needed.
            if (colCount === 3 || colCount < 1) {
                $videoRow = $("<div class='row mb-3'>");

                $videoRow.append(videoFrame);
                $searchBox.append($videoRow);
                colCount = 1;
            }
            else {
                $videoRow.append(videoFrame);
                colCount++;
            }
        }

        $("#music-show").prepend($searchBox);
    });
}