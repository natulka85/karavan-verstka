/* //////////////////////////////////////////// GLOBALS VAR ///////////////////////////////////////////// */


$(window).on('load', function () {

})

$(document).ready(function () {
    /* //////////////////////////////////////////// GENERAL ///////////////////////////////////////////// */
    mainTabs();
    sliders();
    blockLink();
    adaptive();
    dropDownLists();
    initProductListPhotoGallery();
    formMein();
    inputCounter();
    CatalogControlsLink();
});

$(window).on('resize', function () {
    mainTabs();
    adaptive();
})

function mainTabs() {
    $('.is-default-active').addClass('is-active');

    $('.js-main-tabs').on('click', function (e) {
        e.preventDefault();

        if($(this).parents('.left-menu').length > 0){
            if ($(window).width() > 960) {
                $(this).siblings().removeClass('is-active');
                $(this).parents('.main-tabs').find('.js-content-tabs').removeClass('is-active');
            }
        }
        else{
            $(this).siblings().removeClass('is-active');
            $(this).parents('.main-tabs').find('.js-content-tabs').removeClass('is-active');
        }

        $(this).addClass('is-active');
        var id = $(this).find('a').attr('href');
        $(this).parents('.main-tabs').find(id).addClass('is-active');
    });

    $('.js-close-tabs').on('click', function (e) {
        e.preventDefault();
        $(this).parent().removeClass('is-active');
        var idTab = $(this).parent().attr('id');
        $('.js-main-tabs:has(a[href="#'+ idTab +'"])').removeClass('is-active');
    });
}
function sliders() {
    if ($('.js-main-slider-1').length > 0) {
        $('.js-main-slider-1').slick({
            slidesToScroll: 1,
            draggable: false,
            slidesToShow: 5,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1496,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        touchMove: false
                    },
                },
                {
                    breakpoint: 686,
                    settings: {
                        slidesToShow: 2,
                        touchMove: false
                    }
                }
            ]
        });
    }
    if($('.js-page-slider-1').length > 0){
        $('.js-page-slider-1').slick({
            slidesToScroll: 1,
            draggable: false,
            slidesToShow: 3,
            infinite: false,
            responsive: [
                {
                    breakpoint: 581,
                    settings: {
                        slidesToShow: 2,
                        touchMove: false
                    }
                }
            ]
        });
    }
}
function blockLink() {
    $('.js-block-link').on('click', function () {
        var url = $(this).children().attr('href');
        window.location = url;
    });
}

function adaptive() {
    var size = $(window).width();

    if(size <= 1728 && size > 1166){
        $('.products-list.is-cards .subscribe-page-block').insertAfter($('.products-list.is-cards .products-list__item').eq(2)).addClass('is-moved');
        $('.products-list.is-list .subscribe-page-block').insertAfter($('.products-list.is-list .products-list__item').eq(5)).addClass('is-moved');
    }
    if(size > 1728){
        $('.products-list.is-cards .subscribe-page-block.is-moved').insertAfter($('.products-list.is-cards .products-list__item').eq(3)).removeClass('is-moved');
        $('.products-list.is-list .subscribe-page-block.is-moved').insertAfter($('.products-list.is-list .products-list__item').eq(7)).removeClass('is-moved');
    }

    if (size <= 960) {
        ///
        $('.left-menu .is-default-active').removeClass('is-active');
        $('.left-menu .js-main-tabs').removeClass('is-active');
        $('.left-menu .js-content-tabs').removeClass('is-active');
        ///
        $('.main-search').prependTo($('.page-header')).addClass('is-moved');
        ///
        $('.products-list.is-cards .subscribe-page-block').insertAfter($('.products-list.is-cards .products-list__item').eq(1)).addClass('is-moved');
        //////
        $('.products-list.is-list .subscribe-page-block').insertAfter($('.products-list.is-list .products-list__item').eq(3)).addClass('is-moved');
        /////
        $('.products-list.is-list-small .subscribe-page-block').insertAfter($('.products-list.is-list-small .products-list__item').eq(7)).addClass('is-moved');
        /////
        $('.catalog-sections-wrap .plate-block .subscribe-page-block').insertAfter($('.plate-block .plate-block__elem').eq(7)).addClass('is-moved');
        //
        $('.left-reviews').appendTo($('.main-content-inner')).addClass('is-moved');
        //
        $('.left-news').appendTo($('.main-content-inner')).addClass('is-moved');
    }

    if (size > 960) {
        $('.main-search.is-moved').prependTo($('.sidebar-bar')).removeClass('is-moved');
        ///
        $('.catalog-sections-wrap .plate-block .subscribe-page-block.is-moved').insertAfter($('.plate-block .plate-block__elem').eq(11)).removeClass('is-moved');
        //
        $('.left-news.is-moved').appendTo($('.sidebar-bar')).removeClass('is-moved');
        //
        $('.left-reviews.is-moved').appendTo($('.sidebar-bar')).removeClass('is-moved');
        //
        $('.products-list.is-list-small.is-moved .subscribe-page-block').insertAfter($('.products-list.is-list-small .products-list__item').eq(3)).addClass('is-moved');

    }

    if (size <= 740) {
        $('.actions-timer__data-info').insertAfter($('.page-header-main__title')).addClass('is-moved');
    }

    if (size > 740) {
        $('.actions-timer__data-info.is-moved').prependTo($('.actions-timer')).removeClass('is-moved');
    }

    if (size <= 686) {
        $('.catalog-sections-wrap .plate-block .subscribe-page-block').insertAfter($('.plate-block .plate-block__elem').eq(5)).addClass('is-moved');
    }

    if (size > 686 && size < 960) {
        $('.catalog-sections-wrap .plate-block .subscribe-page-block').insertAfter($('.plate-block .plate-block__elem').eq(7)).addClass('is-moved');
    }


    if(size < 580){
        ////
        $('.products-list.is-cards .subscribe-page-block').insertAfter($('.products-list.is-cards .products-list__item').eq(2));
        ////
        $('.products-list.is-list .subscribe-page-block').insertAfter($('.products-list.is-list .products-list__item').eq(5)).addClass('is-moved');
        ///

    }
    if(size > 580 && size < 1166){
        ////
        $('.products-list.is-cards .subscribe-page-block').insertAfter($('.products-list.is-cards .products-list__item').eq(1));
        $('.products-list.is-list .subscribe-page-block.is-moved').insertAfter($('.products-list.is-list .products-list__item').eq()).removeClass('is-moved');

    }

}

function dropDownLists(){
    if($('.page-header__mobile-controls-select').length > 0){
        $('.page-header__mobile-controls-select').dropdown({
            stack : false,
        });
    }
    if($('.catalog-filter__select').length > 0){
        $('.catalog-filter__select').each(function () {
            $(this).dropdown({
                stack : false,
            });
        });
    }
}

// PHOTO GALLERY
function initProductListPhotoGallery() {

    function noArrows($quant, $class){
        $($class).each(function(){
            if($(this).find($class +'-link').length <= $quant){
                $(this).addClass('is-no-arrows');
            }
        });
    }
    if($('.products-list.is-cards').length > 0){
        noArrows(3, '.products-list__preview-photos');
        $('.js-product-list-photos').each(function(index){
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                fade: true,
                dots: false,
                draggable: false,
                toucheventsMove: false,
                infinite:false,
                touchMove: false,
                asNavFor: '.js-product-preview-photos.index-'+index,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            fade: false,
                            touchMove: false
                        }
                    }
                ]
            });
        });
        $('.js-product-preview-photos').each(function(index){
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: true,
                draggable: false,
                centerMode: false,
                focusOnSelect: true,
                verticalSwiping: true,
                infinite:false,
                touchMove: false,
                dots: false,
                asNavFor: '.js-product-list-photos.index-'+ index,
            });
        });
    }
    if($('.similar-products').length > 0){
        noArrows(3, '.products-list__preview-photos');
        $('.js-product-list-photos').each(function(index){
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                fade: true,
                dots: false,
                draggable: false,
                toucheventsMove: false,
                infinite:false,
                touchMove: false,
                asNavFor: '.js-product-preview-photos.index-'+index,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            fade: false,
                            touchMove: false
                        }
                    }
                ]
            });
        });
        $('.js-product-preview-photos').each(function(index){
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: true,
                draggable: false,
                centerMode: false,
                focusOnSelect: true,
                verticalSwiping: true,
                infinite:false,
                touchMove: false,
                dots: false,
                asNavFor: '.js-product-list-photos.index-'+ index,
            });
        });
    }
    if($('.products-list.is-list').length > 0){
        noArrows(2, '.products-list__preview-photos');
        $('.js-product-list-photos').each(function(index){
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                fade: true,
                dots: false,
                draggable: false,
                toucheventsMove: false,
                infinite:false,
                touchMove: false,
                asNavFor: '.js-product-preview-photos.index-'+index,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            fade: false,
                            touchMove: false
                        }
                    }
                ]
            });
        });
        $('.js-product-preview-photos').each(function(index){
            $(this).slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                vertical: true,
                draggable: false,
                centerMode: false,
                focusOnSelect: true,
                verticalSwiping: true,
                infinite:false,
                touchMove: false,
                dots: false,
                asNavFor: '.js-product-list-photos.index-'+ index,
            });
        });
    }
    if($('.detail-product').length > 0){
        noArrows(4, '.detail-product__preview-photos');
        $('.js-detail-product-photos').each(function(index){
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                fade: true,
                dots: false,
                draggable: false,
                toucheventsMove: false,
                infinite:false,
                touchMove: false,
                asNavFor: '.js-detail-product-preview-photos.index-'+index,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            fade: false,
                            touchMove: false
                        }
                    }
                ]
            });
        });
        $('.js-detail-product-preview-photos').each(function(index){
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                draggable: false,
                centerMode: false,
                focusOnSelect: true,
                verticalSwiping: true,
                infinite:false,
                touchMove: false,
                dots: false,
                asNavFor: '.js-detail-product-photos.index-'+ index,
                responsive: [
                    {
                        breakpoint: 1167,
                        settings: {
                            vertical: false
                        }
                    },
                    {
                        breakpoint: 740,
                        settings: {
                            vertical: true
                        }
                    }
                ]
            });
        });
    }
    if($('.our-stores').length > 0){
        noArrows(4, '.our-stores__preview-photos');
        $('.js-stores-photos').each(function(index){
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                fade: true,
                dots: false,
                draggable: false,
                toucheventsMove: false,
                infinite:false,
                touchMove: false,
                asNavFor: '.js-stores-preview-photos.index-'+index,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            fade: false,
                            touchMove: false
                        }
                    }
                ]
            });
        });
        $('.js-stores-preview-photos').each(function(index){
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                draggable: false,
                centerMode: false,
                focusOnSelect: true,
                verticalSwiping: true,
                infinite:false,
                touchMove: false,
                dots: false,
                asNavFor: '.js-stores-photos.index-'+ index,
                responsive: [
                    {
                        breakpoint: 1167,
                        settings: {
                            vertical: false
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 3,
                            vertical: false
                        }
                    },
                    {
                        breakpoint: 686,
                        settings: {
                            slidesToShow: 4,
                            vertical: true
                        }
                    }
                ]
            });
        });
    }
    if($('.shops-info').length > 0){
        noArrows(4, '.shops-info__preview-photos');
        $('.js-shops-info-photos').each(function(index){
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                fade: true,
                dots: false,
                draggable: false,
                toucheventsMove: false,
                infinite:false,
                touchMove: false,
                asNavFor: '.js-shops-info-preview-photos.index-'+index,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            fade: false,
                            touchMove: false
                        }
                    }
                ]
            });
        });
        $('.js-shops-info-preview-photos').each(function(index){
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                draggable: false,
                centerMode: false,
                focusOnSelect: true,
                verticalSwiping: true,
                infinite:false,
                touchMove: false,
                dots: false,
                asNavFor: '.js-shops-info-photos.index-'+ index,
                responsive: [
                    {
                        breakpoint: 1167,
                        settings: {
                            slidesToShow: 2,
                            vertical: true
                        }
                    }
                ]
            });
        });
    }

}
function formMein(){
    var label = $('.js-form label');
    var input = $('.js-form input');
    label.on('click', function(){
        $(this).css('display', 'none').next().focus();
    });
    input.on('focusout', function () {
        if($(this).val() == ''){
            $(this).prev().css('display', 'block');
        }
    });
}
function inputCounter(){
    $('.js-count').on('click', function () {
        var count = Number($(this).attr('data-count'));
        var input = $(this).siblings('input');
        var val = Number(input.val()) + count;
            if(val <= 0){
                val = 0;
            }
        input.val(val);
    });
}

function CatalogControlsLink(){
    $('.js-controls-link > div').on('click', function(){
        $(this).toggleClass('is-active');
    });
}