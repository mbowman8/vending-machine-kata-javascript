var machine;

describe("Jasmine Test Runner", function() {

  describe("Vending Machine", function() {

    beforeEach(function() {
      machine = new Machine();
    });

    afterEach(function() {
      machine.reset();
    });

    it("can be reset", function() {
        machine.reset();
        expect(machine.display()).toBe("INSERT COIN");
    });

    it("shows a status of INSERT COIN", function() {
        expect(machine.display()).toBe("INSERT COIN");
    });

    it("accepts nickels", function() {
        machine.insertNickel();
        expect(machine.display()).toBe("5");
    });

    it("accepts dimes", function() {
        machine.insertDime();
        expect(machine.display()).toBe("10");
    });

    it("accepts quarters", function() {
        machine.insertQuarter();
        expect(machine.display()).toBe("25");
    });

    it("accepts a quarter, a dime, and a nickel", function() {
        machine.insertQuarter();
        machine.insertDime();
        machine.insertNickel();
        expect(machine.display()).toBe("40");
    });

  });

});

