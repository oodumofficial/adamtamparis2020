var x = 0;
var slides = [];
var images = [];

slides[0] = '';
slides[1] = 'slide1.mp4';
slides[2] = 'slide2.mp4';
slides[3] = 'slide3.mp4';
slides[4] = 'slide4.mp4';
slides[5] = 'slide5.mp4';
slides[6] = 'slide6.mp4';
slides[7] = 'slide7.mp4';
slides[8] = 'slide8.mp4';
slides[9] = 'slide9.mp4';
slides[10] = 'slide10.mp4';
slides[11] = 'slide11.mp4';

images[0] = 'img0.png';
images[1] = 'img1.png';
images[2] = 'img2.png';
images[3] = 'img3.png';
images[4] = 'img4.png';
images[5] = 'img5.png';
images[6] = 'img6.png';
images[7] = 'img7.png';
images[8] = 'img8.png';
images[9] = 'img9.png';
images[10] = 'img10.png';
images[10] = 'img11.png';

function leftArrow() {
    x--;
    if (x < 1) {
        x = 1
    };
    console.log(x);
    document.getElementById('video').loop = false;
    document.getElementById('video').muted = false;
    document.getElementById('video').src = slides[x];
    setTimeout(function(){
        document.getElementById('image').src = images[x];
    }, 400);
};

function rightArrow() {
    document.documentElement.requestFullscreen().catch(console.log);
    x++;
    if (x > 9) {
        x = 9
    };
    console.log(x);
    document.getElementById('video').loop = false;
    document.getElementById('video').muted = false;
    document.getElementById('video').src = slides[x];
    setTimeout(function(){
        document.getElementById('image').src = images[x];
    }, 3000); 
};

function switchSlide() {
    var askSlide = prompt('What slide number?');
    var setSlide = Number.parseInt(askSlide);
    x = (setSlide -1);
}

function changeNum(event) {
    switch (event.keyCode) {
        case 37:
            leftArrow();
        break;

        case 39:
            rightArrow();
        break;

        case 80:
            switchSlide();
        break;

        case 70:
            openFullscreen();
        break;
    }
};

function start() {
    window.addEventListener('keydown', changeNum);
};

function getFS() {
    return document.fullscreenElement
        || document.webkitFullscreenElement;
}

function openFullscreen() {
    if(getFS()) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen().catch(console.log);
        };
    };
