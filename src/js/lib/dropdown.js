export default function dropdown(button) {
    var button = $(button),
        frame = $(button).parent('.frame'),
        arrow = $(button).parent().next(),
        block = $(frame).parent().next('.frame');
    
    $(block).hide();
    
    $(button).on('click', function (event) {
        $(this).toggleClass('is-open');
        $(this).parent().toggleClass('frame');
        $(arrow).toggleClass('is-hidden');
        $(block).fadeToggle(600);
    });
}