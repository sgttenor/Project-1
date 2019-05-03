var topics = [];


function displayInfo() {

var queryURL ="https://api.spotify.com/v1" + topic + "/browse/categories/{1856f37d7b6c45e99c921406864f622f}";

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {

    
  });

}



