$(document).ready(function () {


// // This is a link test
// $('.button').on('click', function() {
//     $(this).removeClass()
// });
$(".tweet-actions").hide()
$(".stats").hide()

//Step 1
$("#tweet-controls").hide();

//Step 2
$("#tweet-content").on("click", function () {
    //should double this in size
    $(".tweet-compose").css("height", "5em")
    //should reviel tweet-controls
    $("#tweet-controls").show();
});

//Step 3

$(".tweet-compose").keypress(function () {
    var newCount = $("#char-count").text();
    var newNum = Number(newCount)
    var returnCount = newNum 
   if(returnCount > 11){
       returnCount = newNum - 1
    return $("#char-count").text(returnCount);    
   }
   else if(returnCount <= 11 && returnCount > 0) {
       returnCount = newNum - 1
       $("#char-count").css("color", "red")
        return $("#char-count").text(returnCount);     
   }
});

//Step 4
$(".tweet-compose").keypress(function () {
    var count = $(".tweet-compose").val().length;
    if(count > 139){
        $("#tweet-submit").prop("disabled", true)
    }
    else {
        $("#tweet-submit").prop("disabled", false)
    }
});

//Step 5

$("#tweet-submit").on("click", function () {
    var profile = $("#profile-summary").html()
    var prepend2 = "<div class=\"tweet\">"
    var append1 = "</div>"
    $("#stream").prepend(prepend2 + profile + append1)
});

//Step 6
$("div.tweet").hover(function () {
        // over
       $(".tweet-actions").show()
        
    }, function () {
        // out
        $(".tweet-actions").hide()
    }
);


//Step 7

$("div.tweet").on("click", function () {
    $(".stats").slideDown()
});




















});