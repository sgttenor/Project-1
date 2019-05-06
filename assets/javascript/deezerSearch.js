function searchDeezerSource(target) {
    $.ajax({
        url: ("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + target),
        beforeSend: function (jqXHR, settings) {
            jqXHR.setRequestHeader("X-RapidAPI-Host", "deezerdevs-deezer.p.rapidapi.com");
            jqXHR.setRequestHeader("X-RapidAPI-Key", "bbc38e84eamsh62eb5256b273599p1a8523jsn69457858fec8");
        },
        method: "GET"
    }).then(function (response) {
        var $audioBlock = $("<audio controls>");

        $audioBlock.attr("src", response.data[0].preview);
        $audioBlock.attr("type", "audio/mpeg");

        $("#music-show").append($audioBlock);
    });
}