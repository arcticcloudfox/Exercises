// Write your JavaScript code here.
// Remember to pay attention to page loading!
function flightSimulator() {
const takeOff = document.getElementById('takeoff');
const paragraph = document.getElementById("flightStatus");
const background = document.getElementById("shuttleBackground");
const flightHeight = document.getElementById('spaceShuttleHeight');
const land = document.getElementById('landing');
const abortMission = document.getElementById('missionAbort');
const rocket = document.getElementById("rocket");
const up = document.getElementById('up');
const down = document.getElementById('down');
const right = document.getElementById('right');
const left = document.getElementById('left');
rocket.style.position = 'relative';
rocket.style.left = '0px';
rocket.style.top = '0px';

takeOff.addEventListener('click', () => {
    let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response === true) {
            paragraph.innerHTML = 'Shuttle in flight.';
            console.log('Shuttle in flight.');
            background.style.backgroundColor = "blue";
            flightHeight.innerHTML = parseInt(flightHeight.innerHTML) + 10000;
        } else {
            paragraph.innerHTML = 'Shuttle waiting for takeoff confirmation.';
            console.log('Shuttle waiting for takeoff confirmation.');
        }
});
land.addEventListener('click', () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    paragraph.innerHTML = 'The shuttle has landed.';
    background.style.backgroundColor = 'green';
    flightHeight.innerHTML = parseInt(flightHeight.innerHTML) - 10000;
});
abortMission.addEventListener('click', () => {
    let response = confirm("Confirm that you want to abort the mission.");
        if (response === true) {
            paragraph.innerHTML = 'Mission aborted.';
            console.log('Mission aborted.');
            background.style.backgroundColor = "green";
            flightHeight.innerHTML = parseInt(flightHeight.innerHTML) - 10000;
        } else {
            paragraph.innerHTML = 'Shuttle continuing mission.';
            console.log('Shuttle continuing mission.');
        }
});

up.addEventListener('click', () => {
    rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
    flightHeight.innerHTML = parseInt(flightHeight.innerHTML) + 10000;
});
down.addEventListener('click', () => {
    rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
    flightHeight.innerHTML = parseInt(flightHeight.innerHTML) - 10000;
});

right.addEventListener('click', () => {
    rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
});

left.addEventListener('click', () => {
    rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
})
}
window.addEventListener('load', flightSimulator);