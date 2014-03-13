var Machine = function () {
	this.reset();
};

Machine.prototype.reset = function (value) {
	that = this;
	$(function () {
		$(".js-output").text("INSERT COIN");
		$(".js-coinReturn").text("EMPTY");
		$(".js-itemContainer").text("EMPTY");

		$(".js-insert-penny-btn").unbind().click(function (e) {
			that.insertPenny();
		});
		$(".js-insert-nickel-btn").unbind().click(function (e) {
			that.insertNickel();
		});
		$(".js-insert-dime-btn").unbind().click(function (e) {
			that.insertDime();
		});
		$(".js-insert-quarter-btn").unbind().click(function (e) {
			that.insertQuarter();
		});
		$(".js-take-penny-btn").unbind().click(function (e) {
			that.takePenny();
		});
		$(".js-buy-cola-btn").unbind().click(function (e) {
			that.buyCola();
		});
		$(".js-take-item-btn").unbind().click(function (e) {
			that.takeItem();
		});
	 });
	this._value = 0;
};

Machine.prototype.value = function (value) {
	if (value === undefined) {
		return this._value
	} else {
		this._value = value;
		$(".js-output").text(value);
	}
};

Machine.prototype.display = function () {
	return $(".js-output").text().trim();
};

Machine.prototype.coinReturn = function () {
	return $(".js-coinReturn").text().trim();
};

Machine.prototype.itemContainer = function () {
	return $(".js-itemContainer").text().trim();
};

Machine.prototype.insertValue = function (value) {
	this.value(this.value() + value);
}

Machine.prototype.subtractValue = function (value) {
	this.value(this.value() - value);
}

Machine.prototype.insertPenny = function () {
	$(".js-output").text("INVALID COIN");
	$(".js-coinReturn").text("PENNY");
};

Machine.prototype.insertNickel = function () {
	this.insertValue(5);
};

Machine.prototype.insertDime = function () {
	this.insertValue(10);
};

Machine.prototype.insertQuarter = function () {
	this.insertValue(25);
};

Machine.prototype.takePenny = function () {
	$(".js-coinReturn").text("EMPTY");
};

Machine.prototype.buyCola = function () {
	$(".js-itemContainer").text("EMPTY");
	$(".js-output").text("1.00");
};

Machine.prototype.takeItem = function () {
	$(".js-itemContainer").text("EMPTY");
};
