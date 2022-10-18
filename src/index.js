//
// Try changing this code while viewing the frontend in the browser to see it live reload.
// See README.md for details on running this code.
//

var ball = document.getElementById('ball');


document.addEventListener('keydown', function (e) {
    if (e.which === 37) {
        moveBallLeft()
    }
})

function moveBallLeft() {  
    var leftNumbers = ball.style.left.replace('px', '')
    
    var left = parseInt(leftNumbers, 10)
    console.log(ball.style.marginLeft);
    console.log('left pred' + ball.style.left);
    if (left > 0) {
        ball.style.left = `${left - 1}px`
    }
    console.log('left po' + ball.style.left);
}



//var myVar = setInterval(spostaDiv, 90);
var margin = 0;

let l = window.screen.width;
let w = 1300;

/* function spostaDiv() {
    console.log(w);
    console.log(ball);
    if (margin == w) {//
        margin = 0 + "px";
    } else {
        ball.style.marginLeft = margin + "px";
    }
    margin += 10;
} */