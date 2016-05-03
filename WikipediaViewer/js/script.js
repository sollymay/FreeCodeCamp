$('#filtersubmit').click(function(e) {
		e.preventDefault();
		$('#filter').animate({width: 'toggle'}).focus();
    var searchTerms = $('#filter').val();
    if (searchTerms !== '') {
      $( "#results" ).append( "<p>"+searchTerms+"</p>" );

    }
});




$("#filter").keyup(function (e) {
    if (e.keyCode == 13) {
        console.log("you pressed enter");
    }
});
