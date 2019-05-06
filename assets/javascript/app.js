$(document).ready(function () {

  $("#deezer").on("click", function (event) {
    event.preventDefault();

    searchDeezerSource($("#deezSearch").val().trim());
  });


  // Search deezer
  function searchDeezerSource(target) {
    $.ajax({
      url: ("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + target),
      beforeSend: function (jqXHR, settings) {
        jqXHR.setRequestHeader("X-RapidAPI-Host", "deezerdevs-deezer.p.rapidapi.com");
        jqXHR.setRequestHeader("X-RapidAPI-Key", "bbc38e84eamsh62eb5256b273599p1a8523jsn69457858fec8");
      },
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(response.data[0].link);

      var $audioBlock = $("<audio controls>");
      $audioBlock.attr("src", response.data[0].preview);
      $audioBlock.attr("type", "audio/mpeg");

      $("#music-show").append($audioBlock);
    });
  }
  
  var audioSample = {
    element: document.createElement("audio"),
    volume: 0.1,
    autoplay: false,
    preload: true,
  }

  $("#forestIMG").click(function () {
    var samplePath = "assets/forest.mp3";
    var audio = audioSamplePlay(samplePath);

    audio.play();
  });

  $("#oceanIMG").click(function () {
    var samplePath = "assets/ocean.mp3";
    var audio = audioSamplePlay(samplePath);

    audio.play();
  });

  $("#streamIMG").click(function () {
    var samplePath = "assets/stream.mp3";
    var audio = audioSamplePlay(samplePath);

    audio.play();
  });

  $("#thunderIMG").click(function () {
    var samplePath = "assets/thunder.wav";
    var audio = audioSamplePlay(samplePath);

    audio.play();
  });

  $("#rainIMG").click(function () {
    var samplePath = "assets/rain.mp3";
    var audio = audioSamplePlay(samplePath);

    audio.play();
  });

  $("#waterfallIMG").click(function () {
    var samplePath = "assets/waterfall.wav";
    var audio = audioSamplePlay(samplePath);

    audio.play();
  });

  $("#nightIMG").click(function () {
    var samplePath = "assets/night.mp3";
    var audio = audioSamplePlay(samplePath);

    audio.play();
  });

  $("#whaleIMG").click(function () {
    var samplePath = "assets/whale.mp3";
    var audio = audioSamplePlay(samplePath);

    audio.play();
  });

  function audioSamplePlay(source) {
    var audioElement = audioSample.element;

    audioElement.src = source;
    audioElement.autoplay = audioSample.autoplay;
    audioElement.preload = audioSample.preload;

    return audioElement;
  }
});
