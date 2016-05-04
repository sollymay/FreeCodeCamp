$( document ).ready(function() {
    var oldSearch = $('#filter').val();
    console.log( "ready!" );

    $('#filter').hide();
    $('#filtersubmit').click(function(e) {
    		e.preventDefault();
    		$('#filter').animate({width: 'toggle'}).focus();
        $('#filtersubmit').animate({"font-size": "toggle",
      }, 180);
      $('#random').animate({"font-size": "toggle",
    }, 180);

    });


function search(searchTerms){

      $.ajax({
          type: "GET",
          url:"https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&&gsrlimit=15gsrnamespace=0&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+searchTerms,
          contentType: "application/json; charset=utf-8",
          async: false,
          dataType: "jsonp",
          success: function (data, textStatus, jqXHR) {
              var raw = data["query"]["pages"];
              organize(raw);

          },
          error: function (errorMessage) {
              console.log("there was an error processing your request");
          }
        });

    }

function organize(rawData){
  for (x in rawData){
		console.log(rawData[x]);
    var website = 'https://en.wikipedia.org/wiki?curid='+(rawData[x]["pageid"]);
		var title = "<h3 class='post-title'>"+rawData[x]["title"]+"<h3>";

    var extract= "<p class='extract'>"+rawData[x]["extract"]+"<p>";
    $('#results').append("<a href="+website+"><div class='containter-fluid posts'>"+title+ extract+"</div></a></br>");
	}
  $('.posts').css({
      'border' : '3px solid black',
      'border-radius' : '10px',
});
}

function clean(){
  $('#results').empty();
}

    $("#filter").keyup(function (e) {
        var searchTerms = $('#filter').val();
        if (e.keyCode == 13 && searchTerms!='') {
            search(searchTerms);
        }
    });

    $("#filter").keyup(function (e) {
        if (e.keyCode == 8 && oldSearch!== $('#filter').val() && $('#filter').val()!=='') {
            clean();
        }
        else if ($('#filter').val()==='' && e.keyCode == 8) {
          $('#filter').animate({width: 'toggle'}).focus();
          $('#filtersubmit').animate({"font-size": "toggle",
        }, 180);
        $('#random').animate({"font-size": "toggle",
      }, 180);
      clean();

        }
    });


});
