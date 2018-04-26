// document.addEventListener("DOMContentLoaded", ready);

// Вот так бы это выглядело на JQuery
// $(document).ready(function () {
//     $('.acco__trigger').on('click', function (e) {
//         e.preventDefault();
//
//         var item = $(this).closest('.acco__item');
//         var textBlock = item.find('.acco__content-text');
//         var reqHeight = textBlock.outerHeight();
//         var containerTextBlock = item.find('.acco__content');
//         var otherItems = item.siblings();
//         var otherItemsText = otherItems.find('.acco__content')
//
//         if (item.hasClass('active')) {
//             containerTextBlock.css('height', 0);
//             item.removeClass('active');
//         } else {
//             item.addClass('active');
//             containerTextBlock.css('height', reqHeight);
//             otherItems.removeClass('active');
//             otherItemsText.css('height', 0 )
//         }
//         // console.log(reqHeight);
//     })
// })

var acco = document.querySelector('.acco');

acco.addEventListener('click', toggle);

function toggle(node) {
    var item = node.target.parentNode;
    var containerTextBlock = item.lastElementChild;
    // var style = node.target.parentNode.lastElementChild.style;
    
    console.log(containerTextBlock);


    if (item.classList.contains('active')) {
        containerTextBlock.style.maxHeight = 0;
        item.classList.remove('active');
    } else {
        containerTextBlock.style.maxHeight = "300px";
        item.classList.add('active');
    }
}
