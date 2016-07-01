$( document ).ready(function() {
  var channel_dict ={};
  var channel_list = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404","test_channel","cretetion","sheevergaming","TR7K","OgamingSC2","ESL_SC2"];
  for (var i=0; i<channel_list.length;i++){
    $.getJSON('https://api.twitch.tv/kraken/streams/'+channel_list[i]+'?', function (data){
      $("#test").append("<p>"+data["stream"]["_id"]+"</p>");
    })
  }

});
