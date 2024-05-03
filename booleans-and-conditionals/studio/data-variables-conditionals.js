// Initialize Variables below
const date = "Monday 2019-03-28";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
const preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Launch");
} else {
    console.log("Don't launch.");
}
// add logic below to verify all astronauts are ready
if (astronautStatus) {
    console.log("Launch");
} else {
    console.log("Don't launch.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Launch");
} else {
    console.log("Don't launch");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
    console.log("Launch");
} else {
    console.log("Don't launch");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel) {
    console.log("Launch");
} else {
    console.log("Don't launch");
}
// add logic below to verify the weather status is clear
if (weatherStatus) {
    console.log("Launch");
} else {
    console.log("Don't launch");
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count:" + astronautCount);
    console.log("Crew Mass: " + crewMassKg);
    console.log("Fuel Mass: " + fuelMassKg);
    console.log("Shuttle Mass: " + shuttleMassKg);
    console.log("Total Mass: " + totalMassKg);
    console.log("Fuel Temperature: " + fuelTempCelsius);
    console.log("Weather Status: " + weatherStatus);
    console.log("Have a safe flight!");
} else {
    console.log("Abort mission");
}