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
    }).then(function(response) {
      console.log(response);
      console.log(response.data[0].link);

      var $audioBlock = $("<audio>");
      $audioBlock.attr("src", response.data[0].preview);
      $audioBlock.attr("type", audio/mpeg);
      
      $("#music-show").append($audioBlock);
    });
  }

});

function displayInfo() {
  var topic = $("this").attr("data-name");
  var queryURL = "https://api.spotify.com/v1" + topic + "/browse/categories/{1856f37d7b6c45e99c921406864f622f}";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {

    //empty gif div so new selection appends to emtpy div - do not want previous searches listed

    $("#forest").empty();



    //user for loop to grab the rating information and appropriate gif for button clicked into its own div to keep information together



    //on click of gif still image, gif will play. When clicked again, gif will pause.


  });

}
//audio on hover
// var audio = $("audio")[0];
// $("#forestIMG").mouseenter(function() {
//   audio.play();
// });
$(document).ready(function() {
  var soundClip = {
    forest:  {
      audio: document.createElement("audio"),
      source: document.createElement("source"),
      src: "assets/forest.mp3",
      volume: 0.1,
      autoPlay: false,
      preLoad: true,
      controls: true,
    },

     ocean: {
      audio: document.createElement("audio1"),
      src: "assets/forest.mp3",
      volume: 0.1,
      autoPlay: false,
      preLoad: true,
      controls: true,
     } ,
    // rain = {

    // }, 

  }


  

  $("#forestIMG").click(function() {
    makeAudio(soundClip.forest);
    // obj.pause();

  });

  function makeAudio (prop) {
    console.log(prop);

    var audioObject = prop;
    var audioFile = prop.audio;

    console.log(prop.audio);

    audioFile.controls = audioObject.controls;
    audioFile.src = audioObject.src;
    audioFile.volume = audioObject.volume;
    audioFile.autoPlay = audioObject.autoPlay;
    audioFile.preLoad = audioObject.preLoad;
    console.log(prop.audio);
  }
});
