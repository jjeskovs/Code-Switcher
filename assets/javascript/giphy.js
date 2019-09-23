
$("#search").on("click", function (event) {
    event.preventDefault();
    var search = $("#icon_prefix").val().trim()
    console.log(search)

    var apiKey = "psvs2Qwoq05mon9BeoB6OeULhaI6jdym";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=1&q=";

    function search(topic) {
        $("#gifs-appear-here").empty()

        $.ajax({
            url: queryURL + topic,
            method: "GET"
        }).then(function (response) {

            var results = response.data;
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);

            gifDiv.append(p);


            gifImg.attr("src", results[i].images.fixed_width_still.url);
            gifImg.attr("data-still", results[i].images.fixed_width_still.url);
            gifImg.attr("data-animated", results[i].images.fixed_width.url);
            gifImg.attr("data-state", "still");

            $("#gifs-appear-here").prepend(gifDiv);
        },
    
            $("#gifs-appear-here img").on("click", function () {

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
