let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
newFood = food.split(",").sort();
newEquipment = equipment.split(",").sort();
newPets = pets.split(",").sort();
newSleepAids = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold = [];
cargoHold.push(newFood);
cargoHold.push(newEquipment);
cargoHold.push(newPets);
cargoHold.push(newSleepAids);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
 const input = require('readline-sync');
 let question = input.question("Enter a cabinet number from 0-3: ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (question == 0) {
    console.log(`You've selected the ${cargoHold[0]} cabinet`);
} else if (question == 1) {
    console.log(`You've selected the ${cargoHold[1]} cabinet`);
} else if (question == 2) {
    console.log(`You've selected the ${cargoHold[2]} cabinet`);
} else if (question == 3) {
    console.log(`You've selected the ${cargoHold[3]} cabinet`);
} else {
    console.log("Error. Incorrect number input. Please try again");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let question = input.question("Please enter desired cabinet from 0-3: ");
if (question == 0) {
    console.log(`You've selected the ${cargoHold[0]} cabinet`);
} else if (question == 1) {
    console.log(`You've selected the ${cargoHold[1]} cabinet`);
} else if (question == 2) {
    console.log(`You've selected the ${cargoHold[2]} cabinet`);
} else if (question == 3) {
    console.log(`You've selected the ${cargoHold[3]} cabinet`);
} else {
    console.log("Error. Incorrect number input. Please try again");
}
let element = input.question("Now enter desired item: ");
if ()