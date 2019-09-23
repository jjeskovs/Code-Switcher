// $("#search").on("click", function(event) {
// 	$("#urban").empty()
// 	event.preventDefault();
// 	var search = $("#icon_prefix").val().trim()
// 	console.log(search)
// 	var settings = {
// 		"async": true,
// 		"crossDomain": true,
// 		"url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + search + "",
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
// 			"x-rapidapi-key": "2b790bbd2amshc926815e536ecbep1b9bb5jsn68a7524edf49"
// 		}
// 	}
	
// 	$.ajax(settings).then(function (response) {
// 		// console.log(response);
// 		var results = response.list
// 		console.log(results)
// 		var definitionDiv = $("<div>")
// 		var definitionWord = results[0].definition
// 		console.log(definitionWord)
// 		var word = results[0].word
		
// 		definitionDiv.append("<h3>"  + word + "</h3>")
// 		definitionDiv.append("<h5>" + definitionWord + "</h5>")
// 		$("#urban").append(definitionDiv)
// 	});
// })



