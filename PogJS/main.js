function randomInt(min, max) {
    number = Math.floor(Math.random() * (max-min) + min);
    return number; 
}

container = document.getElementById("container");
element = document.getElementById("element");
current_color = 0;

function changeColor() {
    pallete = ["green", "red", "blue", "yellow", "aqua", "darkblue", "purple", "lime", "tomato"];
    color = randomInt(0, pallete.length);
    if(current_color == color) {
        changeColor();
    }
    else {
        container.style.backgroundColor = pallete[color];
        current_color = color;
    }
} 

function Move() {
    let x = 0;
    let y = 0;
    let xDir = 1;
    let yDir = 1;
    let speed = 2;

    let id = null;
    clearInterval(id);
    id = setInterval(bounce, 5);

    function bounce() {
        if(y + element.clientHeight >= container.clientHeight || y < 0) {
            yDir *= -1;
            changeColor();
        }
        if(x + element.clientWidth >= container.clientWidth || x < 0) {
            xDir *= -1;
            changeColor();
            element.style.transform = `scaleX(${xDir})`;
        }
        x += xDir * speed;
        y += yDir * speed;
        element.style.top = y + "px";
        element.style.left = x + "px";
    }
}
Move();