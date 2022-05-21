"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
        this.count = 0;
    }
    //push function
    Stack.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
        return this.count - 1;
    };
    //pop function
    Stack.prototype.pop = function () {
        if (this.count == 0) {
            return undefined;
        }
        else {
            var deletedItem = this.items[this.count - 1];
            this.count--;
            return deletedItem;
        }
    };
    return Stack;
}());
exports.Stack = Stack;
