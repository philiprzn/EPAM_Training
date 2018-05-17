var btn = document.querySelector('#button');

btn.addEventListener('click', function () {
    foo();
});

function debounce(func, wait, immediate) {
    var timeout;

    return function() {
        var context = this,
            args = arguments;

        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var foo = debounce(function() {
    alert("Hello!");
}, 1500);


