$( document ).ready(function() {
 var channel_list = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404","test_channel","cretetion","sheevergaming","TR7K","OgamingSC2","ESL_SC2"];
  $.each(channel_list, function(index, value){
    var base_url = "https://www.twitch.tv/"
    $.getJSON('https://api.twitch.tv/kraken/streams/'+channel_list[index], function (data){

      // $("#another").append("<p>"+ data["stream"]["_id"] + "</p>");
      if (data["stream"]==null){
        // $("#another").append("<p>"+channel_list[i]+"</p>");
        $("#offline").append("<li><a href="+base_url+channel_list[index]+">"+channel_list[index]+"</a></li>");

      } else{
        $("#online").append("<li><a href="+base_url+channel_list[index]+">"+channel_list[index]+"</a></li>");
        $("#online").append("<p><a href="+base_url+channel_list[index]+">"+data["stream"]["channel"]["status"]+"</a></p>");
        //data["stream"]["_id"]

      }

    })

  })



});



var filterChannels = function(channelStatus){
  if (channelStatus == offline) {
    $("#online").hide();
    $("#offline").show();
    $("#offline").css({"margin-top": "0px", });
    $(".offline").css("background-color","#82E0AA");
    $(".online").css("background-color","#D4E6F1");
    $(".all").css("background-color","#D4E6F1");

    $("#status").text("OFFLINE");

  }
  else if (channelStatus == online){
    $("#offline").hide();
    $("#online").show();
    $("#status").text("ONLINE");
    $(".online").css("background-color","#82E0AA");
    $(".offline").css("background-color","#D4E6F1");
    $(".all").css("background-color","#D4E6F1");
  }
  else{
    $("#online").show();
    $("#offline").show();
    $("#offline").css("margin-top", "-10px");
    $("#status").text("ONLINE/OFFLINE");
    $(".all").css("background-color","#82E0AA");
    $(".offline").css("background-color","#D4E6F1");
    $(".online").css("background-color","#D4E6F1");
  }

}
