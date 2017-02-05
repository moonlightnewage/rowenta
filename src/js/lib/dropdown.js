export default function dropdown(button) {
    var button = $(button),
        frame = $(button).parent('.frame'),
        arrow = $(button).parent().next();
    
    $(button).on('click', function(event) {
       $(this).addClass('is-open');
       $(this).parent().removeClass('frame');
       $(arrow).removeClass('is-hidden');
    });
}