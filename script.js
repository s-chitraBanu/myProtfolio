//navigation function
var sidenavbar = document.querySelector(".sidenavbar")

function shownav() {
    sidenavbar.style.right = "0"
}

function closenav() {
    sidenavbar.style.right = "-65%"
}

//read more function in about section
function clickmore() {
    var moretxt = document.getElementById("moretext")
    var morebtn = document.querySelector(".morebtn")
    var dot = document.getElementById("dot")

    if (dot.style.display === "none") {        //no text
        dot.style.display = "inline"
        morebtn.innerHTML = "Read more..."
        moretxt.style.display = "none"
    }

    else {                             //text
        dot.style.display = "none"
        morebtn.innerHTML = "Read less"
        moretxt.style.display = "inline"
    }
}

//read more function in experience sec card 1
function clickm() {
    var dots = document.getElementById("dots")
    var moret = document.getElementById("moret")
    var mbtn = document.querySelector(".mbtn")

    if (dots.style.display === "none") {
        dots.style.display = "inline"
        moret.style.display = "none"
        mbtn.innerHTML = "Read More..."
    }

    else {
        dots.style.display = "none"
        moret.style.display = "inline"
        mbtn.innerHTML = "Read Less"
    }
}

//read more function in experience sec card 2
function moretxt() {
    var dotss = document.getElementById("dotss")
    var moretxt = document.getElementById("moretx")
    var morebutn = document.querySelector(".morebutn")

    if (dotss.style.display === "none") {
        dotss.style.display = "inline"
        moretxt.style.display = "none"
        morebutn.innerHTML = "Read More..."
    }

    else {
        dotss.style.display = "none"
        moretxt.style.display = "inline"
        morebutn.innerHTML = "Read Less"
    }
}


//project section slider function

const projcon = document.querySelectorAll('.projcon')
const nxtBtn = document.querySelectorAll('.nxtbtn')
const beforeBtn = document.querySelectorAll('.beforebtn')

projcon.forEach(function(item, i) {
    let condimen = item.getBoundingClientRect()
    let conwidth = condimen.width

    nxtBtn[i].addEventListener('click', function () {
        item.scrollLeft += conwidth
    })

    beforeBtn[i].addEventListener('click', function () {
        item.scrollLeft -= conwidth
    })
})