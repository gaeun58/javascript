let frozen = {
    movieTitle: "Frozen1",
    openingDay: "2014.01.16",
    genre: "Animation",
    cast: "Kristen Bell, Idina Menzel",
    src: "frozen1.jpg"
};

let aladdin = {
    movieTitle: "Aladdin",
    openingDay: "2019.05.23.",
    genre: "Adventure",
    cast: "Will Smith, Mena Massoud, Naomi Scott",
    src: "aladdin.jpg"
};

let lalaland = {
    movieTitle: "La La land",
    openingDay: "2016.12.07.",
    genre: "Drama",
    cast: "Ryan Gosling, Emma Stone",
    src: "lalaland.jpg"
};

let movieTitle = document.getElementsByClassName("movieTitle");
let info = document.getElementsByClassName("info");
let openingDay = document.getElementsByClassName("openingDay");
let genre = document.getElementsByClassName("genre");
let cast = document.getElementsByClassName("cast");

function showMovieInfo(title) {
    movieTitle[0].innerHTML = title.movieTitle;
    openingDay[0].innerHTML = title.openingDay;
    genre[0].innerHTML = title.genre;
    cast[0].innerHTML = title.cast;
    info[0].classList.remove("hide");
    document.getElementById("img").src = title.src;
}