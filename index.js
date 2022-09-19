//--------------------Score Increment------------------------
let homeTeam = document.getElementById("home_Team");
let guestTeam = document.getElementById("guest_Team");
homeScore = 0
guestScore = 0

function addOneHome() {
    homeScore +=1
    homeTeam.textContent = homeScore
    leader()
}

function addTwoHome() {
    homeScore +=2
    homeTeam.textContent = homeScore
    leader()
}

function addThreeHome() {
    homeScore +=3
    homeTeam.textContent = homeScore
    leader()
}

function addOneGuest() {
    guestScore +=1
    guestTeam.textContent = guestScore
    leader()
}

function addTwoGuest() {
    guestScore +=2
    guestTeam.textContent = guestScore
    leader()
}

function addThreeGuest() {
    guestScore +=3
    guestTeam.textContent = guestScore
    leader()
}

//-------------------------New Game--------------------------------
function confirmAction() {
    let confirmAction = confirm("Are you sure ?");
    if (confirmAction) {
        newGame()
    }
  }

function newGame(){
    homeScore = 0
    guestScore = 0
    homeTeam.textContent = homeScore
    guestTeam.textContent = guestScore   
    leader()
}

//--------------------leader Highlight--------------------------

function leader() {
    if (homeScore != guestScore){
        if (homeScore > guestScore) {
            document.getElementById("homeLeader").style.boxShadow = "inset 0 0 0 4px white";
            document.getElementById("guestLeader").style.boxShadow = "inset 0 0 0 0px white";
        } else if (homeScore < guestScore) {
            document.getElementById("guestLeader").style.boxShadow = "inset 0 0 0 4px white";
            document.getElementById("homeLeader").style.boxShadow = "inset 0 0 0 0px white";
        }
    } else if (homeScore == guestScore){
        document.getElementById("guestLeader").style.boxShadow = "inset 0 0 0 0px white";
        document.getElementById("homeLeader").style.boxShadow = "inset 0 0 0 0px white";
    }
}