$(function(){
  $('.item a').click(function(){
    $(this).addClass('counted').animate({'opacity':.1}, 200, function(){ 
      $(this).removeClass('counted').animate({'opacity':1});
    });
    if($(this).hasClass('up')){
     $(this).siblings('b').children().text(function(i, t) {
        return Number(t) + 1;
      });
    } else {
      $(this).siblings('b').children().text(function(i, t) {
        return Number(t) - 1;
      });
    }
    return false;
  });
});