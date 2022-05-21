"use strict";
exports.__esModule = true;
exports.bankAccount = void 0;
var bankAccount = /** @class */ (function () {
    function bankAccount(_n, _b) {
        this.name = _n;
        this.balance = _b;
    }
    bankAccount.prototype.getAccountNum = function () {
        return bankAccount.accountNumber;
        bankAccount.accountNumber++;
    };
    bankAccount.prototype.display = function () {
        console.log(this.name, this.balance);
    };
    bankAccount.accountNumber = 1;
    return bankAccount;
}());
exports.bankAccount = bankAccount;
