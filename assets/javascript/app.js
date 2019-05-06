$(document).ready(function () {
  var audioSample = {
    element: document.createElement("audio"),
    volume: 0.1,
    autoplay: false,
    preload: true,
  }

  $("#deezer").on("click", function (event) {
    event.preventDefault();

    searchDeezerSource($("#deezSearch").val().trim());
  });

  $("#youtube").on("click", function (event) {
    event.preventDefault();

    searchYoutubeSource($("#deezSearch").val().trim());
  });
  
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

  function audioSamplePlay(source) {
    var audioElement = audioSample.element;

    audioElement.src = source;
    audioElement.autoplay = audioSample.autoplay;
    audioElement.preload = audioSample.preload;

    return audioElement;
  }
});
