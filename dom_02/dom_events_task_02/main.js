var btn = document.querySelector('.button');
var field = document.getElementById('field');
var countBox = 0;

btn.addEventListener('click', function addBlock() {
    createBlock(field);
});


function createBlock(parent) {
    var div = document.createElement('div'),
        width = generateWidth(),
        height = generateHeight();

    parent.appendChild(div);



    div.style.width = width + 'px';
    div.style.height = height + 'px';

    div.style.position = "absolute";
    div.style.left = setX(width) + 'px';
    div.style.top = setY(height) + 'px';

    div.style.background = generateColor();

    div.id = "box " + countBox;
    countBox++;
}

moveBlock (field);


function generateWidth() {
    return Math.floor(Math.random() * screen.width / 3);
    // return Math.floor(Math.random() * 200);
}
function generateHeight() {
    return Math.floor(Math.random() * screen.height / 3);
    // return Math.floor(Math.random() * 200);
}


function setX(blockWidth) {
    return Math.floor((Math.random() * screen.width / 2) - blockWidth);
    // return Math.floor((Math.random() * document.body.clientWidth) - blockWidth);
}
function setY(blockHeight) {
    return Math.floor((Math.random() * screen.height / 2) - blockHeight);
    // return Math.floor((Math.random() * document.body.clientHeight) - blockHeight);
}

function generateColor() {
    var symbols = '0123456789ABCDEF';
    var arr = symbols.split('');
    var color = "#";

    for (var i = 0; i < 6; i++){
        color += arr[Math.floor(Math.random() * arr.length)];
    }
    console.log(color);

    return color;
}


function moveBlock(field) {
    field.addEventListener('mousedown', function (e) {
        var block = e.target,
            coords = getCoords(block),
            shiftX = e.pageX - coords.left ,
            shiftY = e.pageY - coords.top ;

        block.style.position = 'absolute';

        moveAt(e);

        block.style.zIndex = -10;

        function moveAt(e) {
            block.style.left = e.pageX - shiftX + 'px';
            block.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        }

        document.addEventListener('mouseup', function end() {
            document.onmousemove = null;
            this.removeEventListener('mouseup', end);
        })
    });

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top - pageYOffset,
            left: box.left - pageXOffset
        };
    }

    block.ondragstart = function() {
        return false;
    };

}
