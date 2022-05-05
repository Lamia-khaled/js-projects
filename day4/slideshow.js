var images = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg", "img/5.jpeg", "img/6.jpeg"];
var index = 0;
var img = document.getElementById("myImg")
var btnNext = document.getElementById("next")
var btnprev = document.getElementById("prev")
var btnstop = document.getElementById("stop")
var btnslideshow = document.getElementById("slshow")
btnNext.onclick = function () {
    index++;
    if (index > images.length - 1)
        index = 0;
    img.setAttribute("src", `${images[index]}`);
}
btnprev.onclick = function () {

    index--;
    if (index < 0)
        index = images.length - 1;
    img.setAttribute("src", `${images[index]}`);
}

btnslideshow.onclick = function () {
    timer = setInterval(show, 3000);

}


function show() {
    index++;
    if (index > images.length - 1)
        index = 0;
    img.setAttribute("src", `${images[index]}`)
}


btnstop.onclick =function() {

    clearInterval(timer);
}









