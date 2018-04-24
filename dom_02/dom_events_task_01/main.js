// document.addEventListener("DOMContentLoaded", ready);

// var accoItem = document.querySelectorAll('.acco__item');
//
//
//         for (var i = 0; i < accoItem.length; i++) {
//             accoItem[i].addEventListener('click', function (e) {
//                 // console.log(e);
//                 // console.log( this.children[1].innerText);
//                 // console.log( '123');
//          }, false);
//         }
            
//
// var acco = document.querySelector('.acco');
//
//     acco.addEventListener('click', function (e) {
//         // console.log(e.currentTarget);
//         console.log(e.target);
//     });


$(document).ready(function () {
    $('.acco__trigger').on('click', function (e) {
        e.preventDefault();

        var item = $(this).closest('.acco__item');
        var textBlock = item.find('.acco__content-text');
        var reqHeight = textBlock.outerHeight();
        var containerTextBlock = item.find('.acco__content');


        containerTextBlock.css('height', reqHeight);
        console.log(reqHeight);
    })
})