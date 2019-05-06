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
