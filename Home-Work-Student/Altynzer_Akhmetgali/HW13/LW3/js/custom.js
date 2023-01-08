jQuery(document).ready(function () {

	jQuery('.btn_baner').on('click',function(){
		jQuery('.modal_bg').fadeIn('slow');
	});
	
	jQuery('.modal-close').on('click',function(){
		jQuery('.modal_bg').fadeOut('slow');
	});
});