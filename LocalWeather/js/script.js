
$( document ).ready(function() {

$('#getWeather').click(function() {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=25.8458870&lon=-80.2792250&APPID=4f8fe6c234a7b2829ab551e55c3e75da")
    .done(update)
    .fail(handleErr);
    $("#body").css("background-color", getRandomColor());
    console.log(getLocation());

});
function update(response) {
  var temperature = Math.ceil(response.main.temp - 273.15);

  document.getElementById("quote").innerHTML = temperature;

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

function getLocation(){
  var data = getJSON("http://ip-api.com/json");
  return data;

}
});
