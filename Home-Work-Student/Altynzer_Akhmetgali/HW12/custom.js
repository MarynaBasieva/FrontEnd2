jQuery(document).ready(function () {

	jQuery('.btn_baner').on('click',function(){
		jQuery('.modal-window').fadeIn('slow');
	});
	
	jQuery('.modal-close').on('click',function(){
		jQuery('.modal-window').fadeOut('slow');
	});
});