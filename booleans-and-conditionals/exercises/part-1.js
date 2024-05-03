// Declare and initialize the variables for exercise 1 here:
<<<<<<< HEAD
let engingeIndicatorLight = "red blinking";
=======
let engineIndicatorLight = "red blinking";
>>>>>>> c1e6fb9a1c3db25fa0e8ac472b465d73c47485d8
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
// Engines are off will be printed.