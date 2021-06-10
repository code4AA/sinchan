var CUSTOM = /** @class */ (function () {
    function CUSTOM(name, ID, Acc) {
        this.custName = name;
        this.custID = ID;
        this.custAcc = Acc;
    }
    CUSTOM.prototype.getsavingdeposit = function () {
        return "CustName:" + this.custName + " and custID:" + this.custID + " and return custAcc:" + this.custAcc + " with a intrest returnrate of 4% ";
    };
    CUSTOM.prototype.getreturndeposit = function () {
        return "CustName:" + this.custName + " and custID:" + this.custID + " and return custAcc:" + this.custAcc + " with a intrest return rate of 7% ";
    };
    CUSTOM.prototype.getfixeddeposit = function () {
        return "CustName:" + this.custName + " and custID:" + this.custID + " and return custAcc:" + this.custAcc + " with a intrest return rate of 2% ";
    };
    return CUSTOM;
}());
var emp3 = new CUSTOM('alexa', 125, 100101010);
console.log(emp3.custName, emp3.custID, emp3.custAcc);
console.log(emp3.getsavingdeposit());
console.log(emp3.getreturndeposit());
console.log(emp3.getfixeddeposit());
