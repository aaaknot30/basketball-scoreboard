let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homePoints = 0;
let guestPoints = 0;

function addPoints(team, points) {
    if (team == "home") {
        homePoints = homePoints + points
        homeEl.textContent = homePoints 
   } else {
        guestPoints = guestPoints + points
        guestEl.textContent = guestPoints 
   }
}

function newGame() {
    homePoints = 0
    homeEl.textContent = 0
    
    guestPoints = 0
    guestEl.textContent = 0
}
