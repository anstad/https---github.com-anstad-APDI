if (window.screen.width < 960) {
		 $(document).ready(function(){
 $(".drop").click(function(){
    $('.sub-main',this).toggleClass('sm-ho');
});
});
}
else {

   

$(document).ready(function(){
  $(".drop-down").hover(function(){
    $('.sub-main',this).addClass('hovered');
	$('.sub-main',this).siblings('a').addClass('activeParent');
  }, function(){
    $('.sub-main',this).removeClass('hovered');
	$('.sub-main',this).siblings('a').removeClass('activeParent');
 });
});

$(document).ready(function(){
 $(".dd").click(function(){
    $('.su-sub-main',this).toggleClass('sm-ho');
	this.$el.find( 'ul.sm-ho' ).prepend( '<li class="dl-back"><a href="#">back</a></li>' );
});
});

}

