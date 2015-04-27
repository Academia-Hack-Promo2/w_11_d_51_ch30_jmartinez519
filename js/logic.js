$(function(){
 
  var divs = $('.random');

  divs.click(function(){
    var random = Math.random();
    $(this).text(random);
  })
  

});         