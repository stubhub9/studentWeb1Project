"use strict"
var $title = $('.js-title');
var copy   = '.js-copy';

/*  jQuery slideToggle
    Toggle slideUp/Down for all 
    <p> elements $("p").slideToggle();
*/
$title.click(function () {
  $(this).next(copy).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  return false;
});