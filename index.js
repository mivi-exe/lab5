var video = document.getElementById("vid");
var source = document.getElementById("src1");

var cheap = document.getElementById("cheap");
var expensive = document.getElementById("expensive");
var slow = document.getElementById("slow");
var fast = document.getElementById("fast");
var slow_active = document.getElementById("slow_active");
var fast_active = document.getElementById("fast_active");

var other_video = document.getElementById("other_video");

var book = document.getElementById("book");
var recipe = document.getElementById("recipe");
var youtube = document.getElementById("youtube");

video.addEventListener('timeupdate', function() {
    if (video.currentTime > 30) {
        show_recipe();
    }

    if (video.currentTime > 60) {
        show_youtube();
    }

    if (video.currentTime > 90) {
        show_book();
    }
});

function reverse_15() {
    video.currentTime = video.currentTime - 15;
}

function skip_15() {
    video.currentTime = video.currentTime + 15;
}


function swap_expensive() {
    source.src = 'assets/tikka_expensive.mp4';
    video.load();
}

function load_expensive() {
    video.pause();
    cheap.style.display = "none";
    expensive.style.display = "flex";
    other_video.style.display = "flex";
    other_video.classList.remove("fade-out");
    other_video.classList.add("fade-in");
    video.classList.add("img-fade-in");
    video.setAttribute("poster", 'assets/poster_expensive.png');
    source.src = 'assets/tikka_expensive.ogg';
    video.load();
    setTimeout(function() {
        video.classList.remove("img-fade-in");
    }, 1500);
}

function load_cheap() {
    video.pause();
    other_video.classList.remove("fade-in");
    other_video.classList.add("fade-out");
    cheap.style.display = "flex";
    expensive.style.display = "none";
    setTimeout(function() {
        other_video.style.display = "none";
    }, 500);
    video.setAttribute("poster", "assets/poster_cheap.png");
    video.classList.add("img-fade-in");
    source.src = 'assets/tikka.ogg';
    video.load();
    setTimeout(function() {
        video.classList.remove("img-fade-in");
    }, 1500);
}

function slow_down() {
    video.playbackRate = 0.5;
    slow.style.display = "none";
    slow_active.style.display = "flex";
}

function speed_up() {
    video.playbackRate = 1.75;
    fast.style.display = "none";
    fast_active.style.display = "flex";
}

function normal_speed_slow() {
    video.playbackRate = 1;
    slow.style.display = "flex";
    slow_active.style.display = "none";
}

function normal_speed_fast() {
    video.playbackRate = 1;
    fast.style.display = "flex";
    fast_active.style.display = "none";
}

function show_book() {
    book.style.display = "flex";
    book.classList.add("fade-in-book");
}

function show_youtube() {
    youtube.style.display = "flex";
    youtube.classList.add("fade-in-book");
}

function show_recipe() {
    recipe.style.display = "flex";
    recipe.classList.add("fade-in-book");
}
