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
    hideShortsShowVideo();
  });

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
