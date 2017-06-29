/**
 * Created by Prince on 25/06/2017.
 */
$(document).ready(function() {
    $("[rel='tooltip']").tooltip();

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
});
