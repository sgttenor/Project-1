var topics = ["Forest", "Ocean"];


function displayInfo() {
var topic = $("this").attr("data-name");
var queryURL ="https://api.spotify.com/v1" + topic + "/browse/categories/{1856f37d7b6c45e99c921406864f622f}";

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

