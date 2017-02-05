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
        prevArrow: $('.icon-arrow-left'),
        nextArrow: $('.icon-arrow-right')
    });
   
    dropdown('.features__btn');
});