$(document).ready(function() {
    function playslider() {
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).removeClass('rainbow');
          $(this).text("use this HTML?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("make this CSS?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("code this in Jquery?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("use Media Queries?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("make this Responsive?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("know what this does?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("make that slide?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("animate this element?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("make this table responsive?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("change this color?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("change the class?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).text("make a contact forum?");
        });
        $('.target').fadeIn(300).delay(1500).fadeOut(300, function() {
          $(this).addClass('rainbow');
          $(this).text("turn this into a rainbow?");
        });
        $('.target').fadeOut(300, playslider);

    }
    playslider();
});
