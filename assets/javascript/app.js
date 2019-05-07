$(document).ready(function () {
  var audioSample = {
    element: document.createElement("audio"),
    volume: 0.1,
    autoplay: false,
    preload: true,
  }

  // Run a search for something from the deezer api database.
  // Actual functionality is defined in deezerSearch.js
  $("#deezer").on("click", function (event) {
    event.preventDefault();

    searchDeezerSource($("#deezSearch").val().trim());
    hideShortsShowVideo();
  });

  // Run a search for something from the youtube api database.
  // Actual functionality is defined in youtubeSearch.js
  $("#youtube").on("click", function (event) {
    event.preventDefault();

    searchYoutubeSource($("#deezSearch").val().trim());
    hideShortsShowVideo();
  });

  $(".card-img").click(function () {
    var samplePath = $(this).attr("audioPath");
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

  $('#back').click(function () {

    $('.player').each(function () {
      $thisSource = $(this).attr("src");
      $(this).attr("src", $thisSource);
    });
    showShortsHideVideo();
    flushVideoShow();
  });

  function hideShortsShowVideo() {
    $(".shortcut-box").hide(1000);
    $("#music-show").removeClass("d-none");
    $("#back-button-box").removeClass("d-none");
    $("#tubeSearch").val("");
    $("#deezSearch").val("");
  }

  function showShortsHideVideo() {
    $(".shortcut-box").show(1000);
    $("#music-show").addClass("d-none");
    $("#back-button-box").addClass("d-none");
  }

  function flushVideoShow() {
    $("#music-show").empty();
  }
});
