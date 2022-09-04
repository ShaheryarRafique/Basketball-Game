document.getElementById("home-score").textContent = 0;
document.getElementById("guest-score").textContent = 0;
document.getElementById("lead-team").textContent = "Winner Status Board";

let homePoint = 0, guestPoint = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let leadTeamEl = document.getElementById("lead-team");

function reset() {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    homePoint = 0;
    guestPoint = 0;
}

function incrementOne(team) {
    if(team === 'home') {
        console.log('One home team point added');  
        homePoint++;
        homeScoreEl.textContent = homePoint;
    }
    else {
        console.log('One guest team point added');  
        guestPoint++;
        guestScoreEl.textContent = guestPoint;
    }
    teamLead();
}

function incrementTwo(team) {
    if(team === 'home') {
        console.log('Two home team point added');  
        homePoint += 2;
        homeScoreEl.textContent = homePoint;
    }
    else {
        console.log('Two guest team point added');  
        guestPoint += 2;
        guestScoreEl.textContent = guestPoint;
    }
    teamLead();    
}

function incrementThree(team) {
    if(team === 'home') {
        console.log('Three home team point added');  
        homePoint += 3;
        homeScoreEl.textContent = homePoint;
    }
    else {
        console.log('Three guest team point added');  
        guestPoint += 3;
        guestScoreEl.textContent = guestPoint;
    }
    teamLead();   
}

function teamLead() {
    if(homePoint > guestPoint) {
        leadTeamEl.textContent = "Team Leading: Home";
    }
    else if(homePoint < guestPoint) {
        leadTeamEl.textContent = "Team Leading: Guest";
    }
    else {
        leadTeamEl.textContent = "Match Draw";
    }
}