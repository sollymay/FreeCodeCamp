$( document ).ready(function() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $(".content").append("<span id='quote'" + a[0].content +"</span>" + "<p id='comida'>&mdash; " + a[0].title + "</p>")
});
});
