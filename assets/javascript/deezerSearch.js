// Row and column counting.
// Used to generate bootstrap-grid-compliant html elements 
var colCount = 0;
var $audioRow;
var $searchBox;

function searchDeezerSource(target) {
    $.ajax({
        url: ("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + target),
        beforeSend: function (jqXHR, settings) {
            jqXHR.setRequestHeader("X-RapidAPI-Host", "deezerdevs-deezer.p.rapidapi.com");
            jqXHR.setRequestHeader("X-RapidAPI-Key", "bbc38e84eamsh62eb5256b273599p1a8523jsn69457858fec8");
        },
        method: "GET"
    }).then(function (response) {
        console.log(response.data);
        // Group new results
        $searchBox = $("<div class='search-group'>")

        // Limit number of return items to 13 items or less
        if (length > 13) {
            length = 13;
        }

        // Prepare new html elements to show query results.
        for (var i = 0; i < response.data.length; i++) {
            var $audioBox = $("<div class='col-4 card'>");
            var $audioBlock = $("<audio controls>");
            var audioTrackCurr = response.data[i];

            // element attributes
            $audioBlock.attr("src", audioTrackCurr.preview);
            $audioBlock.attr("type", "audio/mpeg");
            $audioBox.append($("<p>").append("<span class='font-weight-bold'>Track: </span>" + "<span class='font-italic'>" +
            audioTrackCurr.title + "</span>"));
            $audioBox.append($("<p>").append("<span class='font-weight-bold'>Album: </span>" + "<span class='font-italic'>" +
            audioTrackCurr.album.title + "</span>"));
            $audioBox.append($audioBlock);
            $audioBox.append($("<p>").append("<a href='" + audioTrackCurr.link + "'>Purchase full track</a>"));

            // Track grid layout, add rows and columns as needed.
            if (colCount === 3 || colCount < 1) {
                $audioRow = $("<div class='row mb-3'>");

                $audioRow.append($audioBox);
                $searchBox.append($audioRow);
                colCount = 1;
            }
            else {
                $audioRow.append($audioBox);
                colCount++;
            }
        }

        $("#music-show").prepend($searchBox);
    });
}