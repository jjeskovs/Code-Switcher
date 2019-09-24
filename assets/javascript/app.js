
var firebaseConfig = {
    apiKey: "AIzaSyBzTfRvgE9Wlw1oQt9wwhegSy0FWEwPlTc",
    authDomain: "project1-afa8a.firebaseapp.com",
    databaseURL: "https://project1-afa8a.firebaseio.com",
    projectId: "project1-afa8a",
    storageBucket: "",
    messagingSenderId: "213587012879",
    appId: "1:213587012879:web:b9adcee3d625c9acede27a"
	};
  // Initialize Firebase
	firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var search = $("#icon_prefix").val().trim()

$("#search").on("click", function(event){
	event.preventDefault();
	search = $("#icon_prefix").val().trim()
	database.ref().push(search)
	// wordArr.push(search)
	// console.log(search)
})

database.ref().limitToLast(5).on("child_added", function(snapshot){
	// console.log(snapshot.val())
	var recent = $("<li>" + snapshot.val() + "</li>").attr("class", "black-text")
	$("#recent li:nth-child(5)").remove()
	$("#recent").prepend(recent)
	
})




$("#search").on("click", function(event) {
	$("#urban").empty()
	event.preventDefault();
	search = $("#icon_prefix").val().trim()
	// console.log(search)
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + search + "",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
			"x-rapidapi-key": "2b790bbd2amshc926815e536ecbep1b9bb5jsn68a7524edf49"
		}
	}

	$.ajax(settings).then(function (response) {
		// console.log(response);
		var results = response.list
		// console.log(results)
		var definitionDiv = $("<div>")
		var definitionWord = results[0].definition
		// console.log(definitionWord)
		var word = results[0].word
		
		definitionDiv.append("<h4>"  + word + "</h4>")
		definitionDiv.append("<h5>" + definitionWord + "</h5>")
		$("#urban").append(definitionDiv)
	});
    
        
        var queryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + search + "?key=8195ff8d-4a15-4f1c-8c70-5206c6c680b8";
        
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
            
            var results = response;
            var resultsDic = results[0].shortdef;
            // console.log(resultsDic);

            $("#oxford").append(resultsDic);
            
		});
		
		var giphyUrl = "https://api.giphy.com/v1/gifs/search?api_key=psvs2Qwoq05mon9BeoB6OeULhaI6jdym&limit=1&q=" + search;
	//$("#giphy-image").empty()

	$.ajax({
		url: giphyUrl,
		method: "GET"
	}).then(function (response) {
		//console.log(response.data[0].images.fixed_height.url);
		
		var result = response.data;
		var resultUrl = result[0].images.fixed_height.url;
		// console.log(resultUrl);

		$("#giphy-image").attr("src", resultUrl);


	})
        
        

        

});