var machine;

describe("Jasmine Test Runner", function () {

	describe("Vending Machine", function () {

		beforeEach(function () {
			machine = new Machine();
		});

		afterEach(function () {
			machine.reset();
		});

		it("can be reset", function () {
			machine.reset();
			expect(machine.display()).toBe("INSERT COIN");
		});

		it("shows a status of INSERT COIN", function () {
			expect(machine.display()).toBe("INSERT COIN");
		});

		it("accepts nickels", function () {
			machine.insertNickel();
			expect(machine.display()).toBe("5");
		});

		it("accepts dimes", function () {
			machine.insertDime();
			expect(machine.display()).toBe("10");
		});

		it("accepts quarters", function () {
			machine.insertQuarter();
			expect(machine.display()).toBe("25");
		});

		it("accepts a quarter, a dime, and a nickel", function () {
			machine.insertQuarter();
			machine.insertDime();
			machine.insertNickel();
			expect(machine.display()).toBe("40");
		});

		it("rejects pennies", function () {
			machine.insertPenny();
			expect(machine.coinReturn()).toBe("PENNY");
		});
		
        describe("when trying to buy cola without paying", function () {
			it("fails to buy cola", function () {
				machine.buyCola();
				expect(machine.itemContainer()).toBe("EMPTY");
			});
			
			it("tells you how much to pay", function () {
				machine.buyCola();
				expect(machine.display()).toBe("1.00");
			});
		});
	});
});
