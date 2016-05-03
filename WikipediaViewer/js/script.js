$( document ).ready(function() {
    console.log( "ready!" );
    $('#filter').hide();
    $('#filtersubmit').click(function(e) {
    		e.preventDefault();
    		$('#filter').animate({width: 'toggle'}).focus();

    });


function search(){
  var searchTerms = $('#filter').val();
  if (searchTerms !== '') {
    $( "#results" ).append( "<p>"+searchTerms+"</p>" );

  }
}

    $("#filter").keyup(function (e) {
        if (e.keyCode == 13) {
            search();
        }
    });


});
