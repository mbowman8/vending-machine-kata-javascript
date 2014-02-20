var Machine = function() {
    this.reset();
};

Machine.prototype.reset = function(value) {
    that = this;
    $(function() {
        $(".js-output").text("INSERT COIN");
        $(".js-insert-nickel-btn").unbind().click(function(e) {
            that.insertNickel();
        });
        $(".js-insert-dime-btn").unbind().click(function(e) {
            that.insertDime();
        });
        $(".js-insert-quarter-btn").unbind().click(function(e) {
            that.insertQuarter();
        });
    });
    this._value = 0;
};

Machine.prototype.value = function(value) {
    if (value === undefined) {
        return this._value
    } else {
        this._value = value;
        $(".js-output").text(value);
    }
};

Machine.prototype.display = function() {
    return $(".js-output").text().trim();
};

Machine.prototype.insertValue = function(value) {
    this.value(this.value() + value);
}

Machine.prototype.insertNickel = function() {
    this.insertValue(5);
};

Machine.prototype.insertDime = function() {
    this.insertValue(10);
};

Machine.prototype.insertQuarter = function() {
    this.insertValue(25);
};
