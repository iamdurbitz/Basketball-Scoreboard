let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreNum = 0
let guestScoreNum = 0

function homeInc1() {
    homeScoreNum += 1
    homeScore.textContent = homeScoreNum
}

function homeInc2() {
    homeScoreNum += 2
    homeScore.textContent = homeScoreNum
}

function homeInc3() {
    homeScoreNum += 3
    homeScore.textContent = homeScoreNum
}

function guestInc1() {
    guestScoreNum += 1
    guestScore.textContent = guestScoreNum
}

function guestInc2() {
    guestScoreNum += 2
    guestScore.textContent = guestScoreNum
}

function guestInc3() {
    guestScoreNum += 3
    guestScore.textContent = guestScoreNum
}

function homeReset() {
    homeScoreNum = 0
    homeScore.textContent = homeScoreNum
}

function guestReset() {
    guestScoreNum = 0
    guestScore.textContent = guestScoreNum
}