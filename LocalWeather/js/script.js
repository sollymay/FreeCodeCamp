
$( document ).ready(function() {

  $.getJSON("http://ip-api.com/json")
    .done(getLocation)
    .fail(handleErr);



function update(response) {
  var temperature = Math.ceil(response.main.temp - 273.15);
	var humidity = response.main.humidity;
  var conditions = response.weather[0]["main"];
  var condition_description = response.weather[0]["description"];
  console.log(conditions);
  document.getElementById("units").innerHTML = "C";

  if (conditions ==='Clouds'){

    $(document.body).css({'background-image': 'url(http://www.hdwallpapers.in/download/sunrays_sky_clouds-1920x1200.jpg)'});
  }
  else if (conditions==='Clear') {
    $(document.body).css({'background-image': 'url(https://wallpaperscraft.com/image/beach_tropics_sea_sand_palm_trees_sunset_84729_3840x2160.jpg)'});
  }
  else if (conditions==='Thunderstorm') {
    $(document.body).css({'background-image': 'url(http://www.gannett-cdn.com/-mm-/3526533239800dac0c978150377d099025f1e52c/c=52-700-4303-3102&r=x1683&c=3200x1680/local/-/media/USATODAY/None/2014/10/03/1412368123000-Mesostorm-Lightning.jpg)'});

  }
  else if (conditions==='Drizzle') {
    $(document.body).css({'background-image': 'url(https://sindhuspace.files.wordpress.com/2013/11/rain-2.jpg)'});

  }

  else if (conditions==='Rain') {

    $(document.body).css({'background-image': 'url(http://www.news1130.com/wp-content/blogs.dir/sites/9/2014/12/179783560-e1436807941129.jpg)'});

  }
  else if (conditions==='Snow') {

    $(document.body).css({'background-image': 'url(http://cdn1.theodysseyonline.com/files/2015/12/20/635861833670816810507191518_6670-perfect-snow-1920x1080-nature-wallpaper.jpg)'});

  }
  else {

    $(document.body).css({'background-image': 'url(http://s.hswstatic.com/gif/tornado-orig.jpg)'});

  }

  $('#units').click(function(){

    if (document.getElementById("units").innerHTML === "C"){

      document.getElementById("units").innerHTML = "F";
			temperature =(temperature *1.80) + 32;
      document.getElementById("temperature").innerHTML = Math.ceil(temperature);

    }
    else if (document.getElementById("units").innerHTML==="F") {		temperature =(temperature - 32)/(1.80);
      document.getElementById("temperature").innerHTML = Math.ceil(temperature);
			document.getElementById("units").innerHTML = "C";

    }

  });
  document.getElementById("conditions").innerHTML = condition_description;
  document.getElementById("temperature").innerHTML = temperature;
}



function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

function getLocation(response){
  document.getElementById("city").innerHTML = response.city + ', '+ response.country;
  $.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat="+ response.lat+ "&lon=" + response.lon +"&APPID=4f8fe6c234a7b2829ab551e55c3e75da")
    .done(update)
    .fail(handleErr);
}

$('#refresh').click(function(){

  location.reload(true);
})


});
