// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should return 'nonprofit' for organization key", function() {
    expect(launchcode.organization).toBe("nonprofit");
  })
  test("should return 'Jeff' for executiveDirector key", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  })
  test("should return a number, '100', for percentageCoolEmployees key", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })
  test("should return an array containing ['Web Development', 'Data Analysis', 'Liftoff'] for programsOffered key with the array containing 3 elements", function() {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  })
  test("launchOutput() should return 'Launch!' when number is divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  })
  test("launchOutput() should return 'Code!' when number is divisible by 3", function(){
    expect(launchcode.launchOutput(3)).toBe("Code!");
  })
  test("launchOutput() should return 'Rocks!' when number is divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  })
  test("launchOutput() should return 'LaunchCode!' when number is divisible by 2 and 3", function() {
    expect(launchcode.launchOutput(2)).toBe("LaunchCode!");
  })
});