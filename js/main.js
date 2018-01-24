function main() {
	
	
  $('.skillset1').hide();
  $('.skillset2').hide();
  $('.skillset3').hide();
  $('.skillset1').fadeIn(1500);
  $('.skillset2').fadeIn(3000);
  $('.skillset3').fadeIn(5000);
 
	$('.buscar').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
	})

 /*
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
	});*/
}

$(document).ready(main);