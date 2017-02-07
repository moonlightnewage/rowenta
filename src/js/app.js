import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import slick from 'slick-carousel';

import sayHello from './lib/sayHello.js';
import dropdown from './lib/dropdown.js';

sayHello();

$(document).ready(function() {
    var startPage = $('.start').slick({
        prevArrow: $('.icon__arrow-left'),
        nextArrow: $('.icon__arrow-right')
    });
    
    var products = $('.products-slider').slick({
        infinite: false,
        prevArrow: $('.products__icon_left'),
        nextArrow: $('.products__icon_right')
    });
    
    dropdown('.features__btn');
});