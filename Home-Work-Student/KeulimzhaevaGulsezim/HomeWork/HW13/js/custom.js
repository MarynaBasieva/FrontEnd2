jQuery(document).ready(function () {

    jQuery('.btn_baner').on('click',function(){
        jQuery('.parent_modal').fadeIn('slow')
    });

    jQuery('.closed').on('click',function(){
        jQuery('.parent_modal').fadeOut('slow')
    });
});