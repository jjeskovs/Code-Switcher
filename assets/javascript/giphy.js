
$("#search").on("click", function (event) {
    event.preventDefault();
    var userSearch = $("#icon_prefix").val().trim()
    search(userSearch);
    console.log(search)

})

var apiKey = "psvs2Qwoq05mon9BeoB6OeULhaI6jdym";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=1&q=";


function search(topic) {
    $("#gifs").empty()

    $.ajax({
        url: queryURL + topic,
        method: "GET"
    }).then(function (response) {
       console.log(response);
       var results = response.data;
       for (var i = 0; i < results.length; i++) {}
    
       var gifDiv = $("<div class='card grey lighten-3'>");
       var p = $(`<p>"Rating: "${results[i].rating}<p>`);
       var gifImg = $("<div class='card-image'>");
       var gifTitle = $("<span class='card-title'>"); 
        gifDiv.append(p)


        // <div class="card grey lighten-3">
        //                 <div class="card-image">
        //                     <div id="gif-goes-here"></div>
        //                     <span class="card-title">Giphy</span>
        //                 </div>
        //             </div>


        gifImg.attr("src", results[i].images.fixed_width_still.url);
        gifImg.attr("data-still", results[i].images.fixed_width_still.url);
        gifImg.attr("data-animated", results[i].images.fixed_width.url);
        gifImg.attr("data-state", "still");

        $("#gifs").prepend(gifDiv);
    },

        $("#gifs img").on("click", function () {

            var state = $(this).attr("data-state");
            var stillUrl = $(this).attr("data-still");
            var animateUrl = $(this).attr("data-animated");

            if (state === "still") {
                $(this).attr("src", animateUrl);
                $(this).attr("data-state", "animated");
            } else {
                $(this).attr("src", stillUrl);
                $(this).attr("data-state", "still");

            }

        });
