$( document ).ready(function() {

$('#quoteGETJSON').click(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);
    $("#body").css("background-color", getRandomColor());
});

function update(response) {
  var website = "https://twitter.com/intent/tweet?text=";
  document.getElementById("quote").innerHTML = response["quoteText"];
  if (response["quoteAuthor"]===""){
    response["quoteAuthor"]= "Unknown";
  }
  document.getElementById("author").innerHTML = '- '+response["quoteAuthor"];
  website += response["quoteText"].replace(/\s/g, '+')+ '+-+'+ response["quoteAuthor"].replace(/\s/g,'+');

  $('#postTweet').click(function(){
    $("#tweet").attr("href", website);

  });

}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

});
